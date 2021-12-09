import { Heading } from '@datacamp/waffles/heading';
import { Paragraph } from '@datacamp/waffles/paragraph';
import { Code } from '@datacamp/waffles/code';
import { Link } from '@datacamp/waffles/link';
import { ContentContainer } from '@datacamp/waffles/content-container';

import Layout from '../components/Layout';
import List from '../components/List';
import Section from '../components/Section';

function WhatToDoPage() {
  return <Layout prevUrl="/" nextUrl="/how-to-start">
      <ContentContainer noSidebar>
        <Heading size="xxlarge">Waffles 2.0 Is Here. What Now?</Heading>
        <Section>
          <Heading size="large">⚠️ What components are still missing?</Heading>
          <List>
            <List.Item>Major ones: <strong>Modals</strong>, <strong>Toast</strong></List.Item>
            <List.Item>Minor ones: <strong>Card</strong>, <strong>Badge</strong>, <strong>ButtonGroup</strong>, <strong>Assets</strong>, <strong>List</strong></List.Item>
          </List>
        </Section>
        <Section>
          <Heading size="large">⏰ What is long-term plan? When they are expected to land in Waffles 2.0?</Heading>
          <Paragraph>There is <Link href="https://waffles-next.datacamp.com/overview/roadmap/">Roadmap</Link> available in Waffles 2.0 docs (<strong>waffles-next.datacamp.com</strong>). All missing components should be implemented by the end of <strong>Q2 2022</strong>.</Paragraph>
          <Paragraph>After it will be feature-complete with Waffles 1.0 I will be working on new components and improving documentation (probably around 50/50 split). New componets such as <Code>Dropdown</Code> will be implemented only in Waffles 2.0.</Paragraph>
        </Section>
        <Section>
          <Heading size="large">🚀 Should I move to Waffles 2.0 now?</Heading>
          <Paragraph>If your app is not using that many not-yet-implemented components from Waffles 1.0, you should definitely migrate. It will help me a lot. I <strong>need your feedback</strong>, especially in cases like <em>form elements</em> where final API is still in flux.</Paragraph>
          <Paragraph>When using both versions of Waffles take advanteg of <Code>React.lazy</Code> for heavier components (like <Code>Modals</Code>).</Paragraph>
          <Paragraph>If the app is a part of <strong>logged-out experience (marketing)</strong> you should wait. Will devote major part of <strong>Q1 2022</strong> to make Waffles 2.0 work for marketing.</Paragraph>
          <Paragraph>For <strong>mobile app</strong> you should wait.</Paragraph>
          <Paragraph>I organizd styles for each component in a way it could be easily exposed. <em>Possibly</em> could be useful for <strong>enterprise (vue)</strong>.</Paragraph>
        </Section>
      </ContentContainer>
    </Layout>;
}

export default WhatToDoPage;
