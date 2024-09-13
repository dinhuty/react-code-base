// Libs
import { useTranslation } from 'react-i18next';
import classNames from 'classnames/bind';
// Components, Layouts, Pages
// Others
// Styles, images, icons
import styles from './DashboardStatisticCard.module.scss';

type Props = {
  title?: string;
  value?: string;
};

const cx = classNames.bind(styles);

const DashboardStatisticCard = (props: Props) => {
  //#region Destructuring Props
  const { title = 'Total', value = '0' } = props;
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
    <div id='dashboardStatisticCardComponent' className={cx('StatisticCardContainer')}>
      <span className={cx('title')}>{title}</span>
      <span className={cx('content')}>{value}</span>
      <span className={cx('description')}>{t('component_dashboard_statistic_card')}</span>
    </div>
  );
};

export default DashboardStatisticCard;
