import clsx from 'clsx';
import type { ReactNode } from 'react';

import { Box } from '@/components/Box/Box';
import { Flex } from '@/components/Flex/Flex';
import { Grid } from '@/components/Grid/Grid';

export const Layout = ({
  layout,
  children,
  className = '',
}: {
  layout: 'grid' | 'flex';
  children: ReactNode;
  className?: string;
}) => {
  return (
    <Box data-testid='layout'>
      {layout === 'grid' ? (
        <Grid cols='grid-cols-3' gap='gap-4' className={clsx('p-4', className)}>
          {children}
        </Grid>
      ) : (
        <Flex className={clsx('p-4', className)} justify='between' align='center'>
          {children}
        </Flex>
      )}
    </Box>
  );
};
