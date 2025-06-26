'use client';
import './App.css';
import { Box, ExternalLink, Flex, Grid } from '@/components';

export type AppProps = {
  children?: React.ReactNode;
};

function App(): React.ReactElement {
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
