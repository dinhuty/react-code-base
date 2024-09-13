// Libs
import { ChangeEvent, ReactNode, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import classNames from 'classnames/bind';
// Components, Layouts, Pages
// Others
import { InputSizeEnum, InputTypeEnum, InputTypeStyleEnum } from '~/utils/enum';
// Styles, images, icons
import styles from './BaseInput.module.scss';
import { icons } from '~/assets';

type Props = {
  id: string;
  value?: string;
  name?: string;
  type?: InputTypeEnum;
  typeStyle?: InputTypeStyleEnum;
  size?: InputSizeEnum;
  placeholder?: string;
  prefix?: string | ReactNode;
  suffix?: string | ReactNode;
  readonly?: boolean;
  disabled?: boolean;
  errorMessage?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
};

const cx = classNames.bind(styles);

const BaseInput = (props: Props) => {
  //#region Destructuring Props
  const {
    id,
    value,
    name,
    type = InputTypeEnum.TEXT,
    typeStyle,
    size,
    placeholder,
    prefix,
    suffix,
    readonly,
    disabled,
    errorMessage,
    onChange,
  } = props;
  //#endregion Destructuring Props

  //#region Declare Hook
  const { t } = useTranslation();
  //#endregion Declare Hook

  //#region Selector
  //#endregion Selector

  //#region Declare State
  const [inputValue, setInputValue] = useState<string>('');
  const [inputType, setInputType] = useState<string>(type);
  const [isShowPassword, setIsShowPassword] = useState<boolean>(false);
  //#endregion Declare State

  //#region Implement Hook
  useEffect(() => {
    if (!value) {
      return;
    }

    setInputValue(value);
  }, [value]);

  useEffect(() => {
    if (type !== InputTypeEnum.PASSWORD) {
      return;
    }

    isShowPassword ? setInputType(InputTypeEnum.TEXT) : setInputType(InputTypeEnum.PASSWORD);
  }, [type, isShowPassword]);
  //#endregion Implement Hook

  //#region Handle Function
  const handleChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;

    setInputValue(value);
    onChange && onChange(event);
  };

  const handleShowHidePassword = () => {
    setIsShowPassword(!isShowPassword);
  };
  //#endregion Handle Function

  return (
    <div id='baseInputComponent' className={cx('input')}>
      <div className={cx(['inputContainer', typeStyle, size, disabled && 'inputDisabled'])}>
        {prefix && (
          <div
            className={cx([
              'inputPrefix',
              prefix &&
                typeStyle === InputTypeStyleEnum.BORDER_NEUTRAL_500 &&
                'inputPrefixNeutral500',
            ])}
          >
            {prefix}
          </div>
        )}

        <input
          id={id}
          className={cx(['input', suffix && 'suffixInput'])}
          type={inputType}
          name={name}
          value={inputValue}
          placeholder={placeholder}
          onChange={handleChangeInput}
          readOnly={readonly}
          disabled={disabled}
        />

        {type === InputTypeEnum.PASSWORD && (
          <div className={cx('inputEye')} onClick={handleShowHidePassword}>
            <img
              src={isShowPassword ? icons.adminIconShowPassword : icons.adminIconShowPassword}
              alt={t('common_img_text_alt')}
            />
          </div>
        )}

        {suffix && <div className={cx('inputSuffix')}>{suffix}</div>}
      </div>

      {errorMessage && <p className={cx('inputError')}>{errorMessage}</p>}
    </div>
  );
};

export default BaseInput;
