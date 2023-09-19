import axios from 'axios';
import Cookies from 'js-cookie';
import React, { useEffect } from 'react';
import AccessibleTable from '../LibraryList/showEnrolment';
import { useState } from 'react';


const Library=(props)=>{

    const {setSelectedLibraryId}=props;

  const [userLibraryList, setUserLibraryList] = useState([]);


    useEffect(()=>{
    const handleLibrary = async () => {
        const CIT = Cookies.get("CIT");
        const config = {
          headers: {
            Authorization: CIT,
          },
        };
        try {
          const response = await axios.get(
            `http://localhost:8080/library/users`,
            config
          );
          console.log({ response });
          setUserLibraryList(response.data);
        } catch (error) {
          console.error("Error fetching Libraries:", error);
        } 
        // finally {
        //   handleMenuClose();
        // }
      };
      handleLibrary();
    },[])
    return (
        <div>
             <h1>List of Library</h1>
           {userLibraryList.length>0&&<AccessibleTable row={userLibraryList} libraryList={true} setSelectedLibraryId={setSelectedLibraryId}/>}
        </div>
    )
}
export default Library;