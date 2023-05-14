// BitcornUI.tsx is a child component of App.tsx. It renders the AppBar, BalanceCard, SendCard, and ChartCard components.
import React from 'react';
import AppBar from '@/components/AppBar';
import BalanceCard from '@/components/BalanceCard';
import SendCard from '@/components/SendCard';
import ChartCard from '@/components/ChartCard';
import { postTransaction } from '@/utils/api';
import { useAppSelector } from '@/store/store';

interface BitcornUIProps {
  getData: (address: string) => void;
}

const BitcornUI = ({ getData }: BitcornUIProps) => {
  const {
    address,
    balance,
    balanceHistory: data,
    // isNewUser,
  } = useAppSelector(state => state.user);

  return (
    <div>
      <AppBar address={address} />
      <div className='container-fluid'>
        <div className='row ps-3'>
          <div className='row col-lg-4 me-3'>
            <BalanceCard balance={balance} />
            <SendCard
              address={address}
              getData={getData}
              postTransaction={postTransaction}
            />
          </div>
          <div className='row col-lg-8'>
            <ChartCard data={data} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(BitcornUI);
