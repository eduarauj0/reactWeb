import * as React from 'react';
import { Theme, useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { useState } from 'react';
import Button from '@mui/material/Button';


function MultipleSelect() {
	
	const [inputs, setInputs] = useState({});
	const ITEM_HEIGHT = 48;
	const ITEM_PADDING_TOP = 8;
	const MenuProps = {
	  PaperProps: {
		style: {
		  maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
		  width: 250,
		},
	  },
	};

	const albums = [
    {
      id: 0,
      title: 'Album One',
      artist: 'Alex'
    },
    {
      id: 1,
      title: 'Album Two',
      artist: 'Percy'
    },
    {
      id: 2,
      title: 'Album Three',
      artist: 'Kevin'
    },
    {
      id: 3,
      title: 'Album Four',
      artist: 'John'
    },
    {
      id: 4,
      title: 'Album Five 2',
      artist: 'Stacy'
    }];

  const theme = useTheme();
  
  const handleChange = (event: SelectChangeEvent) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  };
  
  const mostraTudo = (event) => {
    event.preventDefault();
    alert(JSON.stringify(inputs));
  }

  return (
    <div>
      <FormControl sx={{ m: 1, width: 300 }} >
       <Select
          labelId="demo-multiple-name-label"
          id="demo-multiple-name"
		  value={inputs.selecionado || ""} 
          onChange={handleChange}
        >
          {albums.map((album) => (
            <MenuItem
              key={album.id}
              value={album.id}
            >
              {album.title}
            </MenuItem>
          ))}
        </Select>
		<Button onClick={mostraTudo} variant="contained" >
			Delete
		</Button>
		
		 </FormControl>
    </div>
  );
}

export default MultipleSelect;