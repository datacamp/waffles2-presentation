// import React, { useState } from 'react';
import { css } from '@emotion/react';

import { tokens } from '@datacamp/waffles/tokens';
import { Heading } from '@datacamp/waffles/heading';
import { Paragraph } from '@datacamp/waffles/paragraph';
import { Button } from '@datacamp/waffles/button';
import { Code } from '@datacamp/waffles/code';
import { ContentContainer } from '@datacamp/waffles/content-container';
import { Input } from '@datacamp/waffles/input';
import { InputField } from '@datacamp/waffles/input-field';
// import { Radio } from '@datacamp/waffles/radio';

import Layout from '../components/Layout';

const formStyle = css`
  max-width: 400px;
  margin-top: ${tokens.spacing.medium};
  display: flex;
  flex-direction: column;
  gap: ${tokens.spacing.medium};
`;

// function ControlledForm() {
//   const [ value, setValue ] = useState('js');

//   function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
//     setValue(event.target.value);
//   }

//   return <form css={formStyle}>
//     <Radio
//       name="langs"
//       value="js"
//       checked={value === 'js'}
//       onChange={handleChange}
//     >
//         Vanilla
//       </Radio>
//     <Radio
//       name="langs"
//       value="ts"
//       checked={value === 'ts'}
//       onChange={handleChange}
//     >
//       TypeScript
//     </Radio>
//     <Radio
//       name="langs"
//       value="dart"
//       checked={value === 'dart'}
//       onChange={handleChange}
//     >
//       Dart (lol)
//     </Radio>
//   </form>
// }

function FormElementsPage() {
  return <Layout prevUrl="/tooltip" nextUrl="/helpers">
      <ContentContainer noSidebar>
        <Heading size="xxlarge">New Form Elements</Heading>
        <Paragraph>ℹ️ For laying out inputs (or most components for that matter), use <Code>grid</Code> or <Code>flex</Code> with <Code>gap</Code> proprty. Layout elements will make their way to Waffles 2.0 eventually.</Paragraph>
        <Paragraph>ℹ️ It's possible to use form elements in controlled and un-controlled way (although I suggest to go with first approach).</Paragraph>
        <Paragraph> ⚠️ Still havent decided on final API. Either offer <Code>FormField</Code> utility component which will add label and error to plain inputs or have 2 components.</Paragraph>
        <form css={formStyle}>
          {/* How to:
            1. Add placeholder
            2. Make a field required
            3. Pattern matching
            4. Search
            5. Password
            7. Focus input programatically
            8. Add icons
            9. Add enhancer
          */}
          <Input aria-label="Plain input" />
          <InputField label="Name" />
          {/* How to:
            1. Show error
          */}
          <InputField label="Email" type="email" />
          <InputField label="Password" type="password" />
          <Button type="submit">Submit</Button>
        </form>
        {/* <ControlledForm /> */}
      </ContentContainer>
    </Layout>;
}

export default FormElementsPage;
