import * as React from 'react';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';
import { useHistory } from 'react-router';
import { useState } from 'react';
import { Link } from 'react-router-dom';



export default function FreeSolo() {
  const [text, setText] = useState('')
    const history=useHistory()
    const openCatalog=(text)=>{
history.push( `/Catalog/${text}`) 
    }

    const submit=(e)=> {
        e.preventDefault()
        history.push(`/Catalog/${text}`)
    }
  return (
    <div> 
 <Stack spacing={2} sx={{ width: 300 }}>
      
      <form onSubmit={submit}> 
    <Autocomplete
      freeSolo
      id="free-solo-2-demo"
      disableClearable
      options={articles.map((option) => option.title)}
      onChange={(e,values)=>openCatalog(values)}
     
      renderInput={(params) => (
        <TextField
          {...params}
          label="Search "
          InputProps={{
            ...params.InputProps,
            type: 'search',
          }}
          
          onChange={(e)=>setText(e.target.value)}
        />
      )}
    />
    </form>
  </Stack>
    </div>
  );
}


const articles = [
  { title: 'Robe' },
  { title: 'Jube', },
  { title: 'Pull' },
  { title: 'Pull pour les femme' },
  { title: 'Pull pour les hommes' },
  { title: "Pull pour les Bébé" },
  { title: 'Pull pour les enfant' },
  { title: 'sous vétement '},
  { title: 'sous vétement pour les femmes' },
  { title: 'sous vétement pour les hommes' },
  { title: 'sous vétement pour les enfants'},
  {title: 'sous vétement pour les bébés'},
  { title: 'sac'},
  { title: 'sac pour les femmes' },
  { title: 'sac pour les hommes'},
  { title: "Pantallon"},
  { title: 'Pantallon jean' },
  { title: 'Pantallon pour les femmes'},
  { title: 'Pantallon pour hommes'},
  {title: 'Pantallon pour les bébés' },
  { title: 'Pantallon pour les enfants' },
  { title: 'Accessoire' },
  
];