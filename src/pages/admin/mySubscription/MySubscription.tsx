// Libs
import { useEffect, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import classNames from 'classnames/bind';
// Components, Layouts, Pages
import { NavTab } from '~/components/specific';
// Others
import { privateSuperAdminRoutes } from '~/utils/constants/route';
import { IRouteModel } from '~/utils/interface/common';
// Styles, images, icons
import styles from './MySubscription.module.scss';

const cx = classNames.bind(styles);

type Props = {};

const MySubscription = (props: Props) => {
  //#region Destructuring Props
  //#endregion Destructuring Props

  //#region Declare Hook
  const location = useLocation();
  //#endregion Declare Hook

  //#region Selector
  //#endregion Selector

  //#region Declare State
  const [routersTab, setRoutersTab] = useState<IRouteModel[]>(
    privateSuperAdminRoutes.find((item) => item.path === location.pathname)?.children ?? []
  );
  //#endregion Declare State

  //#region Implement Hook
  useEffect(() => {
    if (privateSuperAdminRoutes.length <= 0) {
      return;
    }

    const childrenRouter =
      privateSuperAdminRoutes.find((item) => location.pathname.includes(item.path))?.children ?? [];

    setRoutersTab(childrenRouter);
  }, [location.pathname]);
  //#endregion Implement Hook

  //#region Handle Function
  //#endregion Handle Function

  return (
    <div id='mySubscriptionPage' className={cx('mySubscriptionPage')}>
      <NavTab routers={routersTab} />

      <div className={cx('contentWrapper')}>
        <Outlet />
      </div>
    </div>
  );
};

export default MySubscription;
