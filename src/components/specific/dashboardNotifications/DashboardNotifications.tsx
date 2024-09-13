// Libs
import { useTranslation } from 'react-i18next';
import classNames from 'classnames/bind';
// Components, Layouts, Pages
import { NotificationItem } from '~/components/specific';
// Others
import { listNotification } from '~/mockData';
// Styles, images, icons
import styles from './DashboardNotifications.module.scss';

type Props = {};

const cx = classNames.bind(styles);

const DashboardNotifications = (props: Props) => {
  //#region Destructuring Props
  const {} = props;
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
    <div id='dashboardNotificationsComponent' className={cx('dashboardNotificationsContainer')}>
      <section className={cx('headerGroup')}>
        <p className={cx('title')}>{t('admin_dashboard_title_notifications')}</p>
        <span className={cx('linkStyle')}>{t('admin_dashboard_text_notification_view_all')}</span>
      </section>

      <section className={cx('bodyGroup')}>
        {listNotification.map((notificationItem, index) => (
          <NotificationItem key={index} data={notificationItem} />
        ))}
      </section>
    </div>
  );
};

export default DashboardNotifications;
