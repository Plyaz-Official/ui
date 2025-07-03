import { Box } from '@/components/Box/Box';
import { SignupForm } from '@/components/Form/SignupForm';
import { Heading } from '@/components/Heading/Heading';
import { Layout } from '@/components/Layout/Layout';
import { Paragraph } from '@/components/Paragraph/Paragraph';

type FormCompositionProps = {
  children?: React.ReactNode;
  heading?: string;
  description?: string;
};
export const FormComposition = ({ children, heading, description }: FormCompositionProps) => (
  <Layout
    layout='flex'
    className={`
    flex-col
    sm:w-full
  `}
  >
    <Box
      className={`
      w-full p-4
      lg:w-1/2
    `}
    >
      {children ?? <SignupForm />}
    </Box>
    <Box
      className={`
      w-full p-4
      lg:w-1/2
    `}
    >
      <Heading element='h2' size='xl' className='mb-4 text-center font-bold'>
        {heading ?? 'Sign Up'}
      </Heading>
      <Paragraph size='lg' className='text-center'>
        {description ?? 'Join and get started!'}
      </Paragraph>
    </Box>
  </Layout>
);
