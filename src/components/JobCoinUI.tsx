import React from 'react';
import AppBar from './AppBar';
import BalanceCard from './BalanceCard';
import SendCard from './SendCard';
import ChartCard from './ChartCard';
import { BalancePlot } from '../types';
import { postTransaction } from '../utils/api';

interface JobCoinUIProps {
  address: string;
  handleLogout: () => void;
  balance: string;
  getData: (address: string) => void;
  data: BalancePlot[];
}

const JobCoinUI = ({
  address,
  handleLogout,
  balance,
  getData,
  data,
}: JobCoinUIProps) => {
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

export default React.memo(JobCoinUI);
