import React from 'react';
import { Box, Flex } from 'theme-ui';

import { Card } from './card';

export function BasicCard() {
  return (
    <Box sx={{ mx: [2, 3, 3], my: [2, 3, 3] }}>
      <Flex>
        <Card sx={{ width: '100%' }}>This is a card Example!</Card>
      </Flex>
    </Box>
  );
}
