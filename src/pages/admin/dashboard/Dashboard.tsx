// Libs
import classNames from 'classnames/bind';
// Components, Layouts, Pages
import {
  DashboardStatisticCard,
  DashboardColumnChart,
  DashboardNotifications,
  DashboardTable,
  DashboardRadialChart,
} from '~/components/specific';
// Others
import { dataChart, dataDashboardStatisticCard, superAdminDashboardLayout } from '~/mockData';
// Styles, images, icons
import styles from './Dashboard.module.scss';

const cx = classNames.bind(styles);

const Dashboard = () => {
  return (
    <div id='dashboardPage' className={cx('dashboardPage')}>
      <section className={cx('statisticCardGroup')}>
        {dataDashboardStatisticCard.map((statisticCardItem, index) => (
          <div className={cx('cardWrap')} key={index}>
            <DashboardStatisticCard
              title={statisticCardItem.type}
              value={statisticCardItem.value}
            />
          </div>
        ))}
      </section>

      <section className={cx('bodyGroup')}>
        <div className={cx('statisticGroup')}>
          <div className={cx('statisticChartGroup')}>
            <div className={cx('chartWrap')}>
              <DashboardColumnChart dataSource={dataChart} />
            </div>

            <div className={cx('chartWrap')}>
              <DashboardRadialChart />
            </div>
          </div>

          <div className={cx('statisticTable')}>
            <DashboardTable />
          </div>
        </div>

        <div className={cx('notificationGroup')}>
          <DashboardNotifications />
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
