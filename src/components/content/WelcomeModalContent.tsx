// @/components/content/WelcomeModalContent.tsx
import { closeModal } from '@/store/slices/uiSlice';
import { useAppDispatch, useAppSelector } from '@/store/store';

const WelcomeModalContent = () => {
  const { address: name, balance } = useAppSelector(state => state.user);

  const dispatch = useAppDispatch();

  return (
    <div className='text-center'>
      <h4>🎉 Welcome {name}! 🎉</h4>
      <p style={{ fontSize: '16px' }}>
        The renowned and mysterious creator of Bitcorn 🌽, Mr. Kozuka, has
        gifted you with {balance} Bitcorns. Send them to anyone you like! 💌
      </p>
      <p
        style={{
          fontFamily: 'Work Sans',
          fontSize: '11px',
          fontStyle: 'italic',
        }}>
        For each day you hold at least 10 Bitcorns in your wallet, the Bitcorn
        Chain will automatically reward you with 25 Bitcorns.
      </p>
      <div className='d-flex justify-content-center'>
        <button
          className='btn btn-success w-50'
          onClick={() => dispatch(closeModal())}>
          Ok
        </button>
      </div>
    </div>
  );
};

export default WelcomeModalContent;
