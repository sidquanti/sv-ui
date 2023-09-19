import React, { useState } from 'react';
import Button from '@mui/material/Button';
import { TextField } from '@mui/material';
import axios from 'axios';
import AccessibleTable from '../LibraryList/showEnrolment';
import Cookies from 'js-cookie';

function MoreServices() {
    const [searchQuery, setSearchQuery] = useState('8574120014');
    const [libraryList,setLibraryList]=useState([])
    const [enrolmentList,setEnrolmentList]=useState([])

    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
    };

    const handleSearchSubmit = async() => {
            try {
                const response = await axios.get(`http://localhost:8080/library/mobile/${searchQuery}`);
                console.log({response})
                setLibraryList(response.data);
            } catch (error) {
                console.error('Error fetching cities:', error);
            }
        }
const handleEnrolment= async(id)=>{
    const CIT=Cookies.get('CIT')
    const config = {
        headers:{
            Authorization: CIT,
        }
      };
    try {
        const response = await axios.get(`http://localhost:8080/enrollment?libraryId=${id}`,config);
        console.log({response})
        setEnrolmentList(response.data);
    } catch (error) {
        console.error('Error fetching cities:', error);
    }

}
    return (
        <div className="moreServices-container">
        <TextField id="search" label="Search" value="8574120014" variant="outlined" onChange={(e)=>handleSearchChange(e)} fullWidth>Hello world</TextField>;
        <Button variant="outlined" onClick={handleSearchSubmit} >Search</Button>
        {libraryList.length>0&&libraryList.map((ele)=>(
            <div key={ele.id} onClick={()=>handleEnrolment(ele.id)}>
                <span>{ele.name}</span>
                <span>{ele.address}</span>
            </div>
        ))}
       {enrolmentList.length>0&&<AccessibleTable row={enrolmentList}/>}
        </div>
    );
}

export default MoreServices;
