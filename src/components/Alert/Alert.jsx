import * as React from 'react';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Stack from '@mui/material/Stack';
import './Alert.scss';

export default function DescriptionAlerts() {
  return (
    <div className='alert'>
        <Stack className='alert' sx={{ width: '100%' }} spacing={2}>
            <Alert severity="success">
                <AlertTitle>Success!</AlertTitle>
            </Alert>
        </Stack>
    </div>
  );
}