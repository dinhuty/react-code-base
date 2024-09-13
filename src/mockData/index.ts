import { StatusTypeEnum } from '~/utils/enum';

// Role Super Admin
export const superAdminDashboardLayout = {
  cardSubscription: 'Card Subscription',
  cardCompany: 'Card Company',
  cardAdmin: 'Card Admin',
  chartTeamsStrength: 'Chart Teams Strength',
  chartAdmin: 'Chart Admin',
  listNotification: 'Notifications',
  tableCompanyAdmin: 'Company Admin',
};

export const superAdminSidebarProfile = {
  image:
    'https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  fullName: 'Samantha',
  role: 'Super Admin',
  numberOfNotification: 10,
};

/* Dashboard chart Teams Strength */
export const dataChart = [{ data: [14, 3, 10, 8] }];

/* Dashboard statistic card */
export const dataDashboardStatisticCard = [
  {
    type: 'Total Subscription',
    value: '$34800.00',
  },
  {
    type: 'Total Company',
    value: '100',
  },
  {
    type: 'Total Admin',
    value: '223',
  },
];

/* Dashboard page table */
export const tableColumnsDashboard = [
  'Admin ID',
  `Admin Name`,
  'Company',
  'Subscription',
  'Created date',
  'Status',
  '',
];

export const dataSourceDashboard = [
  {
    id: '#Ab1235844',
    admin: {
      avatar: 'https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-1.jpg',
      name: 'Enola',
    },
    company: 'Company Name',
    subscription: 'Pro',
    createdDate: '27 Jul 23',
    status: 'Active',
    statusColor: StatusTypeEnum.PRIMARY,
  },
  {
    id: '#Ab1235844',
    admin: {
      avatar: 'https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-2.jpg',
      name: 'Natalia',
    },
    company: 'Company Name',
    subscription: 'Pro',
    createdDate: '27 Jul 23',
    status: 'Active',
    statusColor: StatusTypeEnum.PRIMARY,
  },
  {
    id: '#Ab1235844',
    admin: {
      avatar: 'https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-3.jpg',
      name: 'Mike',
    },
    company: 'Company Name',
    subscription: 'Pro',
    createdDate: '27 Jul 23',
    status: 'Deactivated',
    statusColor: StatusTypeEnum.PRIMARY_ORANGE,
  },
  {
    id: '#Ab1235844',
    admin: {
      avatar: 'https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-4.jpg',
      name: 'Jennifer',
    },
    company: 'Company Name',
    subscription: 'N/A',
    createdDate: '27 Jul 23',
    status: 'Active',
    statusColor: StatusTypeEnum.PRIMARY,
  },
  {
    id: '#Ab1235844',
    admin: {
      avatar: 'https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-5.jpg',
      name: 'Miller',
    },
    company: 'Company Name',
    subscription: 'Plus',
    createdDate: '27 Jul 23',
    status: 'Active',
    statusColor: StatusTypeEnum.PRIMARY,
  },
];

/* Dashboard notification */
export const listNotification = [
  {
    avatarUrl: 'https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-1.jpg',
    name: 'New Admin Added',
    time: '04 April, 2021 | 04:00 PM',
  },
  {
    avatarUrl: 'https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-2.jpg',
    name: 'New Admin Added',
    time: '04 April, 2021 | 04:00 PM',
  },
  {
    avatarUrl: 'https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-2.jpg',
    name: 'New Admin Added',
    time: '04 April, 2021 | 04:00 PM',
  },
  {
    avatarUrl: 'https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-4.jpg',
    name: 'New Admin Added',
    time: '04 April, 2021 | 04:00 PM',
  },
  {
    avatarUrl: 'https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-5.jpg',
    name: 'New Admin Added',
    time: '04 April, 2021 | 04:00 PM',
  },
];

/* My Subscriptions */
export const tableColumnsMySubscription = [
  'Subscriber’s Name',
  'Email',
  'Company',
  'Subscription',
  'Expiry',
  'Status',
];

