import { StyledChip } from './Tag.style';
import { StringToColor } from '../../../common/helpers/stringToColor';

interface tagProps {
  name: string;
  id: number;
  handleDelete?: (index: number) => void;
}

export const Tag: React.FC<tagProps> = ({ name, id, handleDelete }) => {
  return (
    <StyledChip
      label={name}
      size="small"
      bcolor={StringToColor(name, 0.4)}
      variant="outlined"
      borderColor={StringToColor(name)}
      onDelete={
        handleDelete
          ? () => {
              handleDelete(id);
            }
          : undefined
      }
    />
  );
};
