import AccessPage from './components/AccessPage';
import BitcornUI from './components/BitcornUI';
import { useAppSelector } from './store/store';
import { useBitcornData } from './utils/useBitcornData';

export default function App() {
  const { balance, runningBalance, getData, handleLogout, errorMessage } =
    useBitcornData();
  const isLoggedIn = useAppSelector(state => state.user.isLoggedIn);

  return (
    <div data-testid='App-1'>
      {!isLoggedIn && (
        <AccessPage getData={getData} errorMessage={errorMessage} />
      )}

      {isLoggedIn && (
        <BitcornUI
          handleLogout={handleLogout}
          balance={balance}
          getData={getData}
          data={runningBalance}
        />
      )}
    </div>
  );
}
