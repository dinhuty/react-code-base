// Libs
import classNames from 'classnames/bind';
// Components, Layouts, Pages
import { CompanyAdminTable } from '~/components/specific';
// Others
// Styles, images, icons
import styles from './CompanyAdmin.module.scss';

type Props = {};

const cx = classNames.bind(styles);

const CompanyAdmin = (props: Props) => {
  //#region Destructuring Props
  //#endregion Destructuring Props

  //#region Declare Hook
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
    <div id='companyAdminPage' className={cx('companyAdminPage')}>
      <section className={cx('statisticTable')}>
        <CompanyAdminTable />
      </section>
    </div>
  );
};

export default CompanyAdmin;
