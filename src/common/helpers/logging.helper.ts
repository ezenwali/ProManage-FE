import _ from 'lodash';
import toast from 'react-hot-toast';

type LogContent = {
  name: string;
  message?: string;
  data?: unknown;
  showToast?: boolean;
  excludeCallStack?: boolean;
};

enum LogLevel {
  Info,
  Error
}

const logToastFn = {
  [LogLevel.Info]: toast,
  [LogLevel.Error]: toast.error
};

class LoggerService {
  logInfo(content: LogContent) {
    this.log(_.defaults(content, { message: 'info', excludeCallStack: true }), LogLevel.Info);
  }

  logError(content: LogContent) {
    this.log(content, LogLevel.Error);
  }

  private log({ name, message, data, showToast, excludeCallStack }: LogContent, level: LogLevel) {
    if (!import.meta.env.PROD) {
      const logFn = level === LogLevel.Error ? console.error : console.log;

      logFn(`[${name}]: ${message || 'something went wrong'}`);
      !_.isNil(data) && console.log(data);
      !excludeCallStack && this.logCallStack();
      showToast && logToastFn[level](`[DEV Logger]: ${message || 'something went wrong'}`, { id: name });
      return;
    }
    //Log error to production using BE endpoint
  }

  private logCallStack() {
    console.log(new Error());
  }
}

/**
 * This logger will be use for logging in developmment and also production. In production the log will be save
 * on the BE and not the console.
 */
export const logger = new LoggerService();
