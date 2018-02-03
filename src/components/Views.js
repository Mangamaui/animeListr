import React from 'react';

import UserForm from '../containers/UserForm';
import AnimeList from '../containers/AnimeList';


//views
export const Home = () => (<AnimeList />);

export const Login = () => (
  <UserForm signup={false}>
    <h2>Login</h2>
    <p>Just enter your email address and secret to access your anime list</p>
  </UserForm>
);

export const Signup = () => (
  <UserForm signup={true}>
    <h2>Sign Up</h2>
    <p>Create your free account to create your own anime list!</p>
  </UserForm>
);
