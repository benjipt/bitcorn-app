interface SignOutBtnProps {
  handleLogout: () => void;
}

export default function SignOutBtn({ handleLogout }: SignOutBtnProps) {
  return (
    <div>
      <button
        onClick={handleLogout}
        className='btn btn-outline-dark'
        data-testid='SignOutBtn-1'>
        Sign Out
      </button>
    </div>
  );
}
