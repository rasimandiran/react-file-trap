# React File Trap

Simple wrapper component that convert child component to a drag and drop file input.

## Demo

[![Edit remark-codesandbox demo](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/react-file-trap-bv386b)

## Installation

Install react-file-trap with [npm](https://www.npmjs.com/package/react-file-trap)

```bash
npm install react-file-trap  
```

## Usage

```javascript
<FileTrap
    ref={wrapperRef}
    allowedExtensions={['jpg', 'png']}
    handleChange={handleChange}
    handleDrag={handleDrag}
    handleDrop={handleDrop}
    onValidationError={onValidationError}
    fileCount={3}
    maxFileSize={2} // MB
    minFileSize={0.1} // MB
    browseOnClick={false}
    >
    <div style={{ margin: 10, border: "2px solid red" }}>
        <h2 style={{ margin: 5 }}>Current Event: {currentEvent}</h2>
        <h2 style={{ margin: 5 }}>Valid File Count: {validFiles.length}</h2>
        <h2 style={{ margin: 5 }}>Invalid File Count: {invalidFiles.length}</h2>
        <h2 style={{ margin: 5 }}>Last Error: {lastError}</h2>
    </div>
</FileTrap>
```

## Props

| Parameter | Type     | Description                | Default Value     | Notes     |
| :-------- | :------- | :------------------------- |:----------------- |:--------- |
| `ref` | `ref` | Suggest to use to reset and/or trigger browse outside of child component | `undefined` | Should be defined to trigger some [functions](https://github.com/rasimandiran/react-file-trap#functions)|
| `allowedExtensions` | `array` | Allowed file extensions | `undefined` | Don't provide to allow all file types |
| `handleChange` | `function` | Runs when selected and/or dropped a valid file | | Mandatory prop to handle files. See [events](https://github.com/rasimandiran/react-file-trap#events) |
| `handleDrag` | `function` | Runs for every drag event. Possible values: `dragover` `dragleave` | `undefined` | See [events](https://github.com/rasimandiran/test/tree/main#events) |
| `handleDrop` | `function` | Runs when dropped a file | `undefined` | See [events](https://github.com/rasimandiran/react-file-trap#events) |
| `onValidationError` | `function` | Runs everytime if dropped or selected file invalid | `undefined` | See [events](https://github.com/rasimandiran/react-file-trap#events) |
| `fileCount` | `number` | Allowed file count | `Number.MAX_VALUE` | |
| `maxFileSize` | `number` | Allowed upper limit for file size in MB | `Number.MAX_VALUE` | |
| `minFileSize` | `number` | Allowed lower limit for file size in MB | `0` | |
| `browseOnClick` | `boolean` | Trigger browse window on click to child component | `true` | |

## Events

### handleChange

Runs on every change on the valid files. `fileList` parameter includes all valid files.

```javascript
const handleChange = (fileList) => {
    setFiles(filesList);
    setTotalSize(byteFormatter(newFiles.reduce((acc, file) => acc + file.size, 0)));
};
```

### handleDrag

Runs on drag event, eventName parametet can be: `dragover` or `dragleave`

```javascript
const handleDrag = (eventName) => {
    setCurrentEvent(eventName);
};
```

### handleDrop

Runs after a dropped files.

```javascript
const handleDrop = () => {
    setCurrentEvent('dropped');
};
```

### onValidationError

Runs after selected/dropped files.

```javascript
const onValidationError = (invalidFileList, errorMsg) => {
    setInvalidFiles([...invalidFiles, ...invalidFileList]);
    setLastError(errorMsg);
}
```

## Functions

### browseFiles

Trigger browse window manually. `ref` prop is needed.

```javascript
wrapperRef.current.browseFiles();
```

### resetWrapper

To reset selected files. `ref` prop is needed.

```javascript
wrapperRef.current.resetWrapper();
```

### removeFile

To remove specific file. `file` should be provided as parameter. `ref` prop is also needed.

```javascript
wrapperRef.current.removeFile(file);
```

## Notes

For more details about usage, please check `example` project in the root directory.

## License

[MIT](https://choosealicense.com/licenses/mit/)
