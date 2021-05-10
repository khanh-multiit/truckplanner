/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { SingleCard } from 'layouts/index';
import { LoginForm } from 'components';
import { useSelector } from 'react-redux';
import { State } from 'redux/types';
import notify from 'devextreme/ui/notify';
import { useHistory } from 'react-router';

const LoginPage = () => {
  const { auth } = useSelector((state: State) => state);
  const history = useHistory();
  const [isSubmitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const data = {
    email: 'mch@multi-it.dk',
    password: '12345678',
  };

  // useEffect(() => {
  //   if (auth.error && isSubmitted) {
  //     notify(auth.error, 'error', 2000);
  //   }
  //   if (auth?.user && auth?.profile && !isSubmitted) {
  //     history.push('/');
  //   }
  // }, [auth]);

  const login = (e: any) => {
    e.preventDefault();
    setSubmitted(true);
    setLoading(true);
  };

  return (
    <SingleCard title="Sign in">
      <LoginForm data={data} onSubmit={login} loading={loading} />
    </SingleCard>
  );
};

export default LoginPage;
