import React, { useRef, useState, useEffect, useImperativeHandle } from 'react';

const FileTrap = React.forwardRef((props, ref) => {
    let {
        allowedExtensions,
        handleChange,
        handleDrag,
        handleDrop,
        onValidationError,
        fileCount,
        maxFileSize,
        minFileSize,
        browseOnClick,
        children
    } = props;

    const [fileList, setFileList] = useState([]);
    const inputRef = useRef(null);

    useImperativeHandle(ref, () => ({
        browseFiles: () => { browseFiles(null, true); },
        resetWrapper: () => { setFileList([]); }
    }));

    // triggers when fileList changes
    useEffect(() => {
        handleChange(fileList);
    }, [fileList, handleChange]);

    // handles event handlers passed as props
    const eventHandler = (eventFunc, params = []) => {
        if (typeof eventFunc === 'function') eventFunc(...params);
    };

    // handles file validation and adds files to fileList
    const _handleChange = (files) => {
        files = [...files];

        // remove duplicate files
        files = files.filter(file => !fileList.map(file => file.name).includes(file.name));

        if (allowedExtensions) {
            allowedExtensions = allowedExtensions.map(ext => ext.toLowerCase());
            let invalidFileList = files.filter(file => !allowedExtensions.includes(file.name.split('.').pop().toLowerCase()));
            if (invalidFileList.length > 0) eventHandler(onValidationError, [invalidFileList, 'InvalidFileType']);
            files = files.filter(file => !invalidFileList.includes(file));
        }

        if (maxFileSize) {
            maxFileSize = maxFileSize * 1e6;
            let invalidFileList = files.filter(file => file.size > maxFileSize);
            if (invalidFileList.length > 0) eventHandler(onValidationError, [invalidFileList, 'FileSizeTooLarge']);
            files = files.filter(file => !invalidFileList.includes(file));
        }

        if (minFileSize) {
            minFileSize = minFileSize * 1e6;
            let invalidFileList = files.filter(file => file.size < minFileSize);
            if (invalidFileList.length > 0) eventHandler(onValidationError, [invalidFileList, 'FileSizeTooSmall']);
            files = files.filter(file => !invalidFileList.includes(file));
        }

        if (fileCount && fileCount < (files.length + fileList.length)) {
            let invalidFileList = files.slice(fileCount - fileList.length);
            if (invalidFileList.length > 0) eventHandler(onValidationError, [invalidFileList, 'FileCountExeeds']);
            files = files.filter(file => !invalidFileList.includes(file));
        }

        // add files to fileList
        if (files.length > 0) setFileList([...fileList, ...files]);
    }

    // handle drag events
    const _handleDrag = function (e) {
        if (fileCount <= fileList.length) return;
        e.preventDefault();
        e.stopPropagation();
        eventHandler(handleDrag, [e.type]);
    };

    // triggers when file is dropped
    const _handleDrop = function (e) {
        if (fileCount <= fileList.length) return;
        e.preventDefault();
        e.stopPropagation();
        eventHandler(handleDrop);
        _handleChange(e.dataTransfer.files);
    };

    // triggers when file is selected with click
    const _handleInputChange = function (e) {
        e.preventDefault();
        _handleChange(e.target.files);
    };

    // triggers the input when the component is clicked
    const browseFiles = (e, force = false) => {
        if ((browseOnClick || force) && fileCount > fileList.length) inputRef.current.click();
    };

    return (
        <div
            onClick={browseFiles}
            onDragEnter={_handleDrag}
            onDragLeave={_handleDrag}
            onDragOver={_handleDrag}
            onDrop={_handleDrop}
        >
            <input
                type="file"
                ref={inputRef}
                style={{ display: 'none' }}
                onChange={_handleInputChange}
                multiple={(fileCount - fileList.length) > 1}
                accept={allowedExtensions.map(ext => "." + ext.toLowerCase()).join(",")}
            />
            {children}
        </div>
    );
});

export default FileTrap;