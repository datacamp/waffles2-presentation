import { css } from '@emotion/react';

import { tokens } from '@datacamp/waffles/tokens';
import { Heading } from '@datacamp/waffles/heading';

import Layout from '../components/Layout';

const heroStyle = css`
  height: 100%;
  width: 100%;
  background: ${tokens.colors.yellowLight} url('/waffles-hero.svg')
    no-repeat;
  background-position: right bottom;
  background-size: cover;
  border-bottom: ${tokens.borderWidth.thin} solid ${tokens.colors.beigeMedium};
  padding: ${tokens.spacing.large};
`;

const headingStyle = css`
  font-size: 40px;
  max-width: 600px;
`;

const highlightStyle = css`
  color: ${tokens.colors.purpleDark};
`;

function LandingPage() {
  return <Layout nextUrl="what-to-do">
      <div css={heroStyle}>
        <Heading css={headingStyle} as="h1">How I Stopped Worrying and Started Using <span css={highlightStyle}>Waffles 2.0</span></Heading>
      </div>
    </Layout>;
}

export default LandingPage;
