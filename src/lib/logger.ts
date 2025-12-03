type LogLevel = "info" | "warn" | "error" | "debug";

interface LogEntry {
  timestamp: string;
  level: LogLevel;
  message: string;
  data?: unknown;
}

class Logger {
  private readonly isDev = process.env.NODE_ENV === "development";
  private logs: LogEntry[] = [];

  private formatMessage(level: LogLevel, message: string, data?: unknown): LogEntry {
    const entry: LogEntry = {
      timestamp: new Date().toISOString(),
      level,
      message,
    };
    if (data !== undefined) {
      entry.data = data;
    }
    return entry;
  }

  private logToStorage(entry: LogEntry) {
    this.logs.push(entry);

    // Keep only last 100 logs in memory
    if (this.logs.length > 100) {
      this.logs.shift();
    }

    // In production, send critical errors to monitoring service
    if (!this.isDev && entry.level === "error") {
      this.sendToMonitoringService(entry);
    }
  }

  private sendToMonitoringService(entry: LogEntry) {
    // TODO: Implement integration with monitoring service (e.g., Sentry, LogRocket)
    // Example:
    // fetch('/api/logs', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(entry),
    // }).catch(() => {}) // Silently fail if logging fails
  }

  info(message: string, data?: unknown) {
    const entry = this.formatMessage("info", message, data);
    this.logToStorage(entry);
  }

  warn(message: string, data?: unknown) {
    const entry = this.formatMessage("warn", message, data);
    this.logToStorage(entry);
  }

  error(message: string, error?: unknown) {
    const entry = this.formatMessage("error", message, error);
    this.logToStorage(entry);
  }

  debug(message: string, data?: unknown) {
    if (this.isDev) {
      const entry = this.formatMessage("debug", message, data);
      this.logToStorage(entry);
    }
  }

  getLogs(): LogEntry[] {
    return [...this.logs];
  }

  getLogsByLevel(level: LogLevel): LogEntry[] {
    return this.logs.filter((log) => log.level === level);
  }

  clear() {
    this.logs = [];
  }
}

export const logger = new Logger();
