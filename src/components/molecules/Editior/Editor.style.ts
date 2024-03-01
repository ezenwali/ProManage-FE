import { styled } from '@mui/material';
import { COLORS } from '../../../theme/colors';

const shouldForwardProp = (prop: string) => prop !== 'error' && prop !== 'isFocused';

export const EditorCon = styled('div', { shouldForwardProp })(() => ({
  [`& h5`]: {
    fontSize: '0.75rem !important',
    fontWeight: '400',
    color: COLORS.MainRed
  },
  [`& h6`]: {
    fontSize: '0.75rem !important',
    fontWeight: '400',
    color: COLORS.MainGreen
  },
  [`& h4`]: {
    fontSize: '1rem',
    fontWeight: '500'
  }
}));

export const EditorFieldCon = styled('div', { shouldForwardProp })<{ error: boolean; isFocused: boolean }>(
  ({ error, isFocused }) => ({
    [`.ql-toolbar.ql-snow`]: {
      borderRadius: '8px 8px 0 0',
      border: error
        ? `1px solid ${COLORS.MainRed}`
        : isFocused
        ? `1px solid ${COLORS.MainGreen}`
        : `1px solid ${COLORS.MainGray}`,
      borderBottom: 'none'
    },
    [`.ql-container.ql-snow`]: {
      borderRadius: '0 0 8px 8px',
      border: error
        ? `1px solid ${COLORS.MainRed}`
        : isFocused
        ? `1px solid ${COLORS.MainGreen}`
        : `1px solid ${COLORS.MainGray}`
    },
    [`.ql-editor`]: {
      minHeight: '150px'
    }
  })
);
