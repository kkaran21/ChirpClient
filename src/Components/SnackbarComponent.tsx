import { Alert } from '@mui/material';
import Snackbar from '@mui/material/Snackbar';

interface Props {
  open: boolean; 
  onClose: () => void;
  severity: 'success' | 'error' | 'warning' | 'info'; 
  message: string; 
}

function SnackbarComponent({ open, onClose, severity, message }: Props) {
  return (
    <Snackbar
      anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      open={open}
      autoHideDuration={6000}
      onClose={onClose}
    >
      <Alert severity={severity} variant="filled" sx={{ width: '100%' }}>
        {message}
      </Alert>
    </Snackbar>
  );
}

export default SnackbarComponent;
