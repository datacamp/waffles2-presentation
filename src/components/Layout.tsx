import React from 'react';
import { Link } from 'react-router-dom';
import { css } from '@emotion/react';

import { tokens } from '@datacamp/waffles/tokens';
import { Button } from '@datacamp/waffles/button';

const sectionStyle = css`
  height: 100vh;
  width: 100%;
  background-color: ${tokens.colors.beigeLight};
`

const contentStyle = css`
  height: calc(100vh - 60px);
  width: 100%;
  overflow: hidden;
`

const footerStyle = css`
  width: 100%;
  height: 60px;
  padding: 0 ${tokens.spacing.medium};
  border-top: ${tokens.borderWidth.thin} solid ${tokens.colors.greyMedium};
  background-color: ${tokens.colors.white};
  display: flex;
  align-items: center;
`;

type LayoutProps = {
  children: React.ReactNode;
  prevUrl?: string;
  nextUrl?: string;
}

function Layout({ children, prevUrl, nextUrl }: LayoutProps) {
  return <section css={sectionStyle}>
    <div css={contentStyle}>{children}</div>
    <footer css={css`
      ${footerStyle}
      ${prevUrl && nextUrl && css`justify-content: space-between;`}
      ${!prevUrl && nextUrl && css`justify-content: flex-end;`}
    `}>
      {prevUrl && <Button as={Link} to={prevUrl}>Prev</Button>}
      {nextUrl && <Button as={Link} to={nextUrl}>Next</Button>}
    </footer>
  </section>
}

export default Layout;
