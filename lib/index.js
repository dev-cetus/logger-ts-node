import dayjs from "dayjs";
import chalkmark from "chalkmark";
export default class Logger {
    static #format = "{tstamp} {tag} \t{txt}\n";
    static error(message, error = true) {
        this.#write(`${message}`, 'black', 'bgRed', 'ERROR', error);
    }
    static info(message, error = false) {
        this.#write(message, 'black', 'bgBlue', 'INFO', error);
    }
    static warn(message, error = false) {
        this.#write(message, 'black', 'bgYellow', 'WARN', error);
    }
    static debug(message, error = false) {
        this.#write(message, 'black', 'bgMagenta', 'DEBUG', error);
    }
    static trace(message, error = false) {
        this.#write(message, 'black', 'bgYellow', 'TRACE', error);
    }
    static #write(message, tagColor, bgTagColor, tag, error = false) {
        const timestamp = `[${dayjs().format('YYYY-MM-DD HH:mm:ss')}]`;
        const logTag = `[${tag}]`;
        const stream = error ? process.stderr : process.stdout;
        const item = this.#format
            .replace('{tstamp}', chalkmark(`<gray>${timestamp}</gray>`))
            .replace('{tag}', chalkmark(`<${bgTagColor}><${tagColor}>[${tag}]</${tagColor}></${bgTagColor}>`))
            .replace('{txt}', chalkmark(`<white>${message}</white>`));
        stream.write(item);
    }
}
//# sourceMappingURL=index.js.map