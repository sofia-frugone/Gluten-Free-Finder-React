import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';

export default function searchBar() {
  return (
    <Stack spacing={2} sx={{ width: 300 }}>
      <Autocomplete
        id="restaurant-search"
        freeSolo
        options={restaurantSearch.map((option) => option.title)}
        renderInput={(params) => <TextField {...params} label="Start typing to search..." />}
      />
    </Stack>
  );
}

const restaurantSearch = [
    { title: 'Mad Mex' },
    { title: 'Sushi Hub' },
    { title: 'Lusso' },
    { title: 'Cool Kebabs' },
    { title: 'Chatime' },
    { title: "Good Soup" },
    { title: 'Breadtop' },
];