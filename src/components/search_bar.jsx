import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import CircularProgress from '@mui/material/CircularProgress';

function sleep(duration) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, duration);
  });
}

export default function Asynchronous() {
  const [open, setOpen] = React.useState(false);
  const [options, setOptions] = React.useState([]);
  const loading = open && options.length === 0;

  React.useEffect(() => {
    let active = true;

    if (!loading) {
      return undefined;
    }

    (async () => {
      await sleep(1e3); // For demo purposes.

      if (active) {
        setOptions([...comunas]);
      }
    })();

    return () => {
      active = false;
    };
  }, [loading]);

  React.useEffect(() => {
    if (!open) {
      setOptions([]);
    }
  }, [open]);

  return (
    <Autocomplete
      id="asynchronous-demo"
      sx={{ width: 310, backgroundColor: 'white'}}
      open={open}
      onOpen={() => {
        setOpen(true);
      }}
      onClose={() => {
        setOpen(false);
      }}
      isOptionEqualToValue={(option, value) => option.title === value.title}
      getOptionLabel={(option) => option.title}
      options={options}
      loading={loading}
      getOptionDisabled={(option) =>
        option === options[0] || option === options[2] || option === options[3] || option === options[7] || option === options[8]
      }
      renderInput={(params) => (
        <TextField
          {...params}
          label="Buscar ..."
          InputProps={{
            ...params.InputProps,
            endAdornment: (
              <React.Fragment>
                {loading ? <CircularProgress color="inherit" size={20} /> : null}
                {params.InputProps.endAdornment}
              </React.Fragment>
            ),
          }}
        />
      )}
    />                   
  );
}

const comunas = [
  { title: 'Cerrillos', region: 'Santiago' },
  { title: 'Conchalí', region: 'Santiago' },
  { title: 'Estación Central', region: 'Santiago' },
  { title: 'Macul', region: 'Santiago' },
  { title: 'Maipú', region: 'Santiago' },
  { title: "Ñuñoa", region: 'Santiago' },
  { title: 'Pudahuel', region: 'Santiago' },
  { title: 'Quilicura', region: 'Santiago' },
  { title: 'Quinta Normal', region: 'Santiago' },
  { title: 'Recoleta', region: 'Santiago' },
  { title: 'Renca', region: 'Santiago' },
  { title: 'Santiago Centro', region: 'Santiago' }
];