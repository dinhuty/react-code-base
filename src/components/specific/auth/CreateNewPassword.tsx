// Libs
import { ChangeEvent, useState } from 'react';
import { useTranslation } from 'react-i18next';
import classNames from 'classnames/bind';
// Components, Layouts, Pages
import { BaseInput, Note } from '~/components/specific';
// Others
import { ICreatePasswordPayload } from '~/utils/interface/auth';
import {
  InputNameEnum,
  InputPlaceholderKeyEnum,
  InputSizeEnum,
  InputTypeEnum,
  InputTypeStyleEnum,
} from '~/utils/enum';
// Styles, images, icons
import styles from './CreateNewPassword.module.scss';

type Props = {};

const cx = classNames.bind(styles);

const CreateNewPassword = (props: Props) => {
  //#region Destructuring Props
  //#endregion Destructuring Props

  //#region Declare Hook
  const { t } = useTranslation();
  //#endregion Declare Hook

  //#region Selector
  //#endregion Selector

  //#region Declare State
  const [formCreateNewPassword, setFormCreateNewPassword] = useState<ICreatePasswordPayload>({
    newPassword: '',
    confirmPassword: '',
  });
  //#endregion Declare State

  //#region Implement Hook
  //#endregion Implement Hook

  //#region Handle Function
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFormCreateNewPassword({
      ...formCreateNewPassword,
      [event.target.name]: event.target.value,
    });
  };
  //#endregion Handle Function

  return (
    <div id='createNewPasswordComponent'>
      <h5 className={cx('createNewPasswordFormHeader')}>{t('admin_create_new_password_title')}</h5>
      <div className={cx('createNewPasswordFormNote')}>
        <span className={cx('createNewPasswordTextNote')}>
          {t('admin_create_new_password_title_text_note')}
        </span>
        <Note title={t('admin_create_new_password_validate_number')} />
        <Note title={t('admin_create_new_password_validate_uppercase')} />
        <Note title={t('admin_create_new_password_validate_lowercase')} />
        <Note title={t('admin_create_new_password_validate_special_characters')} />
      </div>
      <form className={cx('createNewPasswordForm')}>
        <BaseInput
          id='newPassword'
          name={InputNameEnum.NEW_PASSWORD}
          type={InputTypeEnum.PASSWORD}
          typeStyle={InputTypeStyleEnum.AUTH}
          size={InputSizeEnum.X_LARGE}
          placeholder={t(InputPlaceholderKeyEnum.ADMIN_NEW_PASSWORD)}
          onChange={handleChange}
        />
        <BaseInput
          id='confirmPassword'
          name={InputNameEnum.CONFIRM_PASSWORD}
          type={InputTypeEnum.PASSWORD}
          typeStyle={InputTypeStyleEnum.AUTH}
          size={InputSizeEnum.X_LARGE}
          placeholder={t(InputPlaceholderKeyEnum.ADMIN_CONFIRM_PASSWORD)}
          onChange={handleChange}
        />
      </form>
    </div>
  );
};

export default CreateNewPassword;
