import { Chip, styled } from '@mui/material';

const shouldForwardProp = (prop: string) => prop !== 'bcolor' && prop !== 'borderColor';

export const StyledChip = styled(Chip, { shouldForwardProp })<{ bcolor: string; borderColor: string }>(
  ({ bcolor, borderColor }) => ({
    backgroundColor: bcolor,
    borderColor: borderColor,
    textTransform: 'lowercase',
    maxWidth: '120px'
  })
);
