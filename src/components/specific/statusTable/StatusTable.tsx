// Libs
import classNames from 'classnames/bind';
// Components, Layouts, Pages
// Others
import { StatusTypeEnum } from '~/utils/enum';
// Styles, images, icons
import styles from './StatusTable.module.scss';

type Props = {
  label?: string;
  width?: number;
  height?: number;
  type?: StatusTypeEnum;
};

const cx = classNames.bind(styles);

const StatusTable = (props: Props) => {
  //#region Destructuring Props
  const { width = 84, height = 31, label = 'Status', type = StatusTypeEnum.PRIMARY } = props;
  //#endregion Destructuring Props

  //#region Declare Hook
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
    <div id='statusTableComponent' style={{ width, height }} className={cx('originStyle', type)}>
      {label}
    </div>
  );
};

export default StatusTable;
