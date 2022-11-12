import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';

export default function suburb() {
  return (
    <Stack spacing={2} sx={{ width: 300 }}>
      <Autocomplete
        id="suburb-search"
        freeSolo
        options={suburbSearch.map((option) => option.title)}
        renderInput={(params) => <TextField {...params} label="Enter your suburb..." />}
      />
    </Stack>
  );
}

const suburbSearch = [
    { title: 'Green Hill' },
    { title: 'Red Hill' },
    { title: 'Yellow Hill' },
    { title: 'Pink Hill' },
    { title: 'Blue Hill' },
    { title: "Orange Hill" },
    { title: 'Teal Hill' },
];