export enum EnvironmentEnum {
  LOCAL = 'local',
  DEVELOPMENT = 'development',
  STAG = 'stag',
  PROD = 'prod',
}

export enum RolesEnum {
  ADMIN = 'ADMIN',
}

export enum StorageEnum {
  ACCESS_TOKEN = 'access_token',
  REFRESH_TOKEN = 'refresh_token',
  USER = 'user',
  STATUS_LOGIN = 'statusLogin',
}

export enum LanguageEnum {
  EN = 'en',
}

// Keys
export enum SuperAdminMenuNameTransKeyEnum {
  DASHBOARD = 'sidebar_label_item_dashboard',
  COMPANY_ADMIN = 'sidebar_label_item_company_admin',
  MY_SUBSCRIPTION = 'sidebar_label_item_my_subscription',
  SETTINGS = 'sidebar_label_item_settings',
}

export enum AdminSubmenuNameTransKeyEnum {
  GENERAL = 'sidebar_label_item_general',
  PREFERENCE = 'sidebar_label_item_preference',
  NOTIFICATION = 'sidebar_label_item_notification',
  SUBSCRIPTION = 'sidebar_label_item_subscription',
  SUBSCRIPTION_SETTING = 'sidebar_label_item_subscription_setting',
}

// Components
// 1. Input
export enum InputTypeEnum {
  TEXT = 'text',
  NUMBER = 'number',
  EMAIL = 'email',
  PASSWORD = 'password',
}

export enum InputTypeStyleEnum {
  AUTH = 'typeAuth',
  BORDER_GRAY_300_TEXT_BLACK = 'borderGray300TextBlack',
  BORDER_GRAY_300_TEXT_NEUTRAL_700 = 'borderGray300TextNeutral700',
  BORDER_NEUTRAL_500 = 'borderNeutral500',
  BORDER_NEUTRAL_400_TEXT_NEUTRAL_900 = 'borderNeutral400TextNeutral900',
  BORDER_ZINC_400_TEXT_ZINC_500 = 'borderZinc400TextZinc500',
  BORDER_ZINC_400_TEXT_ZINC_500_PADDING_22 = 'borderZinc400TextZinc500Padding22',
}

export enum InputSizeEnum {
  SMALL = 'small',
  MEDIUM = 'medium',
  LARGE = 'large',
  X_LARGE = 'xLarge',
}

// 2. Status Table
export enum StatusTypeEnum {
  PRIMARY = 'primary',
  PRIMARY_ORANGE = 'orange',
  PRIMARY_TEAL = 'teal',
}

// 3. BaseButton
export enum ButtonTypeEnum {
  PRIMARY = 'primary',
  WHITE = 'white',
  CYAN = 'cyan',
  GREEN = 'green',
  LOGIN = 'login',
}

// 4. MenuItem
export enum MenuTypeEnum {
  DROPDOWN = 'dropdown',
}

export enum LoginIndexKeyEnum {
  SIGN_IN = 'admin_signin_login_button',
  FORGOT_PASSWORD = 'admin_forgot_password_send_button',
  CREATE_NEW_PASSWORD = 'admin_create_password_create_button',
  SUCCESS_CREATE_PASSWORD = 'admin_success_ok_button',
}

export enum InputNameEnum {
  USERNAME = 'username',
  EMAIL = 'email',
  PASSWORD = 'password',
  NEW_PASSWORD = 'newPassword',
  CONFIRM_PASSWORD = 'confirmPassword',
  SEARCH = 'search',
}

export enum InputPlaceholderKeyEnum {
  DEFAULT = 'admin_input_default_placeholder',
  ADMIN_EMAIL = 'admin_signin_email_placeholder',
  ADMIN_PASSWORD = 'admin_signin_password_placeholder',
  ADMIN_SEARCH = 'admin_header_search_placeholder',
  ADMIN_NEW_PASSWORD = 'admin_create_new_password_new_password_placeholder',
  ADMIN_CONFIRM_PASSWORD = 'admin_create_new_password_confirm_password_placeholder',
}

// 5. Chart
export enum AdminColorChartEnum {
  ORANGE_FABE7A = 'orangeFabe7a',
  RED_F6866A = 'redF6866a',
  CYAN_59E6F6 = 'cyan59e6f6',
  INDIGO_7661E2 = 'indigo7661e2',
}
