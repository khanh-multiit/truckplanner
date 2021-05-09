import React from 'react';
import { SingleCard } from 'layouts/index';
import { LoginForm } from 'components';

function LoginPage() {
  return (
    <div style={{
        width:"100%",
        height:"100vh",
        backgroundColor:"#f0f2f5"
    }}>
        <SingleCard title="">
            <LoginForm></LoginForm>
        </SingleCard>
    </div>

  );
}

export default LoginPage;
