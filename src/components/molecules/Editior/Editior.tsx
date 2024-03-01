import React, { useEffect, useState } from 'react';
import { useQuill } from 'react-quilljs';
import 'quill/dist/quill.snow.css';
import { EditorCon, EditorFieldCon } from './Editor.style';
import { Typography } from '@mui/material';
import { Spacer } from '../../atoms';
const quillConfig = {
  modules: {
    toolbar: [
      ['bold', 'italic', 'underline'],
      [{ header: [1, 2, 3, 4, false] }],
      [{ list: 'ordered' }, { list: 'bullet' }],
      ['blockquote', 'code-block'],
      [{ color: [] }, { background: [] }],
      ['clean']
    ]
  }
};

interface editorProps {
  value: string;
  onChange: (value: string) => void;
  getRawValue?: (value: string) => string;
  label: string;
  error?: string;
}
export const Editior: React.FC<editorProps> = ({ getRawValue, error, label, onChange, value }) => {
  const { quill, quillRef, editorRef } = useQuill({ ...quillConfig });
  const [isFocused, setFocused] = useState(false);

  const handleFocus = () => {
    if (quill) {
      setFocused(true);
    }
  };

  const handleBlur = () => {
    if (quill) {
      setFocused(false);
    }
  };

  useEffect(() => {
    if (quill) {
      const insertInitialValue = () => {
        quill.clipboard.dangerouslyPasteHTML(0, value);
        quill.blur();
      };

      const getHTMLValue = () => quillRef.current.querySelector('.ql-editor').innerHTML;

      const handleContentsChange = () => {
        onChange(getHTMLValue());
        getRawValue && getRawValue(editorRef.current.innerText);
      };
      insertInitialValue();

      quill.on('text-change', handleContentsChange);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [quill]);

  return (
    <EditorCon>
      <label htmlFor={label}>
        <Typography variant="h4">{label}</Typography>
      </label>
      <Spacer height={5} />
      <EditorFieldCon isFocused={isFocused} error={!!error} onClick={handleFocus} onBlur={handleBlur}>
        <div ref={quillRef} />
      </EditorFieldCon>
      <Typography variant="h5">{error}</Typography>
      {!error && <Typography variant="h6">Describe the project detail use images if needed</Typography>}{' '}
    </EditorCon>
  );
};
