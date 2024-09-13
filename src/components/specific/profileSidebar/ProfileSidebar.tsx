// Libs
import classNames from 'classnames/bind';
import { useTranslation } from 'react-i18next';
// Components, Layouts, Pages
// Others
import { superAdminSidebarProfile } from '~/mockData';
// Styles, images, icons
import styles from './ProfileSidebar.module.scss';

type SidebarProfileProps = {};

const cx = classNames.bind(styles);

const SidebarProfile = (props: SidebarProfileProps) => {
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
    <div id='profileSidebarComponent' className={cx('profileSidebarContainer')}>
      <div className={cx('profileWrapper')}>
        <img
          className={cx('profileLogo')}
          src={superAdminSidebarProfile.image}
          alt={t('common_img_text_alt')}
        />
        {superAdminSidebarProfile.numberOfNotification > 0 && (
          <div className={cx('notification')}>{superAdminSidebarProfile.numberOfNotification}</div>
        )}
      </div>

      <div className={cx('profileContent')}>
        <h2 className={cx('profileName')}>{superAdminSidebarProfile.fullName}</h2>
        <p className={cx('profileRole')}>{superAdminSidebarProfile.role}</p>
      </div>
    </div>
  );
};

export default SidebarProfile;
