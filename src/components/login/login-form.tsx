/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { Link } from 'react-router-dom';
import Form, { Item, Label, ButtonItem, ButtonOptions, RequiredRule, EmailRule } from 'devextreme-react/form';
import LoadIndicator from 'devextreme-react/load-indicator';
import './login-form.scss';

interface Props {
  data: {
    email: string;
    password: string;
  };
  loading: boolean;
  onSubmit: () => void;
}

const LoginForm = ({ data, loading, onSubmit }: Props) => {
  return (
    <form className={'login-form'} onSubmit={onSubmit}>
      <Form formData={data} disabled={loading}>
        <Item dataField={'email'} editorType={'dxTextBox'} editorOptions={emailEditorOptions}>
          <RequiredRule message="Email is required" />
          <EmailRule message="Email is invalid" />
          <Label visible={false} />
        </Item>
        <Item dataField={'password'} editorType={'dxTextBox'} editorOptions={passwordEditorOptions}>
          <RequiredRule message="Password is required" />
          <Label visible={false} />
        </Item>
        <Item dataField={'rememberMe'} editorType={'dxCheckBox'} editorOptions={rememberMeEditorOptions}>
          <Label visible={false} />
        </Item>
        <ButtonItem>
          <ButtonOptions width={'100%'} type={'default'} useSubmitBehavior={true}>
            <span className="dx-button-text">
              {loading ? <LoadIndicator width={'24px'} height={'24px'} visible={true} /> : 'Sign In'}
            </span>
          </ButtonOptions>
        </ButtonItem>
        <Item>
          <div className={'link'}>
            <Link to={'/reset-password'}>Forgot password?</Link>
          </div>
        </Item>
      </Form>
    </form>
  );
};

const emailEditorOptions = { stylingMode: 'outlined', mode: 'email' };
const passwordEditorOptions = { stylingMode: 'outlined', mode: 'password' };
const rememberMeEditorOptions = { text: 'Remember me', elementAttr: { class: 'form-text' } };

export default LoginForm;
