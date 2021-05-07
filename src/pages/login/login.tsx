import React from 'react';
import { SingleCard } from 'layouts/index';
import { LoginForm } from 'components';

function LoginPage() {
  return (
    <div style={{
        width:"100%",
        height:"100vh"
    }}>
        <SingleCard title="Sign in">
            <LoginForm></LoginForm>
        </SingleCard>
    </div>

  );
}

export default LoginPage;
