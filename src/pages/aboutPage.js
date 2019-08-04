import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';

class AboutPage extends Component {
  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <main>
        <Typography variant="h2">About</Typography>
        <Typography variant="p">
          HKUST Course Monitor is an independent and unofficial project not affiliated with or
          maintained by the Hong Kong University of Science and Technology (HKUST).
        </Typography>
        <Typography variant="p">
          All data used for visualization are acquired from or derived from HKUST websites that are
          open to the public. There may be some inconsistency due to the loose schedule of
          scrapings. This site is intended for simple references only, and the developers are not
          responsible for the correctness of the displayed data.
        </Typography>
        <Typography variant="p">
          Made possible by XIA Junzhe (backend) and HUANG Zeyu (frontend) in 2019.
        </Typography>
      </main>
    );
  }
}

export default AboutPage;
