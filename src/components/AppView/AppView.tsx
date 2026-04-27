import { FunctionComponent, PropsWithChildren } from 'react';
import { Stack, StackProps, SxProps, Theme, useMediaQuery, useTheme } from '@mui/material';
import { CONTENT_MAX_WIDTH, CONTENT_MIN_WIDTH } from '../config';

interface Props extends StackProps {
  minWidth?: string | number;
}

/**
 * Renders View container composition with limited width
 * @component AppView
 */
const AppView: FunctionComponent<PropsWithChildren<Props>> = ({ children, minWidth, sx, ...restOfProps }) => {
  const theme = useTheme();
  const onSmallScreens = useMediaQuery(theme.breakpoints.down('sm'));
  const minWidthToRender = onSmallScreens ? '100%' : minWidth ?? CONTENT_MIN_WIDTH;
  const baseSx: SxProps<Theme> = {
    alignSelf: 'center',
    gap: 2,
    maxWidth: CONTENT_MAX_WIDTH,
    minWidth: minWidthToRender,
  };
  const mergedSx: SxProps<Theme> = Array.isArray(sx) ? [baseSx, ...sx] : [baseSx, sx];

  return (
    <Stack sx={mergedSx} {...restOfProps}>
      {children}
    </Stack>
  );
};

export default AppView;
