import { Typography } from '@mui/material';
import { Spacer, Tag } from '../../atoms';
import { InputTagCon, TagCon, classes } from './inputTag.style';
import { useState } from 'react';

type tag = {
  name: string;
  id: number;
};

interface inputTagProps {
  tags: tag[];
  error?: string;
  onTagDelete: (id: number) => void;
  onChange: (tags: tag[]) => void;
  label: string;
}

export const InputTag: React.FC<inputTagProps> = ({ label, onChange, tags, error, onTagDelete }) => {
  const [isFocused, setFocused] = useState(false);
  const [tag, setTag] = useState('');

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      const nextId = tags.length > 0 ? Math.max(...tags.map(tag => tag.id)) + 1 : 1;

      onChange([...tags, { name: tag, id: nextId }]);
      setTag('');
    }
  };

  return (
    <TagCon>
      <label htmlFor={label}>
        <Typography variant="h4">{label}</Typography>
      </label>
      <Spacer height={5} />
      <InputTagCon error={!!error} isFocused={isFocused}>
        <div className={classes.tagsContainer}>
          {tags
            .sort((a, b) => a.name.length - b.name.length)
            .map(({ name, id }) => (
              <Tag id={id} name={name} key={id} handleDelete={id => onTagDelete(id)} />
            ))}
        </div>

        <div className={classes.inputCon}>
          <input
            placeholder="Enter a tag"
            type="text"
            value={tag}
            onChange={e => setTag(e.target.value)}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            onKeyDown={handleKeyDown}
            name={label}
          />
        </div>
      </InputTagCon>
      <Typography variant="h5">{error}</Typography>
      {!error && <Typography variant="h6">Type the name of the tag and press enter to create tag</Typography>}{' '}
    </TagCon>
  );
};
