import React from 'react';
import './signin_signup.styles.scss';
import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';

const SigninAndSignUpPage = () => (
	<div className='sign-in-and-sign-up'>
		<SignIn />
		<SignUp />
	</div>
);

export default SigninAndSignUpPage;