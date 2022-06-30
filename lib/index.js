"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a, _Logger_format, _Logger_write;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Logger = void 0;
const dayjs_1 = __importDefault(require("dayjs"));
const chalkmark_1 = __importDefault(require("chalkmark"));
class Logger {
    static error(message, error = true) {
        __classPrivateFieldGet(this, _a, "m", _Logger_write).call(this, `${message}`, 'black', 'bgRed', 'ERROR', error);
    }
    static info(message, error = false) {
        __classPrivateFieldGet(this, _a, "m", _Logger_write).call(this, message, 'black', 'bgBlue', 'INFO', error);
    }
    static warn(message, error = false) {
        __classPrivateFieldGet(this, _a, "m", _Logger_write).call(this, message, 'black', 'bgYellow', 'WARN', error);
    }
    static debug(message, error = false) {
        __classPrivateFieldGet(this, _a, "m", _Logger_write).call(this, message, 'black', 'bgMagenta', 'DEBUG', error);
    }
    static trace(message, error = false) {
        __classPrivateFieldGet(this, _a, "m", _Logger_write).call(this, message, 'black', 'bgYellow', 'TRACE', error);
    }
}
exports.Logger = Logger;
_a = Logger, _Logger_write = function _Logger_write(message, tagColor, bgTagColor, tag, error = false) {
    const timestamp = `[${(0, dayjs_1.default)().format('YYYY-MM-DD HH:mm:ss')}]`;
    const logTag = `[${tag}]`;
    const stream = error ? process.stderr : process.stdout;
    const item = __classPrivateFieldGet(this, _a, "f", _Logger_format)
        .replace('{tstamp}', (0, chalkmark_1.default)(`<gray>${timestamp}</gray>`))
        .replace('{tag}', (0, chalkmark_1.default)(`<${bgTagColor}><${tagColor}>[${tag}]</${tagColor}></${bgTagColor}>`))
        .replace('{txt}', (0, chalkmark_1.default)(`<white>${message}</white>`));
    stream.write(item);
};
_Logger_format = { value: "{tstamp} {tag} \t{txt}\n" };
//# sourceMappingURL=index.js.map