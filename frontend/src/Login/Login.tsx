import React from 'react';
import { SignIn} from '@clerk/clerk-react';
import { useNavigate } from 'react-router-dom';

const Login: React.FC = () => {
  const navigate = useNavigate();

  const handleSignInSuccess = () => {
    navigate('/');
  };

  return (
    <div className="login-container">
      <h1>Login</h1>
      <SignIn/>
    </div>
  );
};

export default Login;
