// AccessPage.tsx
import React, {
  ChangeEvent,
  SyntheticEvent,
  useEffect,
  useRef,
  useState,
} from 'react';
import AccessPrompt from './AccessPrompt';
import { postAddress } from '../utils/api';
import { useAppDispatch, useAppSelector } from '../store/store';
import { setError } from '../store/slices/userSlice';

interface SignInPageProps {
  getData: (address: string) => Promise<void>;
}

type Access = 'login' | 'sign-up';

const AccessPage = ({ getData }: SignInPageProps) => {
  const [addressInput, setAddressInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [accessMode, setAccessMode] = useState<Access>('login');
  const error = useAppSelector(state => state.user.error);
  const dispatch = useAppDispatch();

  const isMounted = useRef(false);
  // Prevent memory leak
  useEffect(() => {
    isMounted.current = true;
    return () => {
      isMounted.current = false;
    };
  }, []);

  const toggleAccessMode = () => {
    accessMode === 'login' ? setAccessMode('sign-up') : setAccessMode('login');
    dispatch(setError(null));
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget;
    setAddressInput(value);
  };

  const handleSubmit = async (e: SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    switch (accessMode) {
      case 'login': {
        if (!addressInput) {
          dispatch(setError('Must enter an address to sign in'));
        } else {
          setIsLoading(true);
          await getData(addressInput);
          if (isMounted.current) {
            // Prevent memory leak
            setIsLoading(false);
          }
        }
        break;
      }
      case 'sign-up': {
        if (!addressInput) {
          dispatch(setError('Must enter an address to sign up'));
        } else {
          setIsLoading(true);
          await postAddress(addressInput);
          if (isMounted.current) {
            // Prevent memory leak
            setIsLoading(false);
          }
        }
        break;
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
                  className='btn btn-success'
                  data-testid='sign-in-btn'>
                  {accessMode === 'login' ? 'Login' : 'Sign Up'}
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

export default React.memo(AccessPage);
