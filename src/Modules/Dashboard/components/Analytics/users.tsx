import { DualAxes } from '@ant-design/plots';

const UserAnalytics = () => {
  const data = [
    { month: 'Jan', value: 3, count: 10 },
    { month: 'Feb', value: 4, count: 4 },
    { month: 'Mar', value: 3.5, count: 5 },
    { month: 'Apr', value: 5, count: 5 },
    { month: 'May', value: 4.9, count: 4.9 },
    { month: 'Jun', value: 6, count: 35 },
   
  ];

  const config = {
    data,
    height:250,
    width:650,
    xField: 'month',
    legend: true,
    children: [
      {
        type: 'line',
        yField: 'value',
        style: {
          lineWidth: 1,
          lineDash: [2, 2],
        },
        label: {
          text: (datum) => `${datum.value}`,
          style: {
            dy: -10,
            textAlign: 'middle',
          },
        },
        axis: {
          y: {
            title: 'value',
            style: { titleFill: '#000' },
          },
        },
      },
      {
        type: 'line',
        yField: 'count',
        shapeField: 'smooth',
        style: {
          stroke: '#000',
          lineWidth: 2,
        },
        label: {
          text: (datum) => `${datum.count}`,
          style: {
            dy: -10,
            textAlign: 'middle',
          },
        },
        axis: {
          y: {
            position: 'right',
            title: 'count',
            style: { titleFill: '#000' },
          },
        },
      },
      {
        type: 'point',
        yField: 'count',
        sizeField: 2,
        style: {
          stroke: '#000',
          fill: '#fff',
        },
        axis: { y: false },
        tooltip: false,
      },
    ],
  };
  return <DualAxes {...config} />;
};

export default UserAnalytics
