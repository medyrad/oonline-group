"use client";

import type React from "react";
import { Component, type ReactNode } from "react";

import { logger } from "@/lib/logger";

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
  componentName?: string;
  onError?: (error: Error, errorInfo: React.ErrorInfo) => void;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    const componentName = this.props.componentName || "Component";
    logger.error(`Error Boundary (${componentName}) caught an error:`, {
      error: error.message,
      stack: error.stack,
      componentStack: errorInfo.componentStack,
    });

    this.props.onError?.(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        this.props.fallback || (
          <div className="p-4 border border-destructive rounded-md bg-destructive/10">
            <h3 className="font-semibold text-destructive mb-2">
              {this.props.componentName || "Component"} Error
            </h3>
            <p className="text-sm text-muted-foreground">{this.state.error?.message}</p>
          </div>
        )
      );
    }

    return this.props.children;
  }
}
