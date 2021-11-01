import { Button, Checkbox, FormControlLabel, TextField } from '@material-ui/core';
import { Facebook, ExitToApp } from '@material-ui/icons';
import { createMuiTheme } from '@material-ui/core/styles';
import { useState } from 'react';

function Signin() {
  const [loginData, setLoginData] = useState({});
  const theme = createMuiTheme({
    palette: {
      primary: {
        light: '#757ce8',
        main: '#3f50b5',
        dark: '#002884',
        contrastText: '#fff',
      },
      secondary: {
        light: '#ff7961',
        main: '#f44336',
        dark: '#ba000d',
        contrastText: '#000',
      },
    },
  });

  const btnStyle = {
    border: 'none',
    outline: 'none',
  };

  const signIn = (e) => {
    const { name, value } = e.target;
    setLoginData({
      ...loginData,
      [name]: value,
    });
    console.log(loginData);
  };

  const name = 'abc'

  return (
    <div className='w-full h-screen bg-gradient-to-r from-indigo-400 via-indigo-400 to-indigo-500 grid justify-items-center'>
      <div className='xl:w-6/12 md:w-9/12 w-full xl:h-auto h-full bg-white shadow-lg rounded-lg  mx-auto my-auto'>
        <h1 className='text-center mt-10 text-3xl'>Login</h1>
        <div className='p-10'>
          <div className='flex flex-col lg:w-7/12 md:w-full w-full mx-auto  gap-5'>
            <TextField type='text' label='Email' name='email' variant='outlined' fullWidth onChange={signIn} />
            <TextField
              type='password'
              label='Password'
              name='password'
              variant='outlined'
              fullWidth
              onChange={signIn}
            />
            <FormControlLabel control={<Checkbox name='checkedA' color='primary' />} label='Remember me' />
            <Button variant='contained' color='primary' startIcon={<ExitToApp />} style={btnStyle}>
              Login
            </Button>
            <Button variant='contained' startIcon={<ExitToApp />} style={btnStyle}>
              Sign Up
            </Button>
          </div>
          <hr className='my-10 text-center'></hr>
          <h1 className='text-center my-10 text-3xl'>Login with social accounts</h1>
          <div className='flex flex-col lg:w-7/12 w-full mx-auto  gap-5'>
            <Button variant='contained' color='secondary' style={btnStyle}>
              Login With Google
            </Button>
            <Button variant='contained' color='primary' startIcon={<Facebook />} style={btnStyle}>
              Login With Facebook
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signin;
