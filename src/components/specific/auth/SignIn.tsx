// Libs
import { ChangeEvent, useState } from 'react';
import { useTranslation } from 'react-i18next';
import classNames from 'classnames/bind';
// Components, Layouts, Pages
import { BaseInput } from '~/components/specific';
// Others
import { ILoginPayload } from '~/utils/interface/auth';
import {
  InputNameEnum,
  InputPlaceholderKeyEnum,
  InputSizeEnum,
  InputTypeEnum,
  InputTypeStyleEnum,
} from '~/utils/enum';
// Styles, images, icons
import styles from './SignIn.module.scss';

type Props = {
  onClick?: () => void;
};

const cx = classNames.bind(styles);

const SignIn = (props: Props) => {
  //#region Destructuring Props
  const { onClick } = props;
  //#endregion Destructuring Props

  //#region Declare Hook
  const { t } = useTranslation();
  //#endregion Declare Hook

  //#region Selector
  //#endregion Selector

  //#region Declare State
  const [formLogin, setFormLogin] = useState<ILoginPayload>({
    username: '',
    password: '',
  });
  //#endregion Declare State

  //#region Implement Hook
  //#endregion Implement Hook

  //#region Handle Function
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFormLogin({
      ...formLogin,
      [event.target.name]: event.target.value,
    });
  };

  const handleClick = () => {
    onClick && onClick();
  };
  //#endregion Handle Function

  return (
    <div id='signInComponent'>
      <h5 className={cx('loginFormHeader')}>{t('admin_signin_title')}</h5>
      <p className={cx('loginFormNote')}>{t('admin_signin_form_title')}</p>
      <form className={cx('loginForm')}>
        <BaseInput
          id='email'
          name={InputNameEnum.EMAIL}
          type={InputTypeEnum.EMAIL}
          typeStyle={InputTypeStyleEnum.AUTH}
          size={InputSizeEnum.X_LARGE}
          placeholder={t(InputPlaceholderKeyEnum.ADMIN_EMAIL)}
          onChange={handleChange}
        />
        <BaseInput
          id='password'
          type={InputTypeEnum.PASSWORD}
          typeStyle={InputTypeStyleEnum.AUTH}
          size={InputSizeEnum.X_LARGE}
          placeholder={t(InputPlaceholderKeyEnum.ADMIN_PASSWORD)}
          name={InputNameEnum.PASSWORD}
          onChange={handleChange}
        />
        <div className={cx('loginFormWrapForgot')} onClick={handleClick}>
          <div className={cx('loginFormForgot')}>{t('admin_signin_forgot_password')}</div>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
