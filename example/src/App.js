import React, { useState, useRef } from 'react';
import FileTrap from 'react-file-trap';

function App() {

  const wrapperRef = useRef();
  const [currentEvent, setCurrentEvent] = useState(null);
  const [validFiles, setValidFiles] = useState([]);
  const [invalidFiles, setInvalidFiles] = useState([]);
  const [lastError, setLastError] = useState(null);

  const handleChange = (fileList) => {
    setValidFiles(fileList);
  };

  const handleDrag = (eventName) => {
    setCurrentEvent(eventName);
  };

  const handleDrop = () => {
    setCurrentEvent('dropped');
  };

  const onValidationError = (a, error) => {
    setInvalidFiles([...invalidFiles, ...a]);
    setLastError(error);
  }

  const browseFiles = () => {
    wrapperRef.current.browseFiles();
  };

  const resetWrapper = () => {
    wrapperRef.current.resetWrapper();
  };

  const resetThis = () => {
    setInvalidFiles([]);
    setCurrentEvent(null);
    setLastError(null);
  };

  return (
    <div className="App">
      <FileTrap
        ref={wrapperRef}
        handleDrag={handleDrag}
        handleDrop={handleDrop}
        onValidationError={onValidationError}
        handleChange={handleChange}
        browseOnClick={false}
      >
        <div style={{ margin: 10, border: "2px solid red" }}>
          <h2 style={{ margin: 5 }}>Current Event: {currentEvent}</h2>
          <h2 style={{ margin: 5 }}>Valid File Count: {validFiles.length}</h2>
          <h2 style={{ margin: 5 }}>Invalid File Count: {invalidFiles.length}</h2>
          <h2 style={{ margin: 5 }}>Last Error: {lastError}</h2>
          <button style={{ margin: 5 }} onClick={browseFiles}>Trigger Browse Outside of Wrapper</button>
        </div>
      </FileTrap>

      <div style={{ margin: 10, border: "2px solid red" }}>
        <button style={{ margin: 5 }} onClick={browseFiles}>Trigger Browse Outside of Wrapper</button>
        <button style={{ margin: 5 }} onClick={resetThis}>Reset This Component</button>
        <button style={{ margin: 5 }} onClick={resetWrapper}>Reset Wrapper Component</button>
      </div>

      <div style={{ margin: 10, border: "2px solid red" }}>
        <h2 style={{ margin: 5 }}>Valid Files</h2>
        <hr></hr>
        <ul>
          {validFiles.map((file, index) => <li key={index}>{file.name}</li>)}
        </ul>
        <h2 style={{ margin: 5 }}>Invalid Files</h2>
        <hr></hr>
        <ul>
          {invalidFiles.map((file, index) => <li key={index}>{file.name}</li>)}
        </ul>
      </div>

    </div>
  );
}

export default App;