export const dataSourceMySubscription = [
  {
    patient: {
      avatar: 'https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-3.jpg',
      name: 'Mike',
    },
    email: 'example@example.com',
    company: 'Company Name',
    subscription: 'Pro',
    expiry: '27 Jul 23',
    status: 'Confirmed',
  },
  {
    patient: {
      avatar: 'https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-3.jpg',
      name: 'Mike',
    },
    email: 'example@example.com',
    company: 'Company Name',
    subscription: 'Pro',
    expiry: '27 Jul 23',
    status: 'Deactivated',
  },
  {
    patient: {
      avatar: 'https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-3.jpg',
      name: 'Mike',
    },
    email: 'example@example.com',
    company: 'Company Name',
    subscription: 'Pro',
    expiry: '27 Jul 23',
    status: 'Confirmed',
  },
  {
    patient: {
      avatar: 'https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-3.jpg',
      name: 'Mike',
    },
    email: 'example@example.com',
    company: 'Company Name',
    subscription: 'Pro',
    expiry: '27 Jul 23',
    status: 'Confirmed',
  },
  {
    patient: {
      avatar: 'https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-3.jpg',
      name: 'Mike',
    },
    email: 'example@example.com',
    company: 'Company Name',
    subscription: 'Pro',
    expiry: '27 Jul 23',
    status: 'Deactivated',
  },
  {
    patient: {
      avatar: 'https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-3.jpg',
      name: 'Mike',
    },
    email: 'example@example.com',
    company: 'Company Name',
    subscription: 'Pro',
    expiry: '27 Jul 23',
    status: 'Confirmed',
  },
  {
    patient: {
      avatar: 'https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-3.jpg',
      name: 'Mike',
    },
    email: 'example@example.com',
    company: 'Company Name',
    subscription: 'Pro',
    expiry: '27 Jul 23',
    status: 'Deactivated',
  },
  {
    patient: {
      avatar: 'https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-3.jpg',
      name: 'Mike',
    },
    email: 'example@example.com',
    company: 'Company Name',
    subscription: 'Pro',
    expiry: '27 Jul 23',
    status: 'Confirmed',
  },
  {
    patient: {
      avatar: 'https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-3.jpg',
      name: 'Mike',
    },
    email: 'example@example.com',
    company: 'Company Name',
    subscription: 'Pro',
    expiry: '27 Jul 23',
    status: 'Deactivated',
  },
  {
    patient: {
      avatar: 'https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-3.jpg',
      name: 'Mike',
    },
    email: 'example@example.com',
    company: 'Company Name',
    subscription: 'Pro',
    expiry: '27 Jul 23',
    status: 'Confirmed',
  },
  {
    patient: {
      avatar: 'https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-3.jpg',
      name: 'Mike',
    },
    email: 'example@example.com',
    company: 'Company Name',
    subscription: 'Pro',
    expiry: '27 Jul 23',
    status: 'Confirmed',
  },
];

/* Company Admin */
export const tableColumnsCompanyAdmin = [
  'Admin ID',
  'Admin Name',
  'Phone',
  'Email',
  'Company',
  'Subscription',
  'Created date',
  'Status',
  '',
];

export const dataSourceCompanyAdmin = [
  {
    id: '#Ab1235844',
    patient: {
      avatar: 'https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-3.jpg',
      name: 'Mike',
    },
    phone: '0123456789',
    email: 'example@example.com',
    company: 'Company Name',
    Subscription: 'Pro',
    CreatedDate: '27 Jul 23',
    status: 'Confirmed',
  },
  {
    id: '#Ab1235844',
    patient: {
      avatar: 'https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-3.jpg',
      name: 'Mike',
    },
    phone: '0123456789',
    email: 'example@example.com',
    company: 'Company Name',
    Subscription: 'Pro',
    CreatedDate: '27 Jul 23',
    status: 'Deactivated',
  },
  {
    id: '#Ab1235844',
    patient: {
      avatar: 'https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-3.jpg',
      name: 'Mike',
    },
    phone: '0123456789',
    email: 'example@example.com',
    company: 'Company Name',
    Subscription: 'Pro',
    CreatedDate: '27 Jul 23',
    status: 'Confirmed',
  },
  {
    id: '#Ab1235844',
    patient: {
      avatar: 'https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-3.jpg',
      name: 'Mike',
    },
    phone: '0123456789',
    email: 'example@example.com',
    company: 'Company Name',
    Subscription: 'Pro',
    CreatedDate: '27 Jul 23',
    status: 'Deactivated',
  },
  {
    id: '#Ab1235844',
    patient: {
      avatar: 'https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-3.jpg',
      name: 'Mike',
    },
    phone: '0123456789',
    email: 'example@example.com',
    company: 'Company Name',
    Subscription: 'Pro',
    CreatedDate: '27 Jul 23',
    status: 'Confirmed',
  },
  {
    id: '#Ab1235844',
    patient: {
      avatar: 'https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-3.jpg',
      name: 'Mike',
    },
    phone: '0123456789',
    email: 'example@example.com',
    company: 'Company Name',
    Subscription: 'Pro',
    CreatedDate: '27 Jul 23',
    status: 'Confirmed',
  },
  {
    id: '#Ab1235844',
    patient: {
      avatar: 'https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-3.jpg',
      name: 'Mike',
    },
    phone: '0123456789',
    email: 'example@example.com',
    company: 'Company Name',
    Subscription: 'Pro',
    CreatedDate: '27 Jul 23',
    status: 'Deactivated',
  },
  {
    id: '#Ab1235844',
    patient: {
      avatar: 'https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-3.jpg',
      name: 'Mike',
    },
    phone: '0123456789',
    email: 'example@example.com',
    company: 'Company Name',
    Subscription: 'Pro',
    CreatedDate: '27 Jul 23',
    status: 'Confirmed',
  },
  {
    id: '#Ab1235844',
    patient: {
      avatar: 'https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-3.jpg',
      name: 'Mike',
    },
    phone: '0123456789',
    email: 'example@example.com',
    company: 'Company Name',
    Subscription: 'Pro',
    CreatedDate: '27 Jul 23',
    status: 'Deactivated',
  },
  {
    id: '#Ab1235844',
    patient: {
      avatar: 'https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-3.jpg',
      name: 'Mike',
    },
    phone: '0123456789',
    email: 'example@example.com',
    company: 'Company Name',
    Subscription: 'Pro',
    CreatedDate: '27 Jul 23',
    status: 'Confirmed',
  },
];
