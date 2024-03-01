import { Paper, Portal } from '@mui/material';
import Backdrop from '@mui/material/Backdrop';
import Fade from '@mui/material/Fade';
import Modal from '@mui/material/Modal';
import { ReactNode } from 'react';

const modalStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '100%',
  maxWidth: '800px',
  boxShadow: 24,
  p: 4,
  maxHeight: '90%',
  overflowY: 'scroll'
};

interface transitionsModalProps {
  isOpen: boolean;
  handleClose: () => void;
  children: ReactNode;
}

export const TransitionsModal: React.FC<transitionsModalProps> = ({ children, handleClose, isOpen }) => {
  return (
    <>
      <Portal>
        <Modal
          aria-labelledby="transition-modal"
          aria-describedby="transition-modal"
          open={isOpen}
          onClose={handleClose}
          closeAfterTransition
          slots={{
            backdrop: props => <Backdrop {...props} sx={{ backdropFilter: 'blur(5px)' }} />
          }}>
          <Fade in={isOpen}>
            <Paper
              sx={{
                ...modalStyle
              }}>
              {children}
            </Paper>
          </Fade>
        </Modal>
      </Portal>
    </>
  );
};
