import React from 'react';
import { css } from '@emotion/react';

import { tokens } from '@datacamp/waffles/tokens';

const sectionStyle = css`
  margin-top: ${tokens.spacing.medium};
`;

type SectionProps = {
  children: React.ReactNode;
}

function Section({ children }: SectionProps) {
  return <section css={sectionStyle}>{children}</section>
}

export default Section;
