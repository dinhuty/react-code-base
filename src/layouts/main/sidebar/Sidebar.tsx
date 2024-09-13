// Libs
import { useTranslation } from 'react-i18next';
import classNames from 'classnames/bind';
// Components, Layouts, Pages
import { MenuItem, ProfileSidebar } from '~/components/specific';
// Others
import { privateSuperAdminRoutes } from '~/utils/constants/route';
// Styles, images, icons
import styles from './Sidebar.module.scss';
import { images } from '~/assets';

type Props = {};

const cx = classNames.bind(styles);

const Sidebar = (props: Props) => {
  //#region Destructuring Props
  //#endregion Destructuring Props

  //#region Declare Hook
  const { t } = useTranslation();
  //#region Declare State

  //#region Selector
  //#endregion Selector

  //#region Declare State
  //#endregion Declare State

  //#region Implement Hook
  //#endregion Implement Hook

  //#region Handle Function
  //#endregion Handle Function

  return (
    <div id='sidebarComponent' className={cx('sidebarWrap')}>
      <div className={cx('headerSidebar')}>
        <img
          src={images.adminLogoLogin}
          className={cx('logo')}
          alt={t('admin_img_title_default_alt')}
        />
      </div>

      <ProfileSidebar />
      <div className={cx('sidebarBody')}>
        {privateSuperAdminRoutes.map((menu, index) => (
          <div key={menu.name} className={cx('menuList')}>
            <MenuItem key={index} menuItem={menu} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
