import React, { Component } from 'react';

import Typography from '@material-ui/core/Typography';

class Footer extends Component {
  shouldComponentUpdate() { return false; }
  render() {
    return (
      <div>
        <Typography
          align='center'
          color='textSecondary'
          component='footer'
          variant='caption'
        >
          Copyright 2019 XIA, Junzhe; HUANG, Zeyu<br/>HKUST Course Monitor is an independent and unofficial project not affiliated with or maintained by the Hong Kong University of Science and Technology (HKUST).<br/>All data used for visualization are aquired from or derived from HKUST websites that are open to the public.
        </Typography>
      </div>
    )
  }
}

export default Footer;