// import { css } from '@emotion/react';

import { Heading } from '@datacamp/waffles/heading';
import { Paragraph } from '@datacamp/waffles/paragraph';
import { Code } from '@datacamp/waffles/code';
import { Button } from '@datacamp/waffles/button';
import { Link } from '@datacamp/waffles/link';
import { ContentContainer } from '@datacamp/waffles/content-container';
import { Tooltip } from '@datacamp/waffles/tooltip';
import { InfoCircle } from '@datacamp/waffles/icon';

import Layout from '../components/Layout';
import Section from '../components/Section';

function TooltipPage() {
  return <Layout prevUrl="/button-and-link" nextUrl="/form-elements">
      <ContentContainer noSidebar>
        <Heading size="xxlarge">New Tooltip Is Rather Flexible Too</Heading>
        <Section>
          <Heading size="large">With standalone element</Heading>
          {/* How to:
            1. Long content
            2. Custom elements in content
            4. Custom tooltip style
          */}
          <Tooltip placement="right" content="Hello there, I'm tooltip content."><Button>Will Trigger Tooltip</Button></Tooltip>
        </Section>
        <Section>
          <Heading size="large">Inline</Heading>
          <Paragraph>A <Code>Tooltip</Code> could be used with inline elements such as this <Tooltip content="Not sure why would you do that, but surely you can."><Link iconLeft={<InfoCircle />} href="https://app.datacamp.com/learn">link</Link></Tooltip> to DataCamp app.</Paragraph>
        </Section>
      </ContentContainer>
    </Layout>;
}

export default TooltipPage;
