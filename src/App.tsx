import AccessPage from './components/AccessPage';
import BitcornUI from './components/BitcornUI';
import { useBitcornData } from './utils/useBitcornData';

export default function App() {
  const {
    isLoggedIn,
    loggedInAddress,
    balance,
    runningBalance,
    getData,
    handleLogout,
    errorMessage,
  } = useBitcornData();

  return (
    <div data-testid='App-1'>
      {!isLoggedIn && (
        <AccessPage getData={getData} errorMessage={errorMessage} />
      )}

      {isLoggedIn && (
        <BitcornUI
          handleLogout={handleLogout}
          address={loggedInAddress}
          balance={balance}
          getData={getData}
          data={runningBalance}
        />
      )}
    </div>
  );
}
