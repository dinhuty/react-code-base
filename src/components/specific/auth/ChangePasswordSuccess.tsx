// Libs
import { useTranslation } from 'react-i18next';
import classNames from 'classnames/bind';
// Components, Layouts, Pages
// Others
// Styles, images, icons
import styles from './ChangePasswordSuccess.module.scss';
import { gif } from '~/assets';

type Props = {
  onClick?: () => void;
};

const cx = classNames.bind(styles);

const ChangePasswordSuccess = (props: Props) => {
  //#region Destructuring Props
  const { onClick } = props;
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
    <div id='changePasswordSuccessComponent'>
      <div className={cx('changePasswordSuccessContainer')}>
        <h5 className={cx('changePasswordSuccessTitleHeader')}>
          {t('change_password_success_title_success')}
        </h5>
        <img
          className={cx('changePasswordSuccessImageCheck')}
          src={gif.adminGifCheck}
          alt={t('common_img_text_alt')}
        />
      </div>
    </div>
  );
};

export default ChangePasswordSuccess;
