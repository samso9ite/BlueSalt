import { Column } from '@ant-design/plots';

const data = [
  { type: 'Linux', value: 0.16 },
  { type: 'Mac', value: 0.125 },
  { type: 'iOS', value: 0.24 },
  { type: 'Windows', value: 0.19 },
  { type: 'Android', value: 0.22 },
  { type: 'Other', value: 0.05 },
];

const GeneratedReports = () => {
  const config = {
    data,
    width:430,
    height:250,
    xField: 'type',
    yField: 'value',
    style: {
      fill: ({ type }) => {
        if (type === 'Linux') {
          return '#95A4FC';
        }else if(type === "Mac"){
            return '#BAEDBD';
        }else if(type === "iOS"){
            return "#000"
        }else if(type === "Windows"){
            return "#B1E3FF"
        }else if(type == "Android"){
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

export default GeneratedReports