// Libs
import classNames from 'classnames/bind';
// Components, Layouts, Pages
// Others
// Styles, images, icons
import styles from './Note.module.scss';
import { icons } from '~/assets';

type Props = {
  title: string;
};

const cx = classNames.bind(styles);

const Note = (props: Props) => {
  //#region Destructuring Props
  const { title } = props;
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
    <div id='noteComponent'>
      <div className={cx('noteWrap')}>
        <img className={cx('iconCheckbox')} src={icons.adminCreateNewPasswordIconCheckbox} />
        <span className={cx('textNote')}>{title}</span>
      </div>
    </div>
  );
};

export default Note;
