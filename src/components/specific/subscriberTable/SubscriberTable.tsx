// Libs
import { useTranslation } from 'react-i18next';
import classNames from 'classnames/bind';
// Components, Layouts, Pages
import { BaseButton, StatusTable } from '~/components/specific';
// Others
import { dataSourceMySubscription, tableColumnsMySubscription } from '~/mockData';
import { ButtonTypeEnum, StatusTypeEnum } from '~/utils/enum';
// Styles, images, icons
import styles from './SubscriberTable.module.scss';
import { icons } from '~/assets';

type Props = {};

const cx = classNames.bind(styles);

const SubscriberTable = (props: Props) => {
  //#region Destructuring Props
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
    <div id='subscriberTableComponent' className={cx('subscriberTable')}>
      <section className={cx('headerGroup')}>
        <div className={cx('headTitleWrap')}>
          <span className={cx('title')}>{t('admin_my_subscription_title_table')}</span>
        </div>
        <div className={cx('headButton')}>
          <BaseButton
            width={140}
            height={31}
            type={ButtonTypeEnum.WHITE}
            label={t('admin_overview_label_button_edit')}
          />
          <BaseButton
            width={140}
            height={31}
            type={ButtonTypeEnum.CYAN}
            icon={icons.commonIconAdd}
            label={t('admin_overview_label_button_add')}
          />
        </div>
      </section>

      <section className={cx('bodyGroup')}>
        <table className={cx('tableStyle')}>
          <thead className={cx('theadStyle')}>
            <tr>
              {tableColumnsMySubscription.map((head, index) => (
                <th key={head} className={cx('thStyle')}>
                  <div className={cx('cellContainer', 'textStyle')}>
                    <span>{head}</span>
                  </div>
                </th>
              ))}
            </tr>
          </thead>

          <tbody className={cx('tbodyStyle')}>
            {dataSourceMySubscription.map(
              ({ patient, email, company, subscription, expiry, status }, index) => (
                <tr key={index}>
                  <td>
                    <div className={cx('cellContainer', 'textStyle')}>
                      <img
                        className={cx('imgStyle')}
                        src={patient.avatar}
                        alt={t('common_img_text_alt')}
                      />
                      <span className={cx('cellText')}>{patient.name}</span>
                    </div>
                  </td>

                  <td>
                    <div className={cx('cellContainer', 'textStyle')}>
                      <span className={cx('cellText')}>{email}</span>
                    </div>
                  </td>

                  <td>
                    <div className={cx('cellContainer', 'textStyle')}>
                      <span className={cx('cellText')}>{company}</span>
                    </div>
                  </td>

                  <td>
                    <div className={cx('cellContainer', 'textStyle')}>{subscription}</div>
                  </td>

                  <td>
                    <div className={cx('cellContainer', 'textStyle')}>
                      <img
                        className={cx('iconExpiry')}
                        src={icons.commonIconCalendarTable}
                        alt={t('common_img_text_alt')}
                      />
                      <span className={cx('cellText')}>{expiry}</span>
                    </div>
                  </td>

                  <td>
                    <div className={cx('cellContainer', 'textStyle')}>
                      {status === 'Confirmed' ? (
                        <StatusTable
                          width={84}
                          height={31}
                          content={status}
                          type={StatusTypeEnum.PRIMARY}
                        />
                      ) : status === 'Deactivated' ? (
                        <StatusTable
                          width={84}
                          height={31}
                          content={status}
                          type={StatusTypeEnum.PRIMARY_ORANGE}
                        />
                      ) : null}
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

export default SubscriberTable;
