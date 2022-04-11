import React, {useEffect, useState } from "react";
import NameSearchBox from "./components/SearchBar/NameSearchBox";
import DisplayAllStudents from "./components/Student/DisplayAllStudents";
import axios from "axios";
import TagSearchBox from "./components/SearchBar/TagSearchBox";

function App() {
    const url = 'https://api.hatchways.io/assessment/students';
    const [nameSearchText, setNameSearchText] = useState('');
    const [tagSearchText, setTagSearchText] = useState('');
    const [students, setStudent] = useState([]);
    const [filteredStudents, setFilteredStudents] = useState([]);

    useEffect(() => {
        getAllStudents();
    }, []);

    useEffect(() => {
        filterStudents();
    }, [nameSearchText]);


    const getAllStudents = async () => {
        try {
            const response = await axios.get(url);
            setStudent(response.data.students);
            setFilteredStudents(response.data.students)
        } catch (error) {
            console.error(error);
        }
    };

    const filterStudents = () => {
        let filteredList = students.filter(student => {
            let name = student.firstName + " " + student.lastName;
            let nameReverse = student.lastName+ " " + student.firstName;
            return name.toLowerCase().includes(nameSearchText) || nameReverse.toLowerCase().includes(nameSearchText)
        });
        setFilteredStudents(filteredList);
    }

    const onChangeSearchBox = (e) => {

        var searchText = e.target.value.toLowerCase();
        setNameSearchText(searchText);
    }

    const onChangeTagSearchBox = (e) => {

        var tagSearchText = e.target.value.toLowerCase();
        setTagSearchText(tagSearchText);
    }

    return (
        <div>
            <NameSearchBox onChange={onChangeSearchBox} />
            <TagSearchBox onChange={onChangeTagSearchBox} />
            <DisplayAllStudents students={filteredStudents} tagSearchText={tagSearchText}/>
        </div>
    )  
  }
  export default App;