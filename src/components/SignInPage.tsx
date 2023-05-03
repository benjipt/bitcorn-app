// SignInPage.tsx
import React, {
  ChangeEvent,
  SyntheticEvent,
  useEffect,
  useRef,
  useState,
} from 'react';
import { ErrorMessageState } from '../types';
import AccessPrompt from './AccessPrompt';

interface SignInPageProps {
  getData: (address: string) => Promise<void>;
  errorMessage: ErrorMessageState;
}

type Access = 'sign-in' | 'sign-up';

const SignInPage = ({
  getData,
  errorMessage: fetchErrorMessage,
}: SignInPageProps) => {
  const [addressInput, setAddressInput] = useState('');
  const [error, setError] = useState<ErrorMessageState>(fetchErrorMessage);
  const [isLoading, setIsLoading] = useState(false);
  const [accessMode, setAccessMode] = useState<Access>('sign-in');

  const isMounted = useRef(false);
  // Prevent memory leak
  useEffect(() => {
    isMounted.current = true;
    return () => {
      isMounted.current = false;
    };
  }, []);

  // Update error state when fetchErrorMessage changes
  useEffect(() => {
    if (isMounted.current && fetchErrorMessage !== error) {
      setError(fetchErrorMessage);
    }
  }, [fetchErrorMessage]);

  const toggleAccessMode = () => {
    accessMode === 'sign-in'
      ? setAccessMode('sign-up')
      : setAccessMode('sign-in');
    setError(null);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget;
    setAddressInput(value);
  };

  const handleSubmit = async (e: SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!addressInput) {
      setError('Must enter an address to sign in');
    } else {
      setIsLoading(true);
      await getData(addressInput);
      if (isMounted.current) {
        // Prevent memory leak
        setIsLoading(false);
      }
    }
  };

  return (
    <div className='container text-center mt-5'>
      <h1>BITCORN</h1>
      <div className='mt-5 p-4 border-black rounded sign-in container-sm'>
        <AccessPrompt
          accessMode={accessMode}
          toggleAccessMode={toggleAccessMode}
        />
        <hr></hr>
        <form onSubmit={handleSubmit} className='mt-4'>
          <div className='row g-3 align-items-center justify-content-center'>
            <div className='col-auto'>
              <label htmlFor='address' className='form-label visually-hidden'>
                Address
              </label>
            </div>
            <div className='col-auto'>
              <input
                onChange={handleChange}
                type='text'
                className='form-control'
                id='address'
                placeholder='Jilly'
                value={addressInput}
              />
            </div>
            <div className='col-auto'>
              {!isLoading ? (
                <button
                  type='submit'
                  className='btn btn-dark'
                  data-testid='sign-in-btn'>
                  SIGN IN
                </button>
              ) : (
                <button
                  className='btn btn-light'
                  type='button'
                  data-testid='waking-up-btn'
                  disabled>
                  <span
                    className='spinner-grow text-warning spinner-grow-sm me-2'
                    role='status'
                    aria-hidden='true'></span>
                  <b className='text-black'>Waking Up</b>
                </button>
              )}
            </div>
            {error && (
              <div id='submitError' className='form-text pt-2'>
                {error}
              </div>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default React.memo(SignInPage);
