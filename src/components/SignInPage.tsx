// SignInPage.tsx
import React, {
  ChangeEvent,
  SyntheticEvent,
  useEffect,
  useRef,
  useState,
} from 'react';
import { ErrorMessageState } from '../types';

interface SignInPageProps {
  getData: (address: string) => Promise<void>;
  errorMessage: ErrorMessageState;
}

const SignInPage = ({
  getData,
  errorMessage: fetchErrorMessage,
}: SignInPageProps) => {
  const [addressInput, setAddressInput] = useState('');
  const [blankInputError, setBlankInputError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const isMounted = useRef(false);
  // Prevent memory leak
  useEffect(() => {
    isMounted.current = true;
    return () => {
      isMounted.current = false;
    };
  }, []);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget;
    setAddressInput(value);
  };

  const handleSubmit = async (e: SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!addressInput) {
      setBlankInputError(true);
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
        <p>Welcome! Please sign in with your Bitcorn address</p>
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
            {/* When user clicks sign in on blank input */}
            {blankInputError && (
              <div id='submitError' className='form-text pt-2'>
                Must enter an address to sign in
              </div>
            )}
            {/* When fetching data for user returns an error */}
            {fetchErrorMessage && (
              <div id='submitError' className='form-text pt-2'>
                {fetchErrorMessage}
              </div>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default React.memo(SignInPage);
