// @/components/BitcornUI.tsx
import React, { useEffect, useState } from 'react';
import AppBar from '@/components/AppBar';
import BalanceCard from '@/components/BalanceCard';
import SendCard from '@/components/SendCard';
import ChartCard from '@/components/ChartCard';
import { postTransaction } from '@/utils/api';
import { useAppDispatch, useAppSelector } from '@/store/store';
import { ModalTypes, openModal } from '@/store/slices/uiSlice';
import Modal from './Modal';

interface BitcornUIProps {
  getData: (address: string) => void;
}

const BitcornUI = ({ getData }: BitcornUIProps) => {
  const {
    address,
    balance,
    balanceHistory: data,
    isNewUser,
  } = useAppSelector(state => state.user);
  const showWelcomeModal = useAppSelector(
    state => state.ui.showModal === ModalTypes.WELCOME
  );

  const dispatch = useAppDispatch();
  // Open welcome modal if user is new
  useEffect(() => {
    if (isNewUser) dispatch(openModal(ModalTypes.WELCOME));
  }, [isNewUser, dispatch]);

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className='mb-4'>
      <AppBar address={address} />
      <div className='container-fluid'>
        {showWelcomeModal && <Modal />}
        <div className='row ps-3'>
          <div className='row col-lg-4 me-3'>
            <BalanceCard balance={balance} />
            {/* At this breakpoint, all components here render in one column. Chartcard should then render above the SendCard */}
            {windowWidth > 992 ? (
              <SendCard
                address={address}
                getData={getData}
                postTransaction={postTransaction}
              />
            ) : (
              <ChartCard data={data} />
            )}
          </div>
          <div className='row col-lg-8'>
            {windowWidth > 992 ? (
              <ChartCard data={data} />
            ) : (
              <SendCard
                address={address}
                getData={getData}
                postTransaction={postTransaction}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(BitcornUI);
