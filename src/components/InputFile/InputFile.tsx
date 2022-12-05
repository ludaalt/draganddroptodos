import React, { useState } from 'react';

import classes from './InputFile.module.scss';
import { getBase64 } from '../../services/getBase64';

interface Props {
  updateFiles: (b: any) => void;
}

const InputFile: React.FC<Props> = ({ updateFiles }) => {
  const [fileCount, setFileCount] = useState(0);

  const [files, setFiles] = useState<any>([]);

  const handleChangeFile = (event: React.ChangeEvent<HTMLInputElement>): void => {
    if (!event?.target.files || event.target.files.length === 0) return;

    const file = event.target.files[0];
    const newFiles = [...files];
    newFiles.push(file.name);
    setFiles(newFiles);

    updateFiles(file.name);
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
          <div className='button'>Choose file to upload</div>
        </label>
      </div>

      <ul style={{ width: 'calc((100% - 20px) / 2)' }}>
        {files.map((item: any) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default InputFile;
