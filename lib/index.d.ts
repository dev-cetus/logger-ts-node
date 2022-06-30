export default class Logger {
    static error(message: string | Error, error?: boolean): void;
    static info(message: string | Error, error?: boolean): void;
    static warn(message: string | Error, error?: boolean): void;
    static debug(message: string | Error, error?: boolean): void;
    static trace(message: string | Error, error?: boolean): void;
}
