// AccessPrompt.tsx
interface AccessPromptProps {
  accessMode: 'login' | 'sign-up';
  toggleAccessMode: () => void;
}

const AccessPrompt = ({ accessMode, toggleAccessMode }: AccessPromptProps) => {
  return (
    <>
      <p>
        {accessMode === 'login'
          ? 'Welcome! Please sign in with your Bitcorn address'
          : 'Enter your new bitcorn address below'}
      </p>
      <button
        type='button'
        className='btn btn-outline-secondary btn-sm'
        onClick={toggleAccessMode}>
        {accessMode === 'login' ? 'Or Sign Up' : 'Or Login'}
      </button>
    </>
  );
};

export default AccessPrompt;
