// Libs
import { useTranslation } from 'react-i18next';
import classNames from 'classnames/bind';
// Components, Layouts, Pages
import { BaseButton, StatusTable } from '~/components/specific';
// Others
import { dataSourceCompanyAdmin, tableColumnsCompanyAdmin } from '~/mockData';
import { ButtonTypeEnum, StatusTypeEnum } from '~/utils/enum';
// Styles, images, icons
import styles from './CompanyAdminTable.module.scss';
import { icons } from '~/assets';

type Props = {};

const cx = classNames.bind(styles);

const CompanyAdminTable = (props: Props) => {
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
    <div id='companyAdminTableComponent' className={cx('companyAdminTable')}>
      <section className={cx('headerGroup')}>
        <div className={cx('headTitleWrap')}>
          <span className={cx('title')}>{t('admin_company_admin_title_table')}</span>
        </div>
        <div className={cx('headButton')}>
          <BaseButton
            width={121}
            height={31}
            type={ButtonTypeEnum.CYAN}
            label={t('admin_company_admin_button_add_table')}
          />
        </div>
      </section>

      <section className={cx('bodyGroup')}>
        <table className={cx('tableStyle')}>
          <thead className={cx('theadStyle')}>
            <tr>
              {tableColumnsCompanyAdmin.map((head, index) => (
                <th key={head} className={cx('thStyle')}>
                  <div className={cx('cellContainer', 'textStyle')}>
                    <span>{head}</span>
                  </div>
                </th>
              ))}
            </tr>
          </thead>

          <tbody className={cx('tbodyStyle')}>
            {dataSourceCompanyAdmin.map(
              (
                { id, patient, phone, email, company, Subscription, CreatedDate, status },
                index
              ) => (
                <tr key={index}>
                  <td>
                    <div className={cx('cellContainer', 'textStyle')}>
                      <span className={cx('cellText')}>{id}</span>
                    </div>
                  </td>

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
                    <div className={cx('cellContainer', 'textStyle')}>{phone}</div>
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
                    <div className={cx('cellContainer', 'textStyle')}>
                      <span className={cx('cellText')}>{Subscription}</span>
                    </div>
                  </td>

                  <td>
                    <div className={cx('cellContainer', 'textStyle')}>
                      <img
                        className={cx('iconCreat')}
                        src={icons.commonIconCalendarTable}
                        alt={t('common_img_text_alt')}
                      />
                      <span className={cx('cellText')}>{CreatedDate}</span>
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

export default CompanyAdminTable;
