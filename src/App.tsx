import AccessPage from './components/AccessPage';
import BitcornUI from './components/BitcornUI';
import { useAppSelector } from './store/store';
import { useBitcornData } from './utils/useBitcornData';

export default function App() {
  const getData = useBitcornData();
  const isLoggedIn = useAppSelector(state => state.user.isLoggedIn);

  return (
    <div data-testid='App-1'>
      {!isLoggedIn && <AccessPage getData={getData} />}

      {isLoggedIn && <BitcornUI getData={getData} />}
    </div>
  );
}
