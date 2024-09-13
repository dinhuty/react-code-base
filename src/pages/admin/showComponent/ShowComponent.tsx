// Libs
import classNames from 'classnames/bind';
// Components, Layouts, Pages
// Others
// Styles, images, icons
import styles from './ShowComponent.module.scss';
import {
  BaseButton,
  BaseInput,
  DashboardColumnChart,
  Note,
  Search,
  SelectSingle,
  StatusTable,
  Switch,
} from '~/components/specific';
import { ButtonTypeEnum, InputTypeEnum, InputTypeStyleEnum, StatusTypeEnum } from '~/utils/enum';
import { dataChart } from '~/mockData';

const cx = classNames.bind(styles);

type Props = {};

const ShowComponent = (props: Props) => {
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
    <div id='showComponentsPage' className={cx('showComponentsPage')}>
      <div className={cx('itemComponent')}>
        <h1 className={cx('titleComponent')}>Button</h1>
        <div className='mb-2'>
          <p className={cx('descriptionTypeComponent')}>Type {ButtonTypeEnum.CYAN}</p>
          <div className={cx('typeComponentButton')}>
            <BaseButton type={ButtonTypeEnum.CYAN} />
          </div>
        </div>
        <div className='mb-2'>
          <p className={cx('descriptionTypeComponent')}>Type {ButtonTypeEnum.GREEN}</p>
          <div className={cx('typeComponentButton')}>
            <BaseButton type={ButtonTypeEnum.GREEN} />
          </div>
        </div>
        <div className='mb-2'>
          <p className={cx('descriptionTypeComponent')}>Type {ButtonTypeEnum.LOGIN}</p>
          <div className={cx('typeComponentButton')}>
            <BaseButton type={ButtonTypeEnum.LOGIN} />
          </div>
        </div>
        <div className='mb-2'>
          <p className={cx('descriptionTypeComponent')}>Type {ButtonTypeEnum.PRIMARY}</p>
          <div className={cx('typeComponentButton')}>
            <BaseButton type={ButtonTypeEnum.PRIMARY} />
          </div>
        </div>
        <div className='mb-2'>
          <p className={cx('descriptionTypeComponent')}>Type {ButtonTypeEnum.WHITE}</p>
          <div className={cx('typeComponentButton')}>
            <BaseButton type={ButtonTypeEnum.WHITE} />
          </div>
        </div>
      </div>

      <div className={cx('itemComponent')}>
        <h1 className={cx('titleComponent')}>Input</h1>
        <div className='mb-2'>
          <p className={cx('descriptionTypeComponent')}>Type Style "{InputTypeStyleEnum.AUTH}"</p>
          <div>
            <BaseInput id='1' typeStyle={InputTypeStyleEnum.AUTH} />
          </div>
        </div>
        <div className='mb-2'>
          <p className={cx('descriptionTypeComponent')}>
            Type Style "{InputTypeStyleEnum.BORDER_GRAY_300_TEXT_BLACK}"
          </p>
          <div>
            <BaseInput id='1' typeStyle={InputTypeStyleEnum.BORDER_GRAY_300_TEXT_BLACK} />
          </div>
        </div>
        <div className='mb-2'>
          <p className={cx('descriptionTypeComponent')}>
            Type Style "{InputTypeStyleEnum.BORDER_GRAY_300_TEXT_NEUTRAL_700}"
          </p>
          <div>
            <BaseInput id='1' typeStyle={InputTypeStyleEnum.BORDER_GRAY_300_TEXT_NEUTRAL_700} />
          </div>
        </div>
        <div className='mb-2'>
          <p className={cx('descriptionTypeComponent')}>
            Type Style "{InputTypeStyleEnum.BORDER_NEUTRAL_400_TEXT_NEUTRAL_900}"
          </p>
          <div>
            <BaseInput id='1' typeStyle={InputTypeStyleEnum.BORDER_NEUTRAL_400_TEXT_NEUTRAL_900} />
          </div>
        </div>
        <div className='mb-2'>
          <p className={cx('descriptionTypeComponent')}>
            Type Style "{InputTypeStyleEnum.BORDER_NEUTRAL_500}"
          </p>
          <div>
            <BaseInput id='1' typeStyle={InputTypeStyleEnum.BORDER_NEUTRAL_500} />
          </div>
        </div>
        <div className='mb-2'>
          <p className={cx('descriptionTypeComponent')}>
            Type Style "{InputTypeStyleEnum.BORDER_ZINC_400_TEXT_ZINC_500}"
          </p>
          <div>
            <BaseInput id='1' typeStyle={InputTypeStyleEnum.BORDER_ZINC_400_TEXT_ZINC_500} />
          </div>
        </div>
        <div className='mb-2'>
          <p className={cx('descriptionTypeComponent')}>
            Type Style "{InputTypeStyleEnum.BORDER_ZINC_400_TEXT_ZINC_500_PADDING_22}"
          </p>
          <div>
            <BaseInput
              id='1'
              typeStyle={InputTypeStyleEnum.BORDER_ZINC_400_TEXT_ZINC_500_PADDING_22}
            />
          </div>
        </div>
        <div className='mb-2'>
          <p className={cx('descriptionTypeComponent')}>
            Type Style "{InputTypeStyleEnum.BORDER_ZINC_400_TEXT_ZINC_500}"
          </p>
          <div>
            <BaseInput id='1' typeStyle={InputTypeStyleEnum.BORDER_ZINC_400_TEXT_ZINC_500} />
          </div>
        </div>
      </div>

      <div className={cx('itemComponent')}>
        <h1 className={cx('titleComponent')}>Column Chart</h1>
        <div className='mb-2'>
          <p className={cx('descriptionTypeComponent')}>Column Chart</p>
          <div>
            <DashboardColumnChart dataSource={dataChart} />
          </div>
        </div>
      </div>

      <div className={cx('itemComponent')}>
        <h1 className={cx('titleComponent')}>Switch</h1>
        <div className='mb-2'>
          <p className={cx('descriptionTypeComponent')}>Switch with status</p>
          <div>
            <Switch id='2' checked={true} onChange={(e) => {}} label='label' />
          </div>
        </div>
      </div>

      <div className={cx('itemComponent')}>
        <h1 className={cx('titleComponent')}>Note</h1>
        <div className='mb-2'>
          <p className={cx('descriptionTypeComponent')}>Type Default</p>
          <div>
            <Note title='Nội dung note' />
          </div>
        </div>
      </div>

      <div className={cx('itemComponent')}>
        <h1 className={cx('titleComponent')}>Search</h1>
        <div className='mb-2'>
          <p className={cx('descriptionTypeComponent')}>Type Default</p>
          <div>
            <Search />
          </div>
        </div>
      </div>

      <div className={cx('itemComponent')}>
        <h1 className={cx('titleComponent')}>Select</h1>
        <div className='mb-2'>
          <p className={cx('descriptionTypeComponent')}>Type Default</p>
          <div>
            <SelectSingle />
          </div>
        </div>
      </div>

      <div className={cx('itemComponent')}>
        <h1 className={cx('titleComponent')}>Status Table</h1>
        <div className='mb-2'>
          <p className={cx('descriptionTypeComponent')}>Type "{StatusTypeEnum.PRIMARY}"</p>
          <div>
            <StatusTable content='Nội dung status' type={StatusTypeEnum.PRIMARY} />
          </div>
        </div>
        <div className='mb-2'>
          <p className={cx('descriptionTypeComponent')}>Type "{StatusTypeEnum.PRIMARY_ORANGE}"</p>
          <div>
            <StatusTable content='Nội dung status' type={StatusTypeEnum.PRIMARY_ORANGE} />
          </div>
        </div>
        <div className='mb-2'>
          <p className={cx('descriptionTypeComponent')}>Type "{StatusTypeEnum.PRIMARY_TEAL}"</p>
          <div>
            <StatusTable content='Nội dung status' type={StatusTypeEnum.PRIMARY_TEAL} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowComponent;
