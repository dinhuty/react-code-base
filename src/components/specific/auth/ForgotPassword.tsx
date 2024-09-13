// Libs
import { useTranslation } from 'react-i18next';
import classNames from 'classnames/bind';
// Components, Layouts, Pages
import { BaseInput } from '~/components/specific';
// Others
import {
  InputNameEnum,
  InputPlaceholderKeyEnum,
  InputSizeEnum,
  InputTypeEnum,
  InputTypeStyleEnum,
} from '~/utils/enum';
// Styles, images, icons
import styles from './ForgotPassword.module.scss';

type Props = {};

const cx = classNames.bind(styles);

const ForgotPassword = (props: Props) => {
  //#region Destructuring Props
  //#endregion Destructuring Props

  //#region Declare Hook
  const { t } = useTranslation();
  //#endregion Declare Hook

  //#region Selector
  //#endregion Selector

  //#region Declare State
  //#endregion Declare State

  //#region Implement Hook
  //#endregion Implement Hook

  //#region Handle Function
  //#endregion Handle Function

  return (
    <div id='forgotPasswordComponent'>
      <h5 className={cx('loginFormHeader')}>{t('admin_forgot_password_title')}</h5>
      <p className={cx('loginFormNote')}>{t('admin_forgot_password_note')}</p>
      <form className={cx('loginForm')}>
        <BaseInput
          id='email'
          name={InputNameEnum.EMAIL}
          type={InputTypeEnum.EMAIL}
          typeStyle={InputTypeStyleEnum.AUTH}
          size={InputSizeEnum.X_LARGE}
          placeholder={t(InputPlaceholderKeyEnum.ADMIN_EMAIL)}
        />
      </form>
    </div>
  );
};

export default ForgotPassword;
