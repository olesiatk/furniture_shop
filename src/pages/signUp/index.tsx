import React from 'react';
import { Link } from 'react-router-dom';

import { pathConstants } from 'projectConstants';
import { SignUpForm } from './components/SignUpForm';

const { LOGIN } = pathConstants;

export const SignUp: React.FC = () => (
  <div>
    <SignUpForm linkLogin={LOGIN} />
    <span>
      If you already have account, go to <Link to={LOGIN}>Login</Link>
    </span>
  </div>
);
