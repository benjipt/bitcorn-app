import React from 'react';
import AppBar from './AppBar';
import BalanceCard from './BalanceCard';
import SendCard from './SendCard';
import ChartCard from './ChartCard';
import { postTransaction } from '../utils/api';
import { useAppSelector } from '../store/store';

interface BitcornUIProps {
  handleLogout: () => void;
  getData: (address: string) => void;
}

const BitcornUI = ({ handleLogout, getData }: BitcornUIProps) => {
  const address = useAppSelector(state => state.user.address);
  const balance = useAppSelector(state => state.user.balance);
  const data = useAppSelector(state => state.user.balanceHistory);

  return (
    <div>
      <AppBar address={address} handleLogout={handleLogout} />
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
