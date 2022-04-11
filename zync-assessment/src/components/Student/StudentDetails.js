import React, { useState } from 'react';
import { Box, Typography, Avatar, Card, CardContent} from '@mui/material';
import GradeDetailButton from './GradeDetailButton';
import TagInput from './TagInput';

function StudentDetails(props) {
    const student = props.student;
    const [selected, setSelected] = useState(false);
    const [tags, setTags] = useState([]);

    function averageStudentGrades(...grades) { 
        const initalValue = 0;
        
        const length = grades.length;
        
        const reducer = (accumulator, num) => {

            return parseFloat(accumulator) +  parseFloat(num);
        }
        
        const total = grades.reduce(reducer, initalValue);
        
        const studentAverage = "Average: "+(total / length).toFixed(3)+"%";
                
        return studentAverage;
    }
    

    const onClick = () => {
        setSelected(!selected);
    }

    const onTagSet = (tag) => {
        setTags([...tags, tag]);
    }

    let gradeList;
    if (selected) {
        gradeList = student.grades.map((grade, index) =>
            <Box key={index} style={{ marginBottom:0, color:'rgba(0, 0, 0, 0.54)'}}>Test{' '}{index + 1}:
                    <Typography variant="subtitle1" display="inline" style={{ marginLeft: '1.75rem'}}>{grade+"%"}
                    </Typography>
                </Box>
           
            )
    }

    return (
        <>
            {
                props.tagSearchText === "" || tags.includes(props.tagSearchText) ?
                    <Card key={student.id} sx={{ display: 'flex', pb: 0 }} >
                        <Box sx={{ flexDirection: 'column', order: 2, p: 1, m: 1, width: '100%' }}>
                            <Typography variant="h3">
                                <Box sx={{ textTransform: 'uppercase' }}> {student.firstName} {student.lastName}</Box>
                            </Typography>
                            <CardContent sx={{ ml: 3, pt: 0.5, pb: 0.5, '&:last-child': { pb: 0.5 } }}>
                                <Typography variant="subtitle1" color="text.secondary">Email: {student.email}</Typography>
                                <Typography variant="subtitle1" color="text.secondary">Company: {student.company}</Typography>
                                <Typography variant="subtitle1" color="text.secondary">Skill: {student.skill}</Typography>
                                <Typography variant="subtitle1" color="text.secondary">{averageStudentGrades(...student.grades)}</Typography>
                                {gradeList}
                                <TagInput onTagSet={onTagSet} tags={tags} />
                    
                            </CardContent>
                        </Box>
                        <Box sx={{ alignItems: 'center', order: 1, p: 1.5, m: 1.5, flexShrink: 1 }} >
                            <Avatar
                                sx={{ width: 150, height: 150 }}
                                style={{ border: '0.1px solid gray' }}
                                alt="robot avatar" src={student.pic}
                            />
                        </Box>
                        <GradeDetailButton selected={selected} onClick={onClick} />
                    </Card> : null
            }
        </>
    );
}

export default StudentDetails;