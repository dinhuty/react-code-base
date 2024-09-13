// Libs
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import classNames from 'classnames/bind';
// Components, Layouts, Pages
// Others
import { IRouteModel } from '~/utils/interface/common';
// Styles, images, icons
import styles from './NavTab.module.scss';

type Props = {
  routers: IRouteModel[];
};

const cx = classNames.bind(styles);

const NavTab = (props: Props) => {
  //#region Destructuring Props
  const { routers } = props;
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
    <div id='navTabComponent' className={cx('navTabContainer')}>
      {routers.map((nav) => {
        if (!nav.path || !nav.name) {
          return;
        }
        const navName = nav.name as string;

        return (
          <NavLink
            key={nav.path}
            to={nav.path}
            end
            className={({ isActive }) => cx('navLink', isActive && 'navLinkActive')}
          >
            {({ isActive }) => (
              <span className={cx('textStyle', isActive && 'textStyleActive')}>{t(navName)}</span>
            )}
          </NavLink>
        );
      })}
    </div>
  );
};

export default NavTab;
