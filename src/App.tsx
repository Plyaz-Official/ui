'use client';
import { Box, Button, ExternalLink, Flex, Grid } from '@/components';
import './App.css';
import './global.css';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/Select/Select';

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
      <Select>
        <SelectTrigger className='w-[180px]'>
          <SelectValue placeholder='Theme' />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value='light'>Light</SelectItem>
          <SelectItem value='dark'>Dark</SelectItem>
          <SelectItem value='system'>System</SelectItem>
        </SelectContent>
      </Select>
      <Button className='px-4 py-3'>Text</Button>
      <ExternalLink href='https:www.google.com'> This is the link</ExternalLink>
      <Select open={true}>
        <SelectTrigger className='w-[180px]'>
          <SelectValue placeholder='Select a fruit' />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value='apple'>Apple</SelectItem>
          <SelectItem value='banana'>Banana</SelectItem>
        </SelectContent>
      </Select>
    </Flex>
  );
}

export default App;
