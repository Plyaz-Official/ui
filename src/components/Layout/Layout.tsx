import type { ReactNode } from 'react';

import { Box } from '@/components/Box/Box';
import { Flex } from '@/components/Flex/Flex';
import { Grid } from '@/components/Grid/Grid';
import { cn } from '@/lib/utils';

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
        <Grid cols='3' gap='4' className={cn('p-4', className)}>
          {children}
        </Grid>
      ) : (
        <Flex className={cn('p-4', className)} justify='between' align='center'>
          {children}
        </Flex>
      )}
    </Box>
  );
};
