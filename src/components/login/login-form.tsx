import React, {useState, useRef, useCallback, useEffect, Fragment, useReducer} from 'react';
import { Link, useHistory } from 'react-router-dom';
import Form, { Item, Label, ButtonItem, ButtonOptions, RequiredRule, EmailRule, SimpleItem, GroupItem, AsyncRule } from 'devextreme-react/form';
import LoadIndicator from 'devextreme-react/load-indicator';
import './login-form.scss';

const LoginForm = () => {

  const history = useHistory();
  // const { signIn } = useAuth();
  const [loading, setLoading] = useState(false);
  const formData = useRef({});

  const onSubmit = useCallback(async (e) => {}, []);

  const onCreateAccountClick = useCallback(() => {
    history.push('/create-account');
  }, [history]);

    return (
      <Fragment>
          <form className={'login-form'} onSubmit={onSubmit}>
              <Form formData={formData.current} disabled={loading}>
                  <GroupItem>
                      <SimpleItem>
                          <div className={'logo'}>
                              <img src="https://staging.truckplanner.com/common/images/truckplanner_logo_300dpi-no-ico_220px.png"/>
                          </div>
                      </SimpleItem>
                      <SimpleItem dataField={'email'} editorType={'dxTextBox'} editorOptions={emailEditorOptions}>
                          <RequiredRule message="Email is required" />
                          <EmailRule message="Email is invalid" />
                          <Label visible={true} />
                      </SimpleItem>
                      <SimpleItem dataField={'password'} editorType={'dxTextBox'} editorOptions={passwordEditorOptions}>
                          <RequiredRule message="Password is required" />
                          <Label visible={true} />
                      </SimpleItem>
                      <SimpleItem dataField={'rememberMe'} editorType={'dxCheckBox'} editorOptions={rememberMeEditorOptions}>
                          <Label visible={false} />
                      </SimpleItem>
                      <ButtonItem>
                          <ButtonOptions width={'100%'} height={'50px'} type={'success'} useSubmitBehavior={true}>
                        <span className="dx-button-text">
                          {loading ? <LoadIndicator width={'24px'} height={'24px'} visible={true} /> : 'Sign In'}
                        </span>
                          </ButtonOptions>
                      </ButtonItem>
                      <SimpleItem cssClass={'forget'}>
                          <div className={'link'}>
                              <Link to={'/reset-password'}>Forgot password?</Link>
                          </div>
                      </SimpleItem>
                  </GroupItem>
              </Form>
          </form>
      </Fragment>
  );
}

const emailEditorOptions = { stylingMode: 'outlined', mode: 'email' };
const passwordEditorOptions = { stylingMode: 'outlined', mode: 'password' };
const rememberMeEditorOptions = { text: 'Remember me', elementAttr: { class: 'form-text' } };

export default LoginForm;
