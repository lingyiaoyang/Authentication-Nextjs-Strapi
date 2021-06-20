import { Box } from 'reflexbox';
import getConfig from 'next/config';
import styled from '@emotion/styled';
import { useState } from 'react';
import { setCookie } from 'nookies';
import { useRouter } from 'next/router';

const { publicRuntimeConfig } = getConfig();

const Login = () => {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  async function handleLogin() {
    const loginInfo = {
      identifier: username,
      password: password,
    };

    const login = await fetch(`${publicRuntimeConfig.API_URL}/auth/local`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(loginInfo),
    });

    const loginResponse = await login.json();
    console.log(
      '🚀 -> file: login.js -> line 30 -> handleLogin -> loginResponse',
      loginResponse
    );

    // setCookie(null, 'jwt', loginResponse.jwt, {
    //   maxAge: 30 * 24 * 60 * 60,
    //   path: '/',
    // });
    localStorage.setItem('jwt', loginResponse.jwt);

    router.push('/about');
  }

  return (
    <>
      <LoginStyled>
        <Box variant='container'>
          <Box as='h2' my={40}>
            You need to login to access this page
          </Box>

          <form>
            <input
              type='email'
              placeholder='email'
              onChange={(e) => setUsername(e.target.value)}
              value={username}
            />
            <br />
            <input
              type='password'
              placeholder='password'
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
            <br />
            <button type='button' onClick={() => handleLogin()}>
              Login
            </button>
          </form>
        </Box>
      </LoginStyled>
    </>
  );
};

const LoginStyled = styled.div`
  input {
    padding: 10px;
    margin-bottom: 20px;
    border: 1px solid #cccccc;
    border-radius: 4px;
  }
`;

export default Login;
