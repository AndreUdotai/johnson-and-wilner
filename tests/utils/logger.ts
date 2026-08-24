/**
 * Lightweight test logger.
 * Prefer this over raw console.log so CI output stays consistent and greppable.
 */
type LogLevel = "info" | "success" | "error";

function stamp(level: LogLevel, message: string): string {
  const timestamp = new Date().toISOString();
  return `[${timestamp}] [${level.toUpperCase()}] ${message}`;
}

export const logger = {
  info(message: string): void {
    console.log(stamp("info", message));
  },

  success(message: string): void {
    console.log(stamp("success", message));
  },

  error(message: string): void {
    console.error(stamp("error", message));
  },
};
