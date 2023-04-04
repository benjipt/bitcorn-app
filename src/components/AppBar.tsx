import AddressName from './AddressName';
import SignOutBtn from './SignOutBtn';

interface AppBarProps {
  address: string;
  handleLogout: () => void;
}

export default function AppBar({ address, handleLogout }: AppBarProps) {
  return (
    <div
      className='container-fluid pt-2 pb-2 d-flex flex-row justify-content-between app-bar app-bar-border'
      data-testid='AppBar-1'>
      <AddressName address={address} />
      <SignOutBtn handleLogout={handleLogout} />
    </div>
  );
}
