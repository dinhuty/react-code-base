// Libs
import { useTranslation } from 'react-i18next';
import { ApexOptions } from 'apexcharts';
import ReactApexChart from 'react-apexcharts';
import classNames from 'classnames/bind';
// Components, Layouts, Pages
// Others
import { legendConfig, optionsColumnChart } from '~/utils/constants/configChart';
// Styles, images, icons
import styles from './DashboardColumnChart.module.scss';

type Props = {
  dataSource: ApexOptions['series'];
};

const cx = classNames.bind(styles);

const DashboardColumnChart = (props: Props) => {
  //#region Destructuring Props
  const { dataSource } = props;
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
    <div id='dashboardColumnChartComponent' className={cx('columnChartContainer')}>
      <div className={cx('titleChart')}>{t('admin_dashboard_column_chart_title')}</div>

      <div className={cx('chartWrap')}>
        {dataSource && (
          <ReactApexChart
            options={optionsColumnChart}
            series={dataSource}
            type='bar'
            width={'100%'}
            height={'100%'}
          />
        )}
      </div>

      <div className={cx('legendGroup')}>
        {legendConfig.map((legendItem) => (
          <div className={cx('legendItem')}>
            <div className={cx('legendColor', legendItem.color)}>{legendItem.label}</div>
            <span className={cx('legendText')}>{legendItem.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DashboardColumnChart;
