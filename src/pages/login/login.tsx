import React from 'react';
import { SingleCard } from 'layouts/index';
import { LoginForm } from 'components';

function LoginPage() {
  return (
    <SingleCard title="Sign in">
      <LoginForm></LoginForm>
    </SingleCard>
  );
}

export default LoginPage;
