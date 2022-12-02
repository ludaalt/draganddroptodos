import React, { useState } from 'react';

import classes from './InputFile.module.scss';

const InputFile: React.FC = () => {
  const [fileCount, setFileCount] = useState(0);

  const [files, setFiles] = useState<string[]>([]);

  const handleChangeFile: any = (event: any) => {
    const file = event.target.files[0];
    const formData = new FormData();
    formData.append('file', file);

    setFiles((state) => [...state, file.name]);

    let newCount = fileCount;
    setFileCount(++newCount);
  };

  return (
    <>
      <input
        onChange={handleChangeFile}
        type='file'
        name='file'
        id='file'
        className={classes.fieldFile}
        multiple
      />

      <label htmlFor='file'>
        <div className={classes.fileFake}>
          {fileCount > 0 ? `Choosen ${fileCount} files` : 'No file choosed'}
        </div>
        <div className={classes.fileButton}>Choose file to upload</div>
      </label>
    </>
  );
};

export default InputFile;
