import { css } from '@emotion/react';

import { tokens } from '@datacamp/waffles/tokens';
import {
  mediaQuery,
  readableHexColor
} from '@datacamp/waffles/helpers';
import { Heading } from '@datacamp/waffles/heading';
import { Text } from '@datacamp/waffles/text';
import { ContentContainer } from '@datacamp/waffles/content-container';

import Layout from '../components/Layout';
import Section from '../components/Section';
import React from 'react';

const responsiveElementStyle = css`
  background-color: ${tokens.colors.blue};

  ${mediaQuery.small} {
    background-color: ${tokens.colors.pink};
  }

  ${mediaQuery.medium} {
    background-color: ${tokens.colors.yellow};
  }

  padding: ${tokens.spacing.medium};
  border-radius: ${tokens.borderRadius.medium};
  transition: background-color 300ms ease-out;
`;

const badgeStyle = css`
  display: inline;
  padding: ${tokens.spacing.small};
  border-radius: ${tokens.borderRadius.medium};
`;

const labelStyle = css`
  color: inherit;
  font-style: uppercase;
`;

type BadgeProps = {
  backgroundColor: string;
  children: React.ReactNode;
}

function Badge({ backgroundColor, children}: BadgeProps) {
  const textColor = readableHexColor(backgroundColor);

  return <div css={css`
      ${badgeStyle}
      background-color: ${backgroundColor};
      color: ${textColor};
    `}><Text css={labelStyle}>{children}</Text></div>
}

function HelpersPage() {
  return <Layout prevUrl="/form-elements">
      <ContentContainer noSidebar>
        <Heading size="xxlarge">Waffles 2.0 Exposes Helpers Used Internally</Heading>
        <Section>
          <Heading size="large">mediaQuery</Heading>
          <div css={responsiveElementStyle}>
            <Text as="p">Background color will change depending on the viewport size.</Text>
          </div>
        </Section>
        <Section>
          <Heading size="large">readableHexColor</Heading>
          <Badge backgroundColor={tokens.colors.purple}>Badge Label</Badge>
        </Section>
      </ContentContainer>
    </Layout>;
}

export default HelpersPage;
