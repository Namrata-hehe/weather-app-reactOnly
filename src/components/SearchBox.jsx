import {TextField, Button, Stack} from '@mui/material';

function SearchBox({city, setCity, onSearch}) {
    return (
        <Stack direction="row" spacing={2} justifyContent="center">
            <TextField
            label="Enter City"
            variant='outlined'
            value={city}
            onChange={(e) => setCity(e.target.value)}
            sx={{flex: 1}}
            />

            <Button variant='contained' onClick={onSearch}>
                Search
            </Button>
        </Stack>
            
       
    );
}

export default SearchBox;