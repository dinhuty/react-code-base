// Libs
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import classNames from 'classnames/bind';
// Components, Layouts, Pages
// Others
import { ISingleSelectOptions } from '~/utils/interface/common';
// Styles, images, icons
import styles from './SelectSingle.module.scss';
import { icons } from '~/assets';

type SingleSelectProps = {
  type?: string;
  defaultValue?: string;
  options?: ISingleSelectOptions[];
  onSelect?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
};

const cx = classNames.bind(styles);

const SelectSingle = (props: SingleSelectProps) => {
  //#region Destructuring Props
  const { type, defaultValue, options, onSelect } = props;
  //#endregion Destructuring Props

  //#region Declare Hook
  const { t } = useTranslation();
  //#endregion Declare Hook

  //#region Selector
  //#endregion Selector

  //#region Declare State
  const [typeSelect] = useState<string>(cx(['selectOption', type]));
  //#endregion Declare State

  //#region Implement Hook
  //#endregion Implement Hook

  //#region Handle Function
  const handleSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onSelect && onSelect(event);
  };
  //#endregion Handle Function

  return (
    <div id='selectSingle'>
      <div className={cx('selectSingleWrap')}>
        <select className={typeSelect} value={defaultValue} onChange={handleSelect}>
          {options &&
            options.map((option) => (
              <option key={option?.value} value={option?.value}>
                {option?.label}
              </option>
            ))}
        </select>

        <div className={cx('iconSelect')}>
          <img src={icons.iconSelect} alt={t('common_img_text_alt')} />
        </div>
      </div>
    </div>
  );
};

export default SelectSingle;
