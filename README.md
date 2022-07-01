# logger-ts-node
This library allows to create very simply the logs in the console.

# Documentation
### Install
```
npm install logger-ts-node
```
### Import
TS:
```typescript
import Logger from 'logger-ts-node';
```
JS:
```javascript
const {Logger} = require('logger-ts-node');
```
### Info
```javascript
Logger.info('This is an info message');
```

### Warn
```javascript
Logger.warn('This is a warning message');
```

### Error
```javascript
Logger.error('This is an error message');
```

### debug
```javascript
Logger.debug('This is a debug message');
```

### Trace
```javascript
Logger.trace('This is a trace message');
```
### Result
![Screenshot](https://i.imgur.com/VSucV0l.png)