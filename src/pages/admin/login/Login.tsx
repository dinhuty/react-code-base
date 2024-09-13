// Libs
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import classNames from 'classnames/bind';
// Components, Layouts, Pages
import {
  BaseButton,
  SignIn,
  ForgotPassword,
  CreateNewPassword,
  ChangePasswordSuccess,
} from '~/components/specific';
// Others
import { adminRouteAbsolute } from '~/utils/constants/route';
import { ButtonTypeEnum, LoginIndexKeyEnum } from '~/utils/enum';
import { ILoginPayload } from '~/utils/interface/auth';
// Styles, images, icons
import styles from './Login.module.scss';
import { images } from '~/assets';

const cx = classNames.bind(styles);

const Login = () => {
  //#region Destructuring Props
  //#endregion Destructuring Props

  //#region Declare Hook
  const navigate = useNavigate();
  const { t } = useTranslation();
  //#endregion Declare Hook

  //#region Selector
  //#endregion Selector

  //#region Declare State
  const [indexLogin, setIndexLogin] = useState<string>(LoginIndexKeyEnum.SIGN_IN);
  const [formLogin, setFormLogin] = useState<ILoginPayload>({
    username: '',
    password: '',
  });
  const [showPassword, setShowPassword] = useState<boolean>(false);
  //#endregion Declare State

  //#region Implement Hook
  //#endregion Implement Hook

  //#region Handle Function
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormLogin({
      ...formLogin,
      [event.target.name]: event.target.value,
    });
  };

  const handleLogin = () => {
    switch (indexLogin) {
      case LoginIndexKeyEnum.FORGOT_PASSWORD:
        setIndexLogin(LoginIndexKeyEnum.CREATE_NEW_PASSWORD);
        break;
      case LoginIndexKeyEnum.CREATE_NEW_PASSWORD:
        setIndexLogin(LoginIndexKeyEnum.SUCCESS_CREATE_PASSWORD);
        break;
      case LoginIndexKeyEnum.SIGN_IN:
      case LoginIndexKeyEnum.SUCCESS_CREATE_PASSWORD:
        navigate(`${adminRouteAbsolute.dashboard}`);
        break;
    }
  };

  const handleForgotPassword = () => {
    setIndexLogin(LoginIndexKeyEnum.FORGOT_PASSWORD);
  };
  //#endregion Handle Function

  return (
    <div id='loginAdminPage' className={cx('container')}>
      <div className={cx('loginForm')}>
        <div className={cx('loginLogo')}>
          <img
            src={images.adminLogoLogin}
            className={cx('logo')}
            alt={t('admin_img_title_default_alt')}
          />
        </div>
        <div className={cx('wrapperLoginSide')}>
          <div className={cx('wrapperForm')}>
            {indexLogin === LoginIndexKeyEnum.SIGN_IN && <SignIn onClick={handleForgotPassword} />}
            {indexLogin === LoginIndexKeyEnum.FORGOT_PASSWORD && <ForgotPassword />}
            {indexLogin === LoginIndexKeyEnum.CREATE_NEW_PASSWORD && <CreateNewPassword />}
            {indexLogin === LoginIndexKeyEnum.SUCCESS_CREATE_PASSWORD && <ChangePasswordSuccess />}
            <BaseButton
              height={56}
              label={t(indexLogin)}
              type={ButtonTypeEnum.LOGIN}
              onClick={handleLogin}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
