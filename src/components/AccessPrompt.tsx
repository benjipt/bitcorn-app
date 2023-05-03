// AccessPrompt.tsx
interface AccessPromptProps {
  accessMode: 'sign-in' | 'sign-up';
  toggleAccessMode: () => void;
}

const AccessPrompt = ({ accessMode, toggleAccessMode }: AccessPromptProps) => {
  return (
    <>
      <p>
        {accessMode === 'sign-in'
          ? 'Welcome! Please sign in with your Bitcorn address'
          : 'Enter your new bitcorn address below'}
      </p>
      <button
        type='button'
        className='btn btn-outline-secondary btn-sm'
        onClick={toggleAccessMode}>
        {accessMode === 'sign-in' ? 'Or Sign Up' : 'Or Sign In'}
      </button>
    </>
  );
};

export default AccessPrompt;
