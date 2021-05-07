import React, { useState, useRef, useCallback } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Form, { Item, Label, ButtonItem, ButtonOptions, RequiredRule, EmailRule } from 'devextreme-react/form';
import LoadIndicator from 'devextreme-react/load-indicator';
import './login-form.scss';
import { Grid } from '@material-ui/core';

const LoginForm = () => {
  const history = useHistory();
  // const { signIn } = useAuth();
  const [loading, setLoading] = useState(false);
  const formData = useRef({});

  const onSubmit = useCallback(async (e) => {}, []);

  const onCreateAccountClick = useCallback(() => {
    history.push('/create-account');
  }, [history]);

  // @ts-ignore
  return (
        <form className={'login-form'} onSubmit={onSubmit}>
              <Form formData={formData.current} disabled={loading}>
                  <Item dataField={'email'} editorType={'dxTextBox'} editorOptions={emailEditorOptions}>
                      <RequiredRule message="Email is required" />
                      <EmailRule message="Email is invalid" />
                      <Label visible={false} />
                  </Item>
                  <Item dataField={'password'} editorType={'dxTextBox'} editorOptions={passwordEditorOptions}>
                      <RequiredRule message="Password is required" />
                      <Label visible={false} />
                  </Item>
                  <ButtonItem>
                      <ButtonOptions width={'100%'} type={'default'} useSubmitBehavior={true}>
            <span className="dx-button-text">
              {loading ? <LoadIndicator width={'24px'} height={'24px'} visible={true} /> : 'Sign In'}
            </span>
                      </ButtonOptions>
                  </ButtonItem>
              </Form>
          </form>
  );
}

const emailEditorOptions = { stylingMode: 'filled', placeholder: 'Email', mode: 'email' };
const passwordEditorOptions = { stylingMode: 'filled', placeholder: 'Password', mode: 'password' };
const rememberMeEditorOptions = { text: 'Remember me', elementAttr: { class: 'form-text' } };

export default LoginForm;
