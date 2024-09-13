// Libs
import { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import classNames from 'classnames/bind';
// Components, Layouts, Pages
import { AdminSidebarIconArrow } from '~/assets/svgComponents';
// Others
import { IRouteModel } from '~/utils/interface/common';
import { NEUTRAL_363638 } from '~/utils/constants/color';
import { MenuTypeEnum } from '~/utils/enum';
// Styles, images, icons
import styles from './MenuItem.module.scss';

type Props = {
  menuItem: IRouteModel;
};

const cx = classNames.bind(styles);

const MenuItem = (props: Props) => {
  //#region Destructuring Props
  const { path, name, children, type } = props.menuItem;
  //#endregion Destructuring Props

  //#region Declare Hook
  const location = useLocation();
  const { t } = useTranslation();
  //#endregion Declare Hook

  //#region Selector
  //#endregion Selector

  //#region Declare State
  const [isSubmenu] = useState<boolean>(children ? children.length > 0 : false);
  const [isOpenDropdown, setIsOpenDropdown] = useState<boolean>(false);
  const [menuHover, setMenuHover] = useState<string | null>(null);
  const [isActiveSubmenu, setIsActiveSubmenu] = useState<boolean>(false);
  //#endregion Declare State

  //#region Implement Hook
  useEffect(() => {
    if (!children) {
      return;
    }

    const isActiveInitial = children?.some((item) => item.path === location.pathname);
    setIsActiveSubmenu(isActiveInitial);
  }, [location.pathname, children]);
  //#endregion Implement Hook

  //#region Handle Function
  const handleShowDropdown = () => {
    setIsOpenDropdown(!isOpenDropdown);
  };
  //#endregion Handle Function

  return (
    <div id='menuItemComponent' className={cx(['menuContainer'])}>
      {type === MenuTypeEnum.DROPDOWN && isSubmenu ? (
        <div className={cx(['submenuWrap', isActiveSubmenu && 'activeMenu'])}>
          <button className={cx('menuBtn')} onClick={handleShowDropdown}>
            <div className={cx('labelGroup')}>
              <div className={cx(['menuLabel', isActiveSubmenu && 'menuLabelActive'])}>
                {t(name as string)}
              </div>
            </div>

            <span className={cx(isOpenDropdown ? 'iconMenuDropdownOpen' : 'iconMenuDropdown')}>
              <AdminSidebarIconArrow strokePath={NEUTRAL_363638} />
            </span>
          </button>

          {isOpenDropdown && (
            <div className={cx('submenuContainer')}>
              {children?.map((submenuItem) => (
                <NavLink
                  key={submenuItem.path}
                  to={submenuItem.path}
                  end
                  className={({ isActive }) => cx(['submenuLink', isActive && 'submenuLinkActive'])}
                  onMouseEnter={() => setMenuHover(submenuItem.name as string)}
                  onMouseLeave={() => setMenuHover(null)}
                >
                  {({ isActive }) => (
                    <div className={cx('labelGroup')}>
                      <img
                        src={
                          isActive || isActiveSubmenu || menuHover === submenuItem.name
                            ? submenuItem.imageActive
                            : submenuItem.image
                        }
                        className={cx('iconMenu')}
                      />
                      <div
                        className={cx([
                          'submenuLabel',
                          (isActive || isActiveSubmenu) && 'submenuLabelActive',
                        ])}
                      >
                        {t(submenuItem.name as string)}
                      </div>
                    </div>
                  )}
                </NavLink>
              ))}
            </div>
          )}
        </div>
      ) : (
        <NavLink
          to={path}
          className={({ isActive }) => cx(['menuLink', isActive && 'activeMenu'])}
          onMouseEnter={() => setMenuHover(name as string)}
          onMouseLeave={() => setMenuHover(null)}
        >
          {({ isActive }) => (
            <div className={cx('labelGroup')}>
              <div className={cx(['menuLabel', isActive && 'menuLabelActive'])}>
                {t(name as string)}
              </div>
            </div>
          )}
        </NavLink>
      )}
    </div>
  );
};

export default MenuItem;
