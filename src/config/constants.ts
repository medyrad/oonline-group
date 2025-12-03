export const APP_NAME = "Online Group";

export const API_CONFIG = {
  baseUrl: process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:4000",
} as const;

export enum LocaleCode {
  Fa = "fa",
  En = "en",
}

export const SUPPORTED_LOCALES = [LocaleCode.Fa, LocaleCode.En] as const;
