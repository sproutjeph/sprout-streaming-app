import { CheckIcon, ExclamationCircleIcon } from '@heroicons/react/outline';
import { useState } from 'react';
import Header from './Header';
import { signIn } from 'next-auth/client';
import { useRouter } from 'next/router';

async function createUser(email, password) {
  const response = await fetch('/api/auth/signup', {
    method: 'POST',
    body: JSON.stringify({ email, password }),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.message || 'Something went wrong!');
  }
  return data;
}

const AuthForm = () => {
  const router = useRouter();

  const [email, setEmail] = useState('');
  const [emailIsValid, setEmailIsValid] = useState(false);
  const [password, setPassword] = useState('');
  const [passwordIsValid, setPasswordIsValid] = useState(false);
  const [error, setError] = useState(false);
  const [isLogin, setIsLogin] = useState(true);

  const emailChangeHandler = (e) => {
    setEmail(e.target.value);
    setError(false);
    setEmailIsValid(true);
  };

  const passwordChangeHandler = (e) => {
    setPassword(e.target.value);
    setError(false);
    setPasswordIsValid(true);
  };

  const handelSubmit = async (e) => {
    e.preventDefault();
    if (email.trim().length === 0) {
      setError(true);
      return;
    }
    if (password.trim().length !== 0) {
      setPasswordIsValid(true);
    }
    console.log(email, password);

    setEmail('');
    setPassword('');
    setEmailIsValid(false);
    setPasswordIsValid(false);
    if (isLogin) {
      const result = await signIn('credentials', {
        redirect: false,
        email: email,
        password: password,
      });
      if (!result.error) {
        router.replace('/movies');
      }
    } else {
      try {
        const result = await createUser(email, password);
        console.log(result);
      } catch (error) {
        console.log(error);
      }
    }
  };

  function switchAuthModeHandler() {
    setIsLogin((prevState) => !prevState);
  }

  return (
    <section className="bg-[#e6323266] h-screen w-full p-2 lg:h-screen">
      <Header />
      <div className="mt-20">
        <h1 className="uppercase text-center text-3xl mb-4">
          {isLogin ? 'Login' : 'Sign Up'}
        </h1>

        <form className="flex flex-col items-center" onSubmit={handelSubmit}>
          <label htmlFor="email" name="email" className="block capitalize">
            email address
          </label>
          <div className="bg-gray-300 w-[20rem] relative rounded-md border mb-6 md:w-96">
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              required
              onChange={emailChangeHandler}
              className="bg-transparent w-full p-1 rounded-md text-black text-lg"
            />
            {error && (
              <ExclamationCircleIcon className="h-4 bg-white absolute top-[6.5px] right-1 rounded-full text-[red]" />
            )}
            {!error && emailIsValid && (
              <CheckIcon className="h-4 bg-green-400 absolute top-[6.5px] right-1 rounded-full" />
            )}
          </div>
          <label
            htmlFor="password"
            name="password"
            className="block capitalize"
          >
            password
          </label>
          <div className="bg-gray-300 w-[20rem] relative rounded-md border mb-10 md:w-96">
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              required
              onChange={passwordChangeHandler}
              className="bg-transparent w-full p-1 rounded-md text-black text-lg"
            />
            {error && (
              <ExclamationCircleIcon className="h-4 bg-white absolute top-[6.5px] right-1 rounded-full text-[red]" />
            )}
            {!error && passwordIsValid && (
              <CheckIcon className="h-4 bg-green-400 absolute top-[6.5px] right-1 rounded-full" />
            )}
          </div>
          <button
            className="w-[20rem] rounded-md bg-red-500 text-xl uppercase font-bold tracking-wider py-1 hover:bg-transparent hover:border-2 md:w-96"
            type="submit"
          >
            {isLogin ? 'Login' : 'Create Account'}
          </button>
          <button
            onClick={switchAuthModeHandler}
            type="button"
            className=" mt-4"
          >
            {isLogin ? 'Create new account' : 'Login with existing account'}
          </button>
        </form>
      </div>
    </section>
  );
};

export default AuthForm;
