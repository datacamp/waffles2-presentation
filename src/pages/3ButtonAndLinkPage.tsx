// import { css } from '@emotion/react';

// import { AddCircle } from '@datacamp/waffles/icon';
import { Heading } from '@datacamp/waffles/heading';
import { Paragraph } from '@datacamp/waffles/paragraph';
import { Code } from '@datacamp/waffles/code';
import { Button } from '@datacamp/waffles/button';
import { Link } from '@datacamp/waffles/link';
import { ContentContainer } from '@datacamp/waffles/content-container';

import Layout from '../components/Layout';
import Section from '../components/Section';

function ButtonAndLinkPage() {
  return <Layout prevUrl="/how-to-start" nextUrl="/tooltip">
      <ContentContainer noSidebar>
        <Heading size="xxlarge">New Button And Link Are Quite Flexible</Heading>
        <Section>
          <Heading size="large">Button</Heading>
          {/* How to:
            1. Icons
            2. Custom styles
            4. As a link
          */}
          <Button>Hello</Button>
        </Section>
        <Section>
          <Heading size="large">Link</Heading>
          {/* How to:
            1. Icons
            2. External with screen reader announcement
            3. Custom style
            4. It inherits text size
          */}
          <Paragraph>A <Code>Link</Code> component in general should be used for <Link href="https://app.datacamp.com/learn">links</Link> which are part of the longer sentence. Use <Code>Button</Code> for standalone navigation actions:</Paragraph>
          <Button as="a" variant="plain" size="small" href="https://app.datacamp.com/learn">Start Learning</Button>
        </Section>
      </ContentContainer>
    </Layout>;
}

export default ButtonAndLinkPage;
