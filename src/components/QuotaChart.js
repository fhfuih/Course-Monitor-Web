import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { withStyles } from '@material-ui/core/styles';

import { ResponsiveContainer, ComposedChart, XAxis, YAxis, Legend, Line, Tooltip, Area } from 'recharts';
import { timeFormat } from 'd3-time-format';

import NoSsr from '@material-ui/core/NoSsr';

import QuotaChartFilter from './QuotaChartFilter';
import pref from '../preference'

const styles = {
  root: {
    position: 'relative'
  }
};

const xAxisFmt = timeFormat('%d/%m %H:%M');
const legendLabelFmt = timeFormat('%d/%m/%Y %H:%M:%S');

class QuotaChart extends Component {
  render() {
    return (
      <div className={this.props.classes.root}>
        <NoSsr>
          <ResponsiveContainer width='100%' minWidth={500} height={500}>
            <ComposedChart margin={{top: 20, right: 30, left: 0, bottom: 0}} data={this.props.empty ? this.props.data : null}>
              <defs>
                <linearGradient id='colorQuota' x1='0' x2='0' y1='0' y2='1'>
                  <stop offset='5%' stopColor={pref.quotaChartStyle.quota} stopOpacity={0.8} />
                  <stop offset='95%' stopColor={pref.quotaChartStyle.quota} stopOpacity={0.2} />
                </linearGradient>
                <linearGradient id='colorAvail' x1='0' x2='0' y1='0' y2='1'>
                  <stop offset='5%' stopColor={pref.quotaChartStyle.avail} stopOpacity={0.8} />
                  <stop offset='95%' stopColor={pref.quotaChartStyle.avail} stopOpacity={0.2} />
                </linearGradient>
              </defs>
              <XAxis hide={false} type='number' scale='time' domain={[this.props.startTime, this.props.endTime]} dataKey='timestamp' tickFormatter={xAxisFmt} ticks={this.props.ticks} />
              <YAxis />
              {this.props.filter.quota && <Area dataKey='quota' type='monotoneX' stroke={pref.quotaChartStyle.quota} fillOpacity={1} fill='url(#colorQuota)' />}
              {this.props.filter.avail && <Area dataKey='avail' type='monotoneX' stroke={pref.quotaChartStyle.avail} fillOpacity={1} fill='url(#colorAvail)' />}
              {this.props.filter.wait && <Line dataKey='wait' type='monotoneX' stroke={pref.quotaChartStyle.wait} dot={false} />}
              <Legend />
              <Tooltip labelFormatter={legendLabelFmt} animationEasing='ease-out' />
            </ComposedChart>
          </ResponsiveContainer>
        </NoSsr>
        <QuotaChartFilter />
      </div>
    )
  }
}

function getDateArray(s, e) {
  let a = [];
  s = new Date(s);
  e = new Date(e);
  s.setDate(s.getDate() + 1);
  s.setHours(0);
  s.setMinutes(0);
  s.setSeconds(0);
  s.setMilliseconds(0);
  while(s < e) {
    a.push(new Date(s));
    s.setDate(s.getDate() + 1);
  }
  return a;
}
const startTimeSelector = state => state.startTime;
const endTimeSelector = state => state.endTime;
const getTicks = createSelector([startTimeSelector, endTimeSelector], getDateArray);

function mapStateToProps(state) {
  return {
    empty: Boolean(state.quota.length),
    startTime: state.startTime,
    endTime: state.endTime,
    data: state.quota,
    filter: state.filter,
    ticks: getTicks(state)
  }
}

export default withStyles(styles)(connect(mapStateToProps)(QuotaChart));