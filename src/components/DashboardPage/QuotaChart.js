import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import withStyles from '@material-ui/core/styles/withStyles';
import NoSsr from '@material-ui/core/NoSsr';
import {
  ResponsiveContainer,
  ComposedChart,
  XAxis,
  YAxis,
  Legend,
  Line,
  Tooltip,
  Area,
} from 'recharts';
import { timeFormat } from 'd3-time-format';
import pref from '../../preference';
import filterType from '../../propTypes/filterType';
import seriesDatumType from '../../propTypes/seriesDatumType';
import QuotaChartFilter from './QuotaChartFilter';

const styles = {
  root: {
    position: 'relative',
  },
};

const xAxisFmt = timeFormat('%b %d');
const legendLabelFmt = timeFormat('%b %d %Y %H:%M:%S');

class QuotaChart extends Component {
  render() {
    const { classes, data, startTime, endTime, ticks, filter } = this.props;
    return (
      <div className={classes.root}>
        <NoSsr>
          <ResponsiveContainer width="100%" minWidth={500} height={500}>
            <ComposedChart margin={{ top: 20, right: 30, left: 0, bottom: 0 }} data={data.length ? data : null}>
              <defs>
                <linearGradient id="colorQuota" x1="0" x2="0" y1="0" y2="1">
                  <stop offset="5%" stopColor={pref.quotaChartStyle.quota} stopOpacity={0.8} />
                  <stop offset="95%" stopColor={pref.quotaChartStyle.quota} stopOpacity={0.2} />
                </linearGradient>
                <linearGradient id="colorAvail" x1="0" x2="0" y1="0" y2="1">
                  <stop offset="5%" stopColor={pref.quotaChartStyle.avail} stopOpacity={0.8} />
                  <stop offset="95%" stopColor={pref.quotaChartStyle.avail} stopOpacity={0.2} />
                </linearGradient>
              </defs>
              <XAxis
                hide={false}
                type="number"
                scale="time"
                domain={[startTime, endTime]}
                dataKey="timestamp"
                tickFormatter={xAxisFmt}
                ticks={ticks}
              />
              <YAxis />
              {filter.quota && (
                <Area
                  dataKey="quota"
                  type="monotoneX"
                  stroke={pref.quotaChartStyle.quota}
                  fillOpacity={1}
                  fill="url(#colorQuota)"
                />
              )}
              {filter.avail && (
                <Area
                  dataKey="avail"
                  type="monotoneX"
                  stroke={pref.quotaChartStyle.avail}
                  fillOpacity={1}
                  fill="url(#colorAvail)"
                />
              )}
              {filter.wait && (
                <Line
                  dataKey="wait"
                  type="monotoneX"
                  stroke={pref.quotaChartStyle.wait}
                  dot={false}
                />
              )}
              <Legend />
              <Tooltip labelFormatter={legendLabelFmt} animationEasing="ease-out" />
            </ComposedChart>
          </ResponsiveContainer>
        </NoSsr>
        <QuotaChartFilter />
      </div>
    );
  }
}

QuotaChart.propTypes = {
  classes: PropTypes.object.isRequired,
  data: PropTypes.arrayOf(seriesDatumType),
  filter: filterType.isRequired,
  startTime: PropTypes.number,
  endTime: PropTypes.number,
  ticks: PropTypes.arrayOf(PropTypes.instanceOf(Date)).isRequired,
};

function getDateArray(start, end) {
  const a = [];
  const s = new Date(start);
  const e = new Date(end);
  s.setDate(s.getDate() + 1);
  s.setHours(0);
  s.setMinutes(0);
  s.setSeconds(0);
  s.setMilliseconds(0);
  while (s < e) {
    a.push(new Date(s));
    s.setDate(s.getDate() + 1);
  }
  return a;
}
const startTimeSelector = state => state.startTime;
const endTimeSelector = state => state.endTime;
const getTicks = createSelector(
  [startTimeSelector, endTimeSelector],
  getDateArray,
);

function mapStateToProps(state) {
  return {
    startTime: state.startTime,
    endTime: state.endTime,
    data: state.quota,
    filter: state.filter,
    ticks: getTicks(state),
  };
}

export default withStyles(styles)(connect(mapStateToProps)(QuotaChart));
