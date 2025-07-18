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
import {
  Menubar,
  MenubarMenu,
  MenubarTrigger,
  MenubarContent,
  MenubarSeparator,
  MenubarItem,
  MenubarShortcut,
} from '@/components/MenuBar/Menubar';
import { Badge } from '@/components/Badge/Badge';

export type AppProps = {
  children?: React.ReactNode;
};

function App(): React.ReactElement {
  return (
    <Flex className='flex justify-center items-center min-h-screen' direction='col' gap='4'>
      <Grid cols='2' element='main' gap='2'>
        <Box className='bg-blue-500 p-4 rounded'>Item 1</Box>
        <Box className='bg-green-500 p-4 rounded'>Item 2</Box>
        <Box className='bg-red-500 p-4 rounded'>Item 3</Box>
        <Box className='bg-yellow-500 p-4 rounded'>Item 4</Box>
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
      <Select>
        <SelectTrigger className='w-[180px]'>
          <SelectValue placeholder='Select a fruit' />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value='apple'>Apple</SelectItem>
          <SelectItem value='banana'>Banana</SelectItem>
        </SelectContent>
      </Select>
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger>File</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>
              New Tab <MenubarShortcut>⌘T</MenubarShortcut>
            </MenubarItem>
            <MenubarItem>New Window</MenubarItem>
            <MenubarSeparator />
            <MenubarItem>Share</MenubarItem>
            <MenubarSeparator />
            <MenubarItem>Print</MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>

      <Badge variant={'destructive'}>Error</Badge>
    </Flex>
  );
}

export default App;
