const config = {
  dataServer: process.env.REACT_APP_DATASERVER || 'http://localhost:8000/',
  quotaChartStyle: {
    quota: "#ccc",
    avail: "#82ca9d",
    wait: "#ff7300",
  }
};

export default config;