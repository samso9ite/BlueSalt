import { Pie } from '@ant-design/plots';

const data = [
  { name: "1-10", value: 21001947 },
  { name: "10-15", value: 18415681 },
  { name: "65-69", value: 14547446 },
  { name: "70-74", value: 10587721 },
];

const TrafficAnalytics = () => {
  const config = {
    data,
    angleField: "value",
    colorField: "name",
    legend: true,
    innerRadius: 0.6,
    height: 250,
    labels: [
      { text: "name", style: { fontSize: 10, fontWeight: "bold" } },
      {
        text: (d, i, data) => (i < data.length - 3 ? d.value : ""),
        style: { fontSize: 9, dy: 12 },
      },
    ],
    style: {
      stroke: "#fff",
      inset: 1,
      radius: 10,
    },
    color: ({ name }: { name: string }) => {
      const colorMap: Record<string, string> = {
        "1-10": "#b2e2ff", // Vibrant Orange-Red
        "10-15": "#313132", // Bright Blue
        "65-69": "#a1e3cb", // Emerald Green
        "70-74": "#b2e2ff", // Gold
      };
      return colorMap[name] || "#888"; // Default Gray if not found
    },
  };

  return <Pie {...config} />;
};

export default TrafficAnalytics;
