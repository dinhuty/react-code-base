import { MenuTypeEnum } from '~/utils/enum';

export interface IRouteModel {
  path: string;
  component: React.ElementType;
  children?: IRouteModel[];
  name?: string;
  image?: string;
  imageActive?: string;
  index?: boolean;
  type?: MenuTypeEnum;
}

export interface ISingleSelectOptions {
  value: string;
  label: string;
}

export interface IconSvgProps {
  strokePath?: string;
  fill?: string;
}

export interface IDataNotification {
  avatarUrl: string;
  name: string;
  time: string;
}
