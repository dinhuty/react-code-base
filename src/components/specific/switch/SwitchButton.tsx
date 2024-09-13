// Libs
import { useState } from 'react';
import classNames from 'classnames/bind';
import { useTranslation } from 'react-i18next';
// Components, Layouts, Pages
// Others
// Styles, images, icons
import styles from './SwitchButton.module.scss';

type SwitchProps = {
  id: string;
  checked: boolean;
  disabled?: boolean;
  onChange: (checked: boolean) => void;
  label?: string;
};

const cx = classNames.bind(styles);

const Switch = (props: SwitchProps) => {
  //#region Destructuring Props
  const { id, label, checked, disabled, onChange } = props;
  //#endregion Destructuring Props

  //#region Declare Hook
  const { t } = useTranslation();
  //#endregion Declare Hook

  //#region Selector
  //#endregion Selector

  //#region Declare State
  const [isChecked, setIsChecked] = useState<boolean>(checked);
  //#endregion Declare State

  //#region Implement Hook
  //#endregion Implement Hook

  //#region Handle Function
  const handleSwitchChange = () => {
    setIsChecked(!isChecked);
    onChange(!isChecked);
  };
  //#endregion Handle Function

  return (
    <div id='switch' className={cx('switchContainer')}>
      <label htmlFor={id} className={cx('switch')}>
        <input
          id={id}
          type='checkbox'
          className={cx('switchInput')}
          onChange={handleSwitchChange}
          checked={isChecked}
          disabled={disabled}
        />
        <span className={cx('slider')} />
        {label && (
          <span className={cx('statusSwitch')}>
            {isChecked ? t('component_switch_on') : t('component_switch_off')}
          </span>
        )}
      </label>
    </div>
  );
};

export default Switch;
