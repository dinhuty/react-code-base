// Libs
import classNames from 'classnames/bind';
// Components, Layouts, Pages
import { SubscriberTable } from '~/components/specific';
// Others
// Styles, images, icons
import styles from './Subscription.module.scss';

type Props = {};

const cx = classNames.bind(styles);

const Subscription = (props: Props) => {
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
    <div id='subscriptionPage' className={cx('subscriptionPage')}>
      <section className={cx('statisticTable')}>
        <SubscriberTable />
      </section>
    </div>
  );
};

export default Subscription;
