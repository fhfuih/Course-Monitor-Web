import React from 'react';
import { ResponsiveContainer, ComposedChart, XAxis, YAxis, Legend, Line, Tooltip, Area } from 'recharts';
import { timeFormat } from 'd3-time-format';

import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import Typography from '@material-ui/core/Typography';
// import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import GithubCircle from 'mdi-material-ui/GithubCircle';

import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper'

import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import InputLabel from '@material-ui/core/InputLabel';
import Switch from '@material-ui/core/Switch';
import Select from '@material-ui/core/Select';

import testData from './testData/sectionData_COMP1021_L1.json';
import { MenuItem } from '@material-ui/core';
const startTime = 1548302079, endTime = 1550290680;
const data =  testData.data.map(d=>({
  ...d,
  quota: d.avail + d.enroll
}))

const styles = theme => ({
  grow: {
    flexGrow: 1
  },
  appTitle: {
    paddingLeft: 10
  },
  appBarSpacer: {
    minHeight: 74
  },
  content: {
    margin: "1rem"
  },
  centeringPusher: {
    margin: "0 auto"
  },
  paper: {
    padding: "2rem",
    overflow: "auto"
  },
  breadcrumb: {
    position: 'relative',
    top: -16
  },
  breadcrumbDelimiter: {
    opacity: 0.6,
    margin: "24px 10px 0 10px",
    display: "inline-block"
  },
  breadcrumbItem: {
    minWidth: 200,
    margin: "0 5px"
  },
  breadcrumbTypography: {
    fontWeight: theme.typography.h4.fontWeight,
    fontSize: theme.typography.h4.fontSize,
    lineHeight: theme.typography.h4.lineHeight,
    letterSpacing: theme.typography.h4.letterSpacing,
  },
  breadcrumbLabelShrink: {
    transform: "translate(0, 2px) scale(0.4)"
  }
})

const mainChartStyle = {
  quota: "#ccc",
  avail: "#82ca9d",
  wait: "#ff7300",

}

const xAxisFmt = timeFormat('%d/%m %H:%M');
const legendLabelFmt = timeFormat('%d/%m/%y %H:%M:%S');

function App(props) {
  const { classes } = props
  return (
    <div>
      <CssBaseline />
      <AppBar position='absolute'>
        <Toolbar>
          <IconButton color='inherit'>
            <MenuIcon />
          </IconButton>
          <Typography variant='h6' color='inherit' className={classes.appTitle}>
            Course Monitor
          </Typography>
          <div className={classes.grow} />
          <IconButton color='inherit'>
            <GithubCircle />
          </IconButton>
        </Toolbar>
      </AppBar>
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Grid container spacing={24} justify='center'>
          <Grid item xs={10}>
            <Typography component='h2' variant='h4' gutterBottom>
              {/* Spring 2019 / MATH1013 / L01 */}
              <form autoComplete='off' className={classes.breadcrumb}>
                <FormControl className={classes.breadcrumbItem}>
                  <InputLabel classes={{root:classes.breadcrumbTypography,shrink:classes.breadcrumbLabelShrink}}>
                    Semester
                  </InputLabel>
                  <Select classes={{root: classes.breadcrumbTypography}}>
                    <MenuItem>Spring 2019</MenuItem>
                  </Select>
                </FormControl>
                <span className={classes.breadcrumbDelimiter}>/</span>
                <FormControl className={classes.breadcrumbItem}>
                  <InputLabel classes={{root:classes.breadcrumbTypography,shrink:classes.breadcrumbLabelShrink}}>
                    Course
                  </InputLabel>
                  <Select native classes={{root: classes.breadcrumbTypography}}/*  value='COMP 1021' */>
                    <option value={null}></option>
                    <option value='COMP 1021'>COMP 1021</option>
                  </Select>
                </FormControl>
                <span className={classes.breadcrumbDelimiter}>/</span>
                <FormControl className={classes.breadcrumbItem}>
                  <InputLabel classes={{root:classes.breadcrumbTypography,shrink:classes.breadcrumbLabelShrink}}>
                    Section
                  </InputLabel>
                  <Select classes={{root: classes.breadcrumbTypography}}>
                    <MenuItem>L1</MenuItem>
                  </Select>
                </FormControl>
              </form>
            </Typography>
            <Paper className={classes.paper}>
              <ResponsiveContainer width='100%' minWidth={500} height={500} className={classes.centeringPusher}>
                <ComposedChart margin={{top: 20, right: 30, left: 0, bottom: 0}} data={data}>
                  <defs>
                    <linearGradient id='colorQuota' x1='0' x2='0' y1='0' y2='1'>
                      <stop offset='5%' stopColor={mainChartStyle.quota} stopOpacity={0.8} />
                      <stop offset='95%' stopColor={mainChartStyle.quota} stopOpacity={0.2} />
                    </linearGradient>
                    <linearGradient id='colorAvail' x1='0' x2='0' y1='0' y2='1'>
                      <stop offset='5%' stopColor={mainChartStyle.avail} stopOpacity={0.8} />
                      <stop offset='95%' stopColor={mainChartStyle.avail} stopOpacity={0.2} />
                    </linearGradient>
                  </defs>
                  <XAxis type='number' scale='time' domain={[startTime, endTime]} dataKey='timestamp' tickFormatter={xAxisFmt} />
                  <YAxis />
                  <Area dataKey='quota' type='basis' stroke={mainChartStyle.quota} fillOpacity={1} fill='url(#colorQuota)' />
                  <Area dataKey='avail' type='basis' stroke={mainChartStyle.avail} fillOpacity={1} fill='url(#colorAvail)' />
                  <Line dataKey='wait' type='basis' stroke={mainChartStyle.wait} dot={false} />
                  <Legend />
                  <Tooltip labelFormatter={legendLabelFmt} />
                </ComposedChart>
              </ResponsiveContainer>
            </Paper>
          </Grid>
          {/* <Grid item xs={3}>
            <Grid container spacing={16}>
              <Grid item xs={12}>
                <Paper className={classes.paper}>
                  <Typography gutterBottom component='h3' variant='h5'>
                    Lorem Ipsum
                  </Typography>
                  <Typography component='p'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Arcu ac tortor dignissim convallis aenean et tortor at. In hac habitasse platea dictumst quisque sagittis. Platea dictumst vestibulum rhoncus est pellentesque. Eu tincidunt tortor aliquam nulla facilisi. Et sollicitudin ac orci phasellus egestas tellus rutrum tellus. 
                  </Typography>
                </Paper>
              </Grid>
              <Grid item xs={12}>
                <Paper className={classes.paper}>
                  <FormControl>
                    <FormLabel component='legend'>Filter</FormLabel>
                    <FormGroup>
                      <FormControlLabel 
                        control={
                          <Switch/>
                        }
                        label='Avail'
                      />
                      <FormControlLabel 
                        control={
                          <Switch/>
                        }
                        label='Enroll'
                      />
                      <FormControlLabel 
                        control={
                          <Switch/>
                        }
                        label='Wait'
                      />
                    </FormGroup>
                  </FormControl>
                </Paper>
              </Grid>
            </Grid>
          </Grid> */}
        </Grid>
      </main>
    </div>
  )
}

export default withStyles(styles)(App);