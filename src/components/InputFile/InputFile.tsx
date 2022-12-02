import React, { useState } from 'react';

import classes from './InputFile.module.scss';
import { getBase64 } from '../../services/getBase64';

const InputFile: React.FC = () => {
  const [fileCount, setFileCount] = useState(0);

  const [files, setFiles] = useState<string[]>([]);

  const handleChangeFile = (event: React.ChangeEvent<HTMLInputElement>): void => {
    if (!event?.target.files || event.target.files.length === 0) return;
    const file = event.target.files[0];

    setFiles((state) => [...state, file.name]);
    let newCount = fileCount;
    setFileCount(++newCount);

    getBase64(file).then((base64) => {
      localStorage.fileBase64 = base64;
    });
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      <div style={{ width: 'calc((100% - 20px) / 2)' }}>
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
      </div>

      <ul style={{ width: 'calc((100% - 20px) / 2)' }}>
        {files.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default InputFile;
