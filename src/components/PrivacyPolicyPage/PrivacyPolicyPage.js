import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import BodyWrapper from '../BodyWrapper/BodyWrapper';

class PrivacyPolicyPage extends Component {
  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <BodyWrapper>
        <Typography variant="h4" component="h2" paragraph>
          Privacy Policy
        </Typography>
        <Typography variant="body1" paragraph>
          At HKUST Course Monitor, accessible from https://ustcourse.me/, one of our main priorities
          is the privacy of our visitors. This Privacy Policy document contains types of information
          that is collected and recorded by HKUST Course Monitor and how we use it.
        </Typography>
        <Typography variant="body1" paragraph>
          If you have additional questions or require more information about our Privacy Policy, do
          not hesitate to contact us through email at fhfuih@outlook.com
        </Typography>
        <Typography variant="h5" component="h3" paragraph>
          Log Files
        </Typography>
        <Typography variant="body1" paragraph>
          HKUST Course Monitor follows a standard procedure of using log files. These files log
          visitors when they visit websites. All hosting companies do this and a part of hosting
          services&apos; analytics. The information collected by log files include internet protocol
          (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp,
          referring/exit pages, and possibly the number of clicks. These are not linked to any
          information that is personally identifiable. The purpose of the information is for
          analyzing trends, administering the site, tracking users&apos; movement on the website,
          and gathering demographic information.
        </Typography>
        <Typography variant="h5" component="h3" paragraph>
          Cookies and Web Beacons
        </Typography>
        <Typography variant="body1" paragraph>
          Like any other website, HKUST Course Monitor uses &lsquo;cookies&rsquo;. These cookies are
          used to store information including visitors&apos; preferences, and the pages on the
          website that the visitor accessed or visited. The information is used to optimize the
          users&apos; experience by customizing our web page content based on visitors&apos; browser
          type and/or other information.
        </Typography>
        <Typography variant="h5" component="h3" paragraph>
          Privacy Policies
        </Typography>
        <Typography variant="body1" paragraph>
          You may consult this list to find the Privacy Policy for each of the advertising partners
          of HKUST Course Monitor. Our Privacy Policy was created with the help of the{' '}
          <Link href="https://www.privacypolicygenerator.info" target="_blank" rel="noreferrer">
            Privacy Policy Generator
          </Link>
        </Typography>
        <Typography variant="body1" paragraph>
          Third-party ad servers or ad networks uses technologies like cookies, JavaScript, or Web
          Beacons that are used in their respective advertisements and links that appear on HKUST
          Course Monitor, which are sent directly to users&apos; browser. They automatically receive
          your IP address when this occurs. These technologies are used to measure the effectiveness
          of their advertising campaigns and/or to personalize the advertising content that you see
          on websites that you visit.
        </Typography>
        <Typography variant="body1" paragraph>
          Note that HKUST Course Monitor has no access to or control over these cookies that are
          used by third-party advertisers.
        </Typography>
        <Typography variant="h5" component="h3" paragraph>
          Third Party
        </Typography>
        <Typography variant="body1" paragraph>
          HKUST Course Monitor&apos;s Privacy Policy does not apply to other advertisers or
          websites. Thus, we are advising you to consult the respective Privacy Policies of these
          third-party ad servers for more detailed information. It may include their practices and
          instructions about how to opt-out of certain options. You may find a complete list of
          these third party services, their Privacy Policies and their links here:
        </Typography>
        <Typography variant="body1" component="div">
          <ul>
            <li>
              Google Analytics
              <ul>
                <li>
                  <Link
                    href="https://www.google.com/policies/privacy/partners/"
                    target="_blank"
                    rel="noopener"
                  >
                    How Google uses data when you use our partners&apos; sites or apps
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://tools.google.com/dlpage/gaoptout/"
                    target="_blank"
                    rel="noopener"
                  >
                    Opt-out Google Analytics
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </Typography>
        <Typography variant="body1" paragraph>
          You can choose to disable cookies through your individual browser options. To know more
          detailed information about cookie management with specific web browsers, it can be found
          at the browsers&apos; respective websites.
        </Typography>
        <Typography variant="h5" component="h3" paragraph>
          Children&apos;s Information
        </Typography>
        <Typography variant="body1" paragraph>
          Another part of our priority is adding protection for children while using the internet.
          We encourage parents and guardians to observe, participate in, and/or monitor and guide
          their online activity.
        </Typography>
        <Typography variant="body1" paragraph>
          HKUST Course Monitor does not knowingly collect any Personal Identifiable Information from
          children under the age of 13. If you think that your child provided this kind of
          information on our website, we strongly encourage you to contact us immediately and we
          will do our best efforts to promptly remove such information from our records.
        </Typography>
        <Typography variant="h5" component="h3" paragraph>
          Online Privacy Policy Only
        </Typography>
        <Typography variant="body1" paragraph>
          This Privacy Policy applies only to our online activities and is valid for visitors to our
          website with regards to the information that they shared and/or collect in HKUST Course
          Monitor. This policy is not applicable to any information collected offline or via
          channels other than this website.
        </Typography>
        <Typography variant="h5" component="h3" paragraph>
          Consent
        </Typography>
        <Typography variant="body1" paragraph>
          By using our website, you hereby consent to our Privacy Policy and agree to its Terms and
          Conditions.
        </Typography>
      </BodyWrapper>
    );
  }
}

export default PrivacyPolicyPage;
