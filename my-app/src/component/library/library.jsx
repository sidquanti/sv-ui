import axios from 'axios';
import Cookies from 'js-cookie';
import React, { useEffect } from 'react';
import AccessibleTable from '../LibraryList/showEnrolment';
import { useState } from 'react';
import { Url } from '../../constant';


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
            `${Url}/library/users`,
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
        {userLibraryList.length > 0 ? (
          <h1>My Library</h1>
        ) : (
          <h1>You haven't added a library yet, would you like to add one?</h1>
        )}
        {userLibraryList.length > 0 && (
          <AccessibleTable
            row={userLibraryList}
            libraryList={true}
            setSelectedLibraryId={setSelectedLibraryId}
          />
        )}
        <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '20px', marginRight: '30px' }}>
        <button>Add New Library</button>
        </div>
      </div>
    );
    
}
export default Library;