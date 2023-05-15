// components/CloseIcon.tsx
import { useState } from 'react';
import { ReactComponent as CloseIconDefault } from '@/assets/icons/rectangle-xmark.svg';
import { ReactComponent as CloseIconHover } from '@/assets/icons/rectangle-xmark-2.svg';
import { useAppDispatch } from '@/store/store';
import { closeModal } from '@/store/slices/uiSlice';

const closeIconStyle = {
  width: '32px',
  height: '32px',
  cursor: 'pointer',
  fill: '#221d23',
};

const hoverIconStyle = {
  ...closeIconStyle,
  fill: '#F9DC5C',
};

const activeIconStyle = {
  ...closeIconStyle,
  fill: '#E4572E',
};

const CloseIcon = () => {
  const dispatch = useAppDispatch();

  const [isHover, setIsHover] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const handleMouseEnter = () => setIsHover(true);
  const handleMouseLeave = () => setIsHover(false);
  const handleMouseDown = () => setIsActive(true);
  const handleMouseUp = () => setIsActive(false);

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onClick={() => dispatch(closeModal())}
      data-testid='close-modal-btn'>
      {isHover ? (
        <CloseIconHover style={isActive ? activeIconStyle : hoverIconStyle} />
      ) : (
        <CloseIconDefault style={closeIconStyle} />
      )}
    </div>
  );
};

export default CloseIcon;
