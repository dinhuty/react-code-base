import { useTranslation } from 'react-i18next';
import classNames from 'classnames/bind';
// Styles, images, icons
import styles from './Search.module.scss';
import { icons } from '~/assets';

type Props = {
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const cx = classNames.bind(styles);

const Search = (props: Props) => {
  //#region Destructuring Props
  const { onChange } = props;
  //#endregion Destructuring Props

  //#region Declare Hook
  const { t } = useTranslation();
  //#endregion Declare Hook

  //#region Handle Function
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange && onChange(event);
  };
  //#endregion Handle Function
  
  return (
    <div className={cx('searchWrapper')}>
      <div className={cx('headerSearchIcon')}>
        <img src={icons.adminHeaderIconSearch} alt={t('admin_header_search_icon_alt')} />
      </div>
      <input
        className={cx('headerSearchInput')}
        placeholder={t('admin_header_search_placeholder')}
        onChange={handleChange}
      />
    </div>
  );
};

export default Search;
