export default class Logger {
    #private;
    static error(message: string, error?: boolean): void;
    static info(message: string, error?: boolean): void;
    static warn(message: string, error?: boolean): void;
    static debug(message: string, error?: boolean): void;
    static trace(message: string, error?: boolean): void;
}
