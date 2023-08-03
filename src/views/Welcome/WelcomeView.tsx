import { Typography } from '@mui/material';
import { AppLink, AppView } from '../../components';

/**
 * Renders "Welcome" view
 * url: /
 * @page Welcome
 */
const WelcomeView = () => {
  return (
    <AppView>
      <Typography variant="h4">Heading Content h4</Typography>
    </AppView>
  );
};

export default WelcomeView;
