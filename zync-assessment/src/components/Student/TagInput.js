import React, { useState } from 'react';
import { Input, Grid, Typography, Button } from '@mui/material';
import { grey } from "@mui/material/colors";

function TagInput(props) {

    const [tagInputValue, setTagInputValue] = useState('');

     //tag takes in empty and duplicate tags
     const onTagInputKeyPress = (e) => {
         if (e.key === 'Enter') {
            props.onTagSet(tagInputValue);
            setTagInputValue("");
        }
     }

    const onTagInputChange = (e) => {
        setTagInputValue(e.target.value);
    }

    let tagList;
    if (props.tags.length > 0) {
        tagList = props.tags.map((tag, index) =>
            
        <Grid item xs="auto" key={index}>
                <Button sx={{
                textTransform:'none',
                color: grey[500]
                }} variant="contained" disabled key={index}>
                <Typography sx={{color:grey[900], pb: 0}}>{tag}</Typography>
            </Button>
        </Grid>
           
        )
    }
    return (
        <>
            <Grid container spacing={0.5}>
                {tagList}
            </Grid>
            <Input onKeyPress={onTagInputKeyPress} placeholder="Add a tag" value={tagInputValue}  onChange={onTagInputChange} ></Input>
        </>
    )
}
export default TagInput;