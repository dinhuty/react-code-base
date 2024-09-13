// Libs
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import classNames from 'classnames/bind';
// Components, Layouts, Pages
import { BaseButton, Switch } from '~/components/specific';
// Others
import { ButtonTypeEnum } from '~/utils/enum';
// Styles, images, icons
import styles from './Notification.module.scss';

type Props = {};

const cx = classNames.bind(styles);

const Notification = (props: Props) => {
  //#region Destructuring Props
  //#endregion Destructuring Props

  //#region Declare Hook
  const { t } = useTranslation();
  //#endregion Declare Hook

  //#region Selector
  //#endregion Selector

  //#region Declare State
  const [isChecked, setIsChecked] = useState(true);
  //#endregion Declare State

  //#region Implement Hook
  //#endregion Implement Hook

  //#region Handle Function
  const handleSwitchChange = () => {
    setIsChecked(!isChecked);
  };
  //#endregion Handle Function

  return (
    <div id='notificationPage' className={cx('notificationPage')}>
      <section className={cx('headerGroup')}>
        <div className={cx('headTitleWrap')}>
          <span className={cx('title')}>{t('admin_setting_notification_title_table')}</span>
        </div>
        <div className={cx('headButton')}>
          <BaseButton
            width={140}
            height={31}
            type={ButtonTypeEnum.WHITE}
            label={t('admin_setting_notification_label_button_cancel')}
          />
          <BaseButton
            width={140}
            height={31}
            type={ButtonTypeEnum.CYAN}
            label={t('admin_setting_notification_label_button_save')}
          />
        </div>
      </section>
      <div className={cx('line')}></div>
      <section className={cx('bodyGroup')}>
        <div className={cx('contentNotificationgrap')}>
          <span className={cx('bodyTitle')}>{t('admin_setting_notification_title_email')}</span>
          <div className={cx('bodyswitch')}>
            <label className={cx('statusSwitchGroup')}>
              <Switch
                id='switchEmail'
                checked={isChecked}
                onChange={handleSwitchChange}
                label={t('admin_switch_on')}
              />
            </label>
            <label className={cx('inputGroup')}>
              <span className={cx('inputContent')}>News and Update Settings</span>
            </label>
            <label className={cx('inputGroup')}>
              <span className={cx('inputContent')}>Tips and Tutorials</span>
            </label>
            <label className={cx('inputGroup')}>
              <span className={cx('inputContent')}>Offer and Promotions</span>
            </label>
          </div>
        </div>
        <div className={cx('contentNotificationgrap')}>
          <span className={cx('bodyTitle')}>{t('admin_setting_notification_title_more')}</span>
          <div className={cx('bodyswitch')}>
            <label className={cx('statusSwitchGroup')}>
              <Switch
                id='switchMore'
                checked={isChecked}
                onChange={handleSwitchChange}
                label={t('admin_switch_on')}
              />
            </label>
            <label className={cx('inputGroup')}>
              <span className={cx('inputContent')}>All Reminders & Activity</span>
            </label>
            <label className={cx('inputGroup')}>
              <span className={cx('inputContent')}>Activity only</span>
            </label>
            <label className={cx('inputGroup')}>
              <span className={cx('inputContent')}>Important Reminder only</span>
            </label>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Notification;
