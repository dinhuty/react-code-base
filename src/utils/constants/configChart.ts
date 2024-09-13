import {
  CYAN_59E6F6,
  SLATE_304758,
  ORANGE_FABE7A,
  INDIGO_7661E2,
  RED_F6866A,
} from '~/utils/constants/color';
import { AdminColorChartEnum } from '~/utils/enum';
import { ILegendColumnChart } from '~/utils/interface/chart';

// ADMIN - DASHBOARD
export const legendConfig: ILegendColumnChart[] = [
  {
    label: 'a',
    name: 'Marketing',
    color: AdminColorChartEnum.ORANGE_FABE7A,
  },
  {
    label: 'b',
    name: 'HR',
    color: AdminColorChartEnum.RED_F6866A,
  },
  {
    label: 'c',
    name: 'Developers',
    color: AdminColorChartEnum.CYAN_59E6F6,
  },
  {
    label: 'd',
    name: 'Design',
    color: AdminColorChartEnum.INDIGO_7661E2,
  },
];

export const optionsColumnChart = {
  chart: {
    stacked: true,
    toolbar: {
      show: false,
    },
    events: {
      mounted: (chartContext: any) => {
        chartContext.windowResizeHandler();
      },
    },
  },
  colors: [ORANGE_FABE7A, RED_F6866A, CYAN_59E6F6, INDIGO_7661E2],
  plotOptions: {
    bar: {
      columnWidth: '75%',
      distributed: true,
      borderRadius: 10,
      dataLabels: {
        position: 'top',
      },
    },
  },
  grid: {
    show: false,
  },
  dataLabels: {
    enabled: true,
    offsetY: -20,
    style: {
      fontSize: '12px',
      colors: [SLATE_304758],
    },
  },
  legend: {
    show: false,
  },
  labels: legendConfig.map((legendItem) => legendItem.label),
  xaxis:{
    axisTicks:{
      show:false
    },
    axisBorder:{
      show:false
    }
  },
  yaxis: {
    show: false,
  },
};
