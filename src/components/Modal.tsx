// components/Modal.tsx
import ReactDOM from 'react-dom';
import { useAppSelector } from '@/store/store';
import { ModalTypes } from '@/store/slices/uiSlice';
import WelcomeModalContent from './content/WelcomeModalContent';
import CloseIcon from '@/components/CloseIcon';

const modalDialogStyle = {
  position: 'relative' as 'relative',
  top: '20%',
};

const modalContentStyle = {
  backgroundColor: '#FEF9FF',
  borderThickness: '4px',
  borderColor: '#221d23',
};

const Modal = () => {
  const showModal = useAppSelector(state => state.ui.showModal);

  if (!showModal) return null;

  const getModalContent = () => {
    switch (showModal) {
      case ModalTypes.WELCOME:
        return <WelcomeModalContent />;
      // add other cases here
      default:
        return null;
    }
  };

  return ReactDOM.createPortal(
    <div className='modal show d-block'>
      <div className='modal-dialog' style={modalDialogStyle}>
        <div className='modal-content' style={modalContentStyle}>
          <div className='modal-header d-flex justify-content-end'>
            <CloseIcon />
          </div>
          <div className='modal-body'>{getModalContent()}</div>
        </div>
      </div>
    </div>,
    document.body
  );
};

export default Modal;
