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

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `ref` | `ref` | Suggest to use to reset and/or trigger browse outside of child component |
| `allowedExtensions` | `array` | Allowed file extensions |
| `handleChange` | `function` | Runs when selected and/or dropped a valid file |
| `handleDrag` | `function` | Runs for every drag event. Possible values: `dragover` `dragleave` |
| `handleDrop` | `function` | Runs when dropped a file |
| `onValidationError` | `function` | Runs everytime if dropped or selected file invalid |
| `fileCount` | `number` | Allowed file count |
| `maxFileSize` | `number` | Allowed upper limit for file size in MB |
| `minFileSize` | `number` | Allowed lower limit for file size in MB |
| `browseOnClick` | `boolean` | Trigger browse window on click to child component |

For more details about usage, please check example project in the root directory.

## License

[MIT](https://choosealicense.com/licenses/mit/)
