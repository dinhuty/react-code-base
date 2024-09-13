// Libs
import { useState } from 'react';
import classNames from 'classnames/bind';
// Components, Layouts, Pages
// Others
import { StatusTypeEnum } from '~/utils/enum';
// Styles, images, icons
import styles from './Status.module.scss';

type StatusProps = {
  content: string;
  type?: StatusTypeEnum;
  width?: number;
  height?: number;
};

const cx = classNames.bind(styles);

const Status = (props: StatusProps) => {
  //#region Destructuring Props
  const { width, height = 31, content, type } = props;
  //#endregion Destructuring Props

  //#region Declare Hook
  //#endregion Declare Hook

  //#region Selector
  //#endregion Selector

  //#region Declare State
  const [statusClass] = useState(cx(['originStyle', type]));
  //#endregion Declare State

  //#region Implement Hook
  //#endregion Implement Hook

  //#region Handle Function
  //#endregion Handle Function

  return (
    <div id='status' style={{ width, height }} className={statusClass}>
      <span>{content}</span>
    </div>
  );
};

export default Status;
