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
      sx={{ width: 400, backgroundColor: 'white'}}
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
  { title: 'Cerrillos', year: 1994 },
  { title: 'Conchali', year: 1972 },
  { title: 'Estacion Central', year: 1974 },
  { title: 'Macul', year: 2008 },
  { title: 'Maipu', year: 1957 },
  { title: "Ñuñoa", year: 1993 },
  { title: 'Pudahuel', year: 1994 },
  { title: 'Quilicura', year: 1994 },
  { title: 'Quinta Normal', year: 1994 },
  { title: 'Recoleta', year: 1994 },
  { title: 'Renca', year: 1994 }
];