import { Column } from '@ant-design/plots';

const data = [
  { type: 'Jan', value: 0.16 },
  { type: 'Feb', value: 0.125 },
  { type: 'Mar', value: 0.24 },
  { type: 'Apr', value: 0.19 },
  { type: 'May', value: 0.22 },
  { type: 'Jun', value: 0.05 },
  { type: 'Jul', value: 0.16 },
  { type: 'Aug', value: 0.125 },
  { type: 'Sep', value: 0.24 },
  { type: 'Oct', value: 0.19 },
  { type: 'Nov', value: 0.22 },
  { type: 'Dec', value: 0.05 },
];

const MarketingReports = () => {
  const config = {
    data,

    height:250,
    xField: 'type',
    yField: 'value',
    style: {
      fill: ({ type }) => {
        if (type === 'Jan' || type == "Oct" || type == "Dec") {
          return '#95A4FC';
        }else if(type === "Feb" || type == "May"){
            return '#BAEDBD';
        }else if(type === "Mar" || type == "Jun"){
            return "#000"
        }else if(type === "Apr"  || type == "Jul"){
            return "#B1E3FF"
        }else if(type == "Sep" || type == "Aug"){
            return "#A8C5DA"
        }else{
            return "#A1E3CB"
        }
      },
   
    },
    label: {
      text: (originData) => {
        const val = parseFloat(originData.value);
        if (val < 0.05) {
          return (val * 100).toFixed(1) + '%';
        }
        return '';
      },
      offset: 10,
    },
    legend: false,
    columnStyle: {
        radius: [10, 10, 0, 0],
      },
  };
  return <Column {...config} />;
};

export default MarketingReports