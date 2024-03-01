import { Avatar as AvatarImg, styled } from '@mui/material';
import { COLORS } from '../../../theme/colors';

const PREFIX = 'TaskContainerRapper';
export const classesContainerRapper = {
  header: `${PREFIX}-header`
};

export const DetailsPage = styled('div')(() => ({}));

export const ProjectBoard = styled('div')(() => ({
  display: 'flex',
  overflowX: 'auto',
  scrollbarWidth: 'none',
  '-ms-overflow-style': 'none',
  gap: '20px',
  '&::-webkit-scrollbar': {
    display: 'none'
  }
}));

export const DragDroparea = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem'
}));

export const TaskContainerRapper = styled('div')(({ theme }) => ({
  flex: '1',
  minWidth: '250px',
  maxWidth: '400px',
  padding: '1rem',
  display: 'flex',
  flexDirection: 'column',
  borderRadius: '0.625rem',
  backgroundColor: COLORS.MildGray,
  [theme.breakpoints.down('md')]: {
    flexBasis: '250px',
    flexShrink: 0
  },

  [`& .${classesContainerRapper.header}`]: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },

  '& h3': {
    fontSize: '1rem',
    fontWeight: '600'
  },

  '& svg': {
    fontSize: '1rem',
    fontWeight: '500',
    transition: 'transform 0.3s ease',
    cursor: 'pointer',
    '&:hover': {
      transform: 'scale(1.1)'
    }
  }
}));

const PREFIX_TASKWRAPPER = 'TaskRapper';

export const classestaskRapper = {
  header: `${PREFIX_TASKWRAPPER}-header`,
  titleHead: `${PREFIX_TASKWRAPPER}-titleHead`,
  tags: `${PREFIX_TASKWRAPPER}-tags`,
  tag: `${PREFIX_TASKWRAPPER}-tag`,
  options: `${PREFIX_TASKWRAPPER}-options`
};

export const TaskRapper = styled('div', { shouldForwardProp: prop => prop !== 'isDragged' })<{ isDragged: boolean }>(
  ({ isDragged }) => ({
    padding: '15px',
    borderRadius: '15px',
    backgroundColor: isDragged ? COLORS.MildGray_BG : COLORS.White,
    cursor: 'pointer',
    transition: '0.15s ease-in-out',

    [`& .${classestaskRapper.header}`]: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    },

    [`& .${classestaskRapper.titleHead}`]: {
      display: 'flex',
      justifyContent: 'flex-start',
      alignItems: 'center',
      width: '90%'
    },

    [`& .${classestaskRapper.tags}`]: {
      display: 'flex',
      gap: '5px',
      flexWrap: 'wrap'
    },

    [`& .${classestaskRapper.options}`]: {
      display: 'none'
    },

    '& h4': {
      whiteSpace: 'nowrap',
      fontSize: '0.85rem',
      fontWeight: '600',
      border: '1px solid green',
      padding: '0.1rem 0.3rem'
    },

    '& h2': {
      fontSize: '1.2rem',
      fontWeight: '600',
      width: '70%'
    },

    '& p': {
      fontSize: '0.85rem',
      letterSpacing: '0.02rem',
      fontWeight: '500'
    },

    '&:hover': {
      backgroundColor: COLORS.MildGray_BG,

      [`& .${classestaskRapper.options}`]: {
        display: 'block'
      }
    }
  })
);

export const Avatar = styled(AvatarImg)`
  margin-left: -2px;
  box-shadow: 0 0 0 2px #fff;
`;

const PREFIX_ProjectPageCon = 'ProjectPageCon';
export const classesProjectPageCon = {
  btn: `${PREFIX_ProjectPageCon}-header`
};

export const ProjectPageCon = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',

  '& section': {
    display: 'flex',
    gap: '2rem',
    flexWrap: 'wrap'
  },

  [`& .${classesProjectPageCon.btn}`]: {
    backgroundColor: `${COLORS.MainGray} !important`,

    '&:hover': {
      backgroundColor: `${COLORS.MildGray} !important`,
      color: `${COLORS.MainGray} !important`,
      filter: 'brightness(0.8)'
    }
  }
}));

export const Project = styled('div')(() => ({
  padding: '15px',
  borderRadius: '15px',
  backgroundColor: 'rgb(244, 245, 247)',
  width: '300px',
  cursor: 'pointer',
  transition: '0.2s ease-in-out',
  maxHeight: '200px',
  overflow: 'hidden',

  '& h3': {
    fontSize: '1.2rem',
    fontWeight: 'bold'
  },

  '& h4': {
    fontSize: '0.8rem',
    fontWeight: 'bold'
  },

  '& p': {
    fontSize: '0.85rem'
  },

  '& span': {
    fontWeight: 'normal'
  },

  '&:hover': {
    transform: 'scale(1.01)'
  }
}));
