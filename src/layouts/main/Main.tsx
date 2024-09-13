// Libs
import { Outlet } from 'react-router-dom';
import classNames from 'classnames/bind';
// Component
import Header from './header/Header';
import Sidebar from './sidebar/Sidebar';
// Styles, images, icons
import styles from './Main.module.scss';

const cx = classNames.bind(styles);

const Main = () => {
  return (
    <div className={cx('mainContainer')}>
      <section className={cx('sidebarContainer')}>
        <Sidebar />
      </section>

      <section className={cx('primaryContent')}>
        <div className={cx('headerContainer')}>
          <Header />
        </div>

        <div className={cx('content')}>
          <Outlet />
        </div>
      </section>
    </div>
  );
};

export default Main;
