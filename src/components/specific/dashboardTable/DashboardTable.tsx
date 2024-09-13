// Libs
import { useTranslation } from 'react-i18next';
import classNames from 'classnames/bind';
// Components, Layouts, Pages
import { StatusTable } from '~/components/specific';
// Others
import { dataSourceDashboard, tableColumnsDashboard } from '~/mockData';
// Styles, images, icons
import styles from './DashboardTable.module.scss';
import { icons } from '~/assets';

type Props = {};

const cx = classNames.bind(styles);

const DashboardTable = (props: Props) => {
  //#region Destructuring Props
  const {} = props;
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
    <div id='dashboardTableComponent' className={cx('dashboardTableContainer')}>
      <section className={cx('headerGroup')}>
        <p className={cx('title')}>{t('admin_dashboard_title_table')}</p>
      </section>

      <section className={cx('bodyGroup')}>
        <table className={cx('tableStyle')}>
          <thead className={cx('theadStyle')}>
            <tr>
              {tableColumnsDashboard.map((head, index) => (
                <th key={head} className={cx('thStyle')}>
                  <div className={cx('cellContainer', 'textStyle')}>
                    <span>{head}</span>
                  </div>
                </th>
              ))}
            </tr>
          </thead>

          <tbody className={cx('tbodyStyle')}>
            {dataSourceDashboard.map(
              ({ id, admin, company, subscription, createdDate, status, statusColor }, index) => (
                <tr key={index}>
                  <td>
                    <div className={cx('cellContainer', 'textStyle')}>
                      <span>{id}</span>
                    </div>
                  </td>

                  <td>
                    <div className={cx('cellContainer', 'textStyle')}>
                      <img
                        className={cx('imgStyle')}
                        src={admin.avatar}
                        alt={t('common_img_text_alt')}
                      />
                      <span className={cx('cellText')}>{admin.name}</span>
                    </div>
                  </td>

                  <td>
                    <div className={cx('cellContainer', 'textStyle')}>{company}</div>
                  </td>

                  <td>
                    <div className={cx('cellContainer', 'textStyle')}>{subscription}</div>
                  </td>

                  <td>
                    <div className={cx('cellContainer', 'textStyle')}>
                      <img src={icons.commonIconCalendarTable} alt={t('common_img_text_alt')} />
                      <span className={cx('cellText')}>{createdDate}</span>
                    </div>
                  </td>

                  <td>
                    <div className={cx('cellContainer', 'textStyle')}>
                      <StatusTable content={status} type={statusColor} width={84} height={31} />
                    </div>
                  </td>

                  <td>
                    <div className={cx('cellContainer', 'textStyle')}>
                      <button>
                        <img src={icons.commonIconTripleDots} alt={t('common_img_text_alt')} />
                      </button>
                    </div>
                  </td>
                </tr>
              )
            )}
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default DashboardTable;
