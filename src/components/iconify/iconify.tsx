import { forwardRef } from 'react';
import { Icon } from '@iconify/react';
import { StackProps, Stack } from '@mui/material';
// =======================================================================

import { IconifyProps } from './types';

interface IProps extends StackProps { icon: IconifyProps; }

export const Iconify = forwardRef<SVGElement, IProps>((props, ref) => {
  const { icon, width = 20, sx, ...other } = props
  return (
    <Stack
      ref={ref}
      component={Icon}
      className="component-iconify"
      icon={icon}
      sx={{ width, height: width, ...sx }}
      {...other}
    />
  )
});

export default Iconify;
