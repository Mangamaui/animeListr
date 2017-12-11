import React from 'react';

import UserForm from '../containers/UserForm';
import AnimeList from '../containers/AnimeList';


//views
export const Home = () => (<AnimeList />);

export const Login = () => (<UserForm signup={false}/>);

export const Signup = () => (<UserForm signup={true}/>);
