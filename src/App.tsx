import { Grid } from '@/components/Grid/Grid';
import { Box } from '@/components/Box/Box';
import { Flex } from '@/components/Flex/Flex';
import './App.css';
import { ExternalLink } from '@/components/ExternalLink/ExternalLink';

export type AppProps = {
  children?: React.ReactNode;
};

function App() {
  return (
    <Flex className='flex min-h-screen items-center justify-center' direction='col' gap='gap-4'>
      <Grid cols='grid-cols-2' element='main' gap='gap-2'>
        <Box className='rounded bg-blue-500 p-4'>Item 1</Box>
        <Box className='rounded bg-green-500 p-4'>Item 2</Box>
        <Box className='rounded bg-red-500 p-4'>Item 3</Box>
        <Box className='rounded bg-yellow-500 p-4'>Item 4</Box>
      </Grid>
      <ExternalLink href='https:www.google.com'> This is the link</ExternalLink>
    </Flex>
  );
}

export default App;
