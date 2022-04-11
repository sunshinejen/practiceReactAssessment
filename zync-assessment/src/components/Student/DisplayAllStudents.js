import React from "react";
import StudentDetails from "./StudentDetails";

function DisplayAllStudents(props) {
   

    return (
        <>
            {props.students.map((student, index) => (
                <StudentDetails key={index} student={student} tagSearchText={ props.tagSearchText}/>
            ))}
        </>
    )


}

export default DisplayAllStudents;
    
