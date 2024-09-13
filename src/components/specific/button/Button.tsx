// Libs
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import classNames from 'classnames/bind';
// Components, Layouts, Pages
// Others
import { ButtonTypeEnum } from '~/utils/enum';
// Styles, images, icons
import styles from './Button.module.scss';

type Props = {
  width?: number;
  height?: number;
  type?: ButtonTypeEnum;
  label?: string;
  icon?: string;
  onClick?: () => void;
};

const cx = classNames.bind(styles);

const Button = (props: Props) => {
  //#region Destructuring Props
  const { width = '100%', height = 31, type, label = 'Button', icon, onClick } = props;
  //#endregion Destructuring Props

  //#region Declare Hook
  const { t } = useTranslation();
  //#endregion Declare Hook

  //#region Declare State
  const [buttonClass] = useState(cx(['originStyle', type]));
  //#endregion Declare State

  //#region Handle Function
  const handleClick = () => {
    onClick && onClick();
  };
  //#endregion Handle Function

  return (
    <button
      id='buttonComponent'
      style={{ width, height }}
      className={buttonClass}
      onClick={handleClick}
    >
      {icon && <img src={icon} alt={t('common_img_text_alt')} className={cx('iconButton')}></img>}
      {label}
    </button>
  );
};

export default Button;
