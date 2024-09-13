// Libs
import classNames from 'classnames/bind';
// Components, Layouts, Pages
import { ButtonTypeEnum } from '~/utils/enum';
import { BaseButton } from '~/components/specific';
// Others
// Styles, images, icons
import styles from './Login.module.scss';
import { useTranslation } from 'react-i18next';


const cx = classNames.bind(styles);

const Login = () => {
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

  return <div className={cx('mainLayout')} >
    <div className={cx('modalTicket')}>
      <div>
        <h1 className={cx('modalTicketTitle')}>
          {t('admin_ticket_notification_title')}
        </h1>
        <p className={cx('modalTicketDesc')}>
          {t('admin_ticket_notification_description')}
        </p>
      </div>
      <button className={cx('modalTicketButton')}>
        {t('admin_ticket_notification_button')}
      </button>
    </div>
  </div>;
};

export default Login;
