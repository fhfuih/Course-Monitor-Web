import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import BodyWrapper from '../BodyWrapper/BodyWrapper';

class AboutPage extends Component {
  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <BodyWrapper>
        <Typography variant="h4" component="h2" paragraph>
          About
        </Typography>
        <Typography variant="body1" paragraph>
          HKUST Course Monitor is an independent and unofficial project not affiliated with or
          maintained by the Hong Kong University of Science and Technology (HKUST).
        </Typography>
        <Typography variant="body1" paragraph>
          All data used for visualization are acquired from or derived from HKUST websites that are
          open to the public. There may be some inconsistency due to the loose schedule of
          scrapings. This site is intended for simple references only, and the developers are not
          responsible for the correctness of the displayed data.
        </Typography>
        <Typography variant="body1" paragraph>
          Made possible by XIA Junzhe (backend) and HUANG Zeyu (frontend) in 2019.
        </Typography>
      </BodyWrapper>
    );
  }
}

export default AboutPage;
