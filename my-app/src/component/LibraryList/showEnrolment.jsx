import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export default function AccessibleTable(props) {
  const {row,libraryList,setSelectedLibraryId}=props;
  console.log(libraryList)

  const formatDate = (dateArray) => {
    if (!dateArray || dateArray.length !== 6) {
      // Ensure the input array has the expected length
      return null;
    }
  
    const [year, month, day] = dateArray;
    const formattedDate = `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;
  
    return formattedDate;
  };

  return (
    <TableContainer component={Paper} 
    style={{
      margin: '0 auto', // Center the container horizontally
      maxWidth: 'calc(100% - 60px)', // Leave 20px margin from both sides
    }}>
      <Table sx={{ minWidth: 650 }} aria-label="caption table">
        <TableHead>
          <TableRow>
          {!libraryList?
          <>
            <TableCell>Name</TableCell>
            <TableCell align="right">Mobile</TableCell>
            <TableCell align="right">Email</TableCell>
            {/* {/* <TableCell align="right">Fat&nbsp;(g)</TableCell> */}
            <TableCell align="right">Start Date</TableCell>
            <TableCell align="right">End Date</TableCell>
            <TableCell align="right">Payment</TableCell>
            <TableCell align="right">Action</TableCell>
            </>:
            <>
            <TableCell>Library</TableCell>
            <TableCell align="right">Address</TableCell>
            <TableCell align="right">Opening</TableCell>
            <TableCell align="right">Closing</TableCell>
            <TableCell align="right">Mobile</TableCell>
            <TableCell align="right">Email</TableCell>
            </>}
          </TableRow>
        </TableHead>
        <TableBody>
          {row.map((row) => {
          return ( !libraryList?
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.mobile}</TableCell>
              <TableCell align="right">{row.email}</TableCell>
              <TableCell align="right">{formatDate(row.startDate)}</TableCell>
               <TableCell align="right">{formatDate(row.endDate)}</TableCell>
               <TableCell align="right">{row.status}</TableCell>
               <TableCell align="right"><button>Paid</button><button>Print</button></TableCell>
            </TableRow>:
            <TableRow key={row.id} onClick={()=>setSelectedLibraryId(row.id)} component="a" href={`/library-enrollment/?id=${row.id}`}>
            <TableCell component="th" scope="row">
              {row.name}
            </TableCell>
            <TableCell align="right">{row.address}</TableCell>
            <TableCell align="right">{row.openingTime}</TableCell>
            <TableCell align="right">{row.closingTime}</TableCell>
            <TableCell align="right">{row.mobile}</TableCell>
            <TableCell align="right">{row.email}</TableCell>
          </TableRow>)
})}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
