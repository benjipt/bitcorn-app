// App.tsx is the parent component of all other components. It renders the AccessPage component if the user is not logged in, and the BitcornUI component if the user is logged in. The BitcornUI component renders the AppBar, BalanceCard, SendCard, and ChartCard components. The AccessPage component renders the LoginCard and RegisterCard components.
import AccessPage from '@/components/AccessPage';
import BitcornUI from '@/components/BitcornUI';
import { useAppSelector } from '@/store/store';
import { useBitcornData } from '@/utils/useBitcornData';

export default function App() {
  const { getData } = useBitcornData();
  const isLoggedIn = useAppSelector(state => state.user.isLoggedIn);

  return (
    <div data-testid='App-1'>
      {!isLoggedIn && <AccessPage getData={getData} />}

      {isLoggedIn && <BitcornUI getData={getData} />}
    </div>
  );
}
