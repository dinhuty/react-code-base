// Libs
import { useTranslation } from 'react-i18next';
import classNames from 'classnames/bind';
// Components, Layouts, Pages
// Others
import { IDataNotification } from '~/utils/interface/common';
// Styles, images, icons
import styles from './NotificationItem.module.scss';

type Props = {
  data: IDataNotification;
};

const cx = classNames.bind(styles);

const NotificationItem = (props: Props) => {
  //#region Destructuring Props
  const { data } = props;
  //#endregion Destructuring Props

  //#region Declare Hook
  const { t } = useTranslation();
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
    <div id='notificationItemComponent' className={cx('notificationItemContainer')}>
      <img src={data.avatarUrl} className={cx('imageStyle')} alt={t('common_img_text_alt')} />

      <div className={cx('mainContent')}>
        <p className={cx('notificationTitle')}>{data.name}</p>
        <p className={cx('notificationTime')}>{data.time}</p>
      </div>
    </div>
  );
};

export default NotificationItem;
