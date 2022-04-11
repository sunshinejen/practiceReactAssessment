import React from "react";
import { Box, ToggleButton } from '@mui/material';
import { grey } from "@mui/material/colors";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'
function GradeDetailButton(props) {

    const selected = props.selected;

    return (
        <Box  sx={{ flexShrink: 0,  order: 3, p: 1.5, m: 1.5 }} >
            <ToggleButton
                value="check"
                selected={selected}
                onClick={props.onClick}
                sx={{ color: grey[500], fontSize: '2em' }}
            >
                {selected ? <FontAwesomeIcon icon={faMinus} /> : <FontAwesomeIcon icon={faPlus} />} 
            </ToggleButton>
        </Box>  
    )
}

export default GradeDetailButton;