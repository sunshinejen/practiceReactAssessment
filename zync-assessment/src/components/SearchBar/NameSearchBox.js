import React from "react";
import Input from '@mui/material/Input';
import Box from '@mui/material/Box';


function NameSearchBox(props) { 
    return (
        <Box>
            <Input sx={{ display: 'flex', p: 1, m: 1 }} placeholder="Search by name" onChange={props.onChange} />
        </Box>
    )
}
export default NameSearchBox;