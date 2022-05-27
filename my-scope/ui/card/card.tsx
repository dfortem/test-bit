import React, { ReactNode } from 'react';
import { Box, BoxProps, ThemeUICSSObject } from 'theme-ui';

export interface CardProps extends BoxProps {
  /**
   * a node to be rendered in the special component.
   */
  children?: ReactNode;
  /**
   * Styling props from theme-ui.
   */
  sx?: ThemeUICSSObject;
};

export function Card({ children, sx, ...props }: CardProps) {
  return (
    <Box sx={{
      bg: 'backgroundAlt2',
      p: 2,
      borderRadius: 'medium',
      wordBreak: 'break-all',
      ...sx
    }} {...props}>
      {children}
    </Box>
  );
}
