// AppBar.tsx
import { useCallback } from 'react';
import { useAppDispatch } from '@/store/store';
import AddressName from '@/components/AddressName';
import SignOutBtn from '@/components/SignOutBtn';
import {
  setAddress,
  setBalance,
  setBalanceHistory,
  setError,
  setIsNewUser,
  setLoggedIn,
} from '@/store/slices/userSlice';

interface AppBarProps {
  address: string;
}

export default function AppBar({ address }: AppBarProps) {
  const dispatch = useAppDispatch();
  // Handle logout functionality
  const handleLogout = useCallback(() => {
    dispatch(setLoggedIn(false));
    dispatch(setAddress(''));
    dispatch(setBalance(''));
    dispatch(setBalanceHistory([]));
    dispatch(setError(null));
    dispatch(setIsNewUser(false));
    sessionStorage.clear();
  }, []);

  return (
    <div
      className='container-fluid pt-2 pb-2 d-flex flex-row justify-content-between app-bar app-bar-border'
      data-testid='AppBar-1'>
      <AddressName address={address} />
      <SignOutBtn handleLogout={handleLogout} />
    </div>
  );
}
