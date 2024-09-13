// Libs
import classNames from 'classnames/bind';
// Components, Layouts, Pages
// Others
import { ZINC_1A191B } from '~/utils/constants/color';
import { IconSvgProps } from '~/utils/interface/common';
// Styles, images, icons
import styles from './styles.module.scss';

const cx = classNames.bind(styles);

const AdminSidebarIconArrow = (props: IconSvgProps) => {
  //#region Destructuring Props
  const { strokePath = ZINC_1A191B } = props;
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
    <svg
      className={cx('adminSidebarIconArrow')}
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <g clipPath='url(#clip0_434_2972)'>
        <path
          d='M9 6L15 12L9 18'
          stroke={strokePath}
          strokeWidth='1.5'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </g>
      <defs>
        <clipPath id='clip0_434_2972'>
          <rect width='24' height='24' fill='white' transform='matrix(-1 0 0 1 24 0)' />
        </clipPath>
      </defs>
    </svg>
  );
};

export default AdminSidebarIconArrow;
