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
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [comfirmPassword, setComfirmPassword] = useState('');
  const [hasAccount, setHasAccount] = useState(true);

  const emailChangeHandler = (e) => {
    setEmail(e.target.value);
  };

  const passwordChangeHandler = (e) => {
    setPassword(e.target.value);
  };

  const comfirmPasswordChangeHandler = (e) => {
    setComfirmPassword(e.target.value);
  };

  const restForm = () => {
    setEmail('');
    setPassword('');
    setComfirmPassword('');
  };
  const handelSubmit = async (e) => {
    e.preventDefault();
    restForm();
    setLoading(true);
    console.log(email, password);

    if (hasAccount) {
      const result = await signIn('credentials', {
        redirect: false,
        email: email,
        password: password,
      });
      setLoading(false);
      if (!result.error) {
        router.replace('/movies');
      }
    } else {
      try {
        const result = await createUser(email, password);
        setLoading(false);
        console.log(result);
        if (!result.error) {
          setHasAccount(true);
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  function switchAuthModeHandler() {
    setHasAccount((prevState) => !prevState);
  }

  return (
    <section className="bg-[#e6323266] h-screen w-full p-2 lg:h-screen">
      <Header />
      <div className="mt-20">
        <h1 className="uppercase text-center text-3xl mb-4">
          {hasAccount ? 'Login' : 'Sign Up'}
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
          </div>
          {!hasAccount && (
            <div>
              <label
                htmlFor="comfirmPassword"
                name="comfirmPassword"
                className="block capitalize text-center"
              >
                Comfirm password
              </label>
              <div className="bg-gray-300 w-[20rem] relative rounded-md border md:w-96">
                <input
                  type="password"
                  id="comfirmPassword"
                  name="comfirmPassword"
                  value={comfirmPassword}
                  required
                  onChange={comfirmPasswordChangeHandler}
                  className="bg-transparent w-full p-1 rounded-md text-black text-lg"
                />
              </div>
            </div>
          )}

          <button
            className={`w-[20rem] rounded-md bg-red-500 text-xl uppercase font-bold tracking-wider py-1 hover:bg-transparent hover:border-2 md:w-96 ${
              !hasAccount && 'mt-10'
            }`}
            type="submit"
          >
            {hasAccount ? 'Login' : 'Create Account'}
            {loading && (
              <div className="animate-spin h-5 w-5 rounded-full  inline-block ml-5 border-t-black border-r-black border-2 bg-white" />
            )}
          </button>

          <button
            onClick={switchAuthModeHandler}
            type="button"
            className=" mt-4"
          >
            {hasAccount ? 'Create new account' : 'Login with existing account'}
          </button>
        </form>
      </div>
    </section>
  );
};

export default AuthForm;
