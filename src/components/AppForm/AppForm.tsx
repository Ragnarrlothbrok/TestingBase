import { ReactNode, FormHTMLAttributes, FunctionComponent } from 'react';
import { Box } from '@mui/material';

interface Props extends FormHTMLAttributes<HTMLFormElement> {
  children: ReactNode;
}

/**
 * Application styled Form container
 * @component AppForm
 */
const AppForm: FunctionComponent<Props> = ({ children, ...resOfProps }) => {
  return (
    <form {...resOfProps}>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Box sx={{ maxWidth: '40rem', width: '100%' }}>
          {children}
        </Box>
      </Box>
    </form>
  );
};

export default AppForm;
