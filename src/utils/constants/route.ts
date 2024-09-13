// Libs
// Components, Layouts, Pages
import { NotFoundPage } from '~/components/common';
import {
  AboutUser,
  CompanyAdmin,
  DashboardAdmin,
  General,
  HomeUser,
  LoginAdmin,
  LoginUser,
  MySubscription,
  Notification,
  Preference,
  Settings,
  Subscription,
  SubscriptionSetting,
  ShowComponent,
} from '~/pages';
// Others
import { AdminSubmenuNameTransKeyEnum, SuperAdminMenuNameTransKeyEnum } from '../enum';
import { IRouteModel } from '~/utils/interface/common';
// Styles, images, icons

// Router && Path
export const userRoute = {
  base: '/',
  login: '/login',
  home: '/home',
  about: '/about',
};

export const superAdminRoute = {
  base: '/super-admin',
  login: '/login',
  dashboard: '/dashboard',
  companyAdmin: '/company-admin',
  mySubscription: '/my-subscription',
  notification: '/notification',
  settings: '/settings',
  preference: '/preference',
  subscriptionSetting: '/subscription-setting',
  example: '/example',
};

export const publicRoutesAdmin: IRouteModel[] = [
  {
    path: '*',
    component: NotFoundPage,
  },
  {
    path: `${superAdminRoute.base}${superAdminRoute.login}`,
    component: LoginAdmin,
  },
];

//#region Super Admin Routes
export const superAdminRoutes: IRouteModel[] = [
  {
    path: `${superAdminRoute.base}${superAdminRoute.dashboard}`,
    component: DashboardAdmin,
    name: SuperAdminMenuNameTransKeyEnum.DASHBOARD,
  },
  {
    path: `${superAdminRoute.base}${superAdminRoute.companyAdmin}`,
    component: CompanyAdmin,
    name: SuperAdminMenuNameTransKeyEnum.COMPANY_ADMIN,
  },
  {
    path: `${superAdminRoute.base}${superAdminRoute.mySubscription}`,
    component: MySubscription,
    name: SuperAdminMenuNameTransKeyEnum.MY_SUBSCRIPTION,
    children: [
      {
        index: true,
        path: `${superAdminRoute.base}${superAdminRoute.mySubscription}`,
        name: AdminSubmenuNameTransKeyEnum.SUBSCRIPTION,
        component: Subscription,
      },
      {
        path: `${superAdminRoute.base}${superAdminRoute.mySubscription}${superAdminRoute.subscriptionSetting}`,
        name: AdminSubmenuNameTransKeyEnum.SUBSCRIPTION_SETTING,
        component: SubscriptionSetting,
      },
    ],
  },
  {
    path: `${superAdminRoute.base}${superAdminRoute.settings}`,
    component: Settings,
    name: SuperAdminMenuNameTransKeyEnum.SETTINGS,
    children: [
      {
        index: true,
        path: `${superAdminRoute.base}${superAdminRoute.settings}`,
        name: AdminSubmenuNameTransKeyEnum.GENERAL,
        component: General,
      },
      {
        path: `${superAdminRoute.base}${superAdminRoute.settings}${superAdminRoute.preference}`,
        name: AdminSubmenuNameTransKeyEnum.PREFERENCE,
        component: Preference,
      },
      {
        path: `${superAdminRoute.base}${superAdminRoute.settings}${superAdminRoute.notification}`,
        name: AdminSubmenuNameTransKeyEnum.NOTIFICATION,
        component: Notification,
      },
    ],
  },
  {
    path: `${superAdminRoute.base}${superAdminRoute.example}`,
    component: ShowComponent,
  },
];
//#endregion Super Admin Routes

//#region Patient Routes
export const publicUserRoutes: IRouteModel[] = [
  {
    path: '*',
    component: NotFoundPage,
  },
  {
    path: userRoute.login,
    component: LoginUser,
  },
];

export const privateUserRoutes: IRouteModel[] = [
  {
    path: userRoute.home,
    component: HomeUser,
  },
  {
    path: userRoute.about,
    component: AboutUser,
  },
];
//#endregion Patient Routes

export const publicRoutes = [...publicRoutesAdmin, ...publicUserRoutes];

export const privateSuperAdminRoutes: IRouteModel[] = [...superAdminRoutes];

export const privateRoutes = [];

export const adminRouteAbsolute = {
  dashboard: `${superAdminRoute.base}${superAdminRoute.dashboard}`,
};
