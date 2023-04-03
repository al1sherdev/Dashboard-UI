import * as React from 'react';
import Switch from '@mui/joy/Switch';
import './style/profile.scss';

export default function SwitchControlled() {
  const [checked, setChecked] = React.useState(false);
  return (
    <Switch
      className='switch'
      checked={checked}
      onChange={(event) => setChecked(event.target.checked)}
    />
  );
}