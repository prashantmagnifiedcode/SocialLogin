import React,{useState} from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TablePagination from '@mui/material/TablePagination';
import DeviceThermostatIcon from '@mui/icons-material/DeviceThermostat';

const MyTable=({weatherData}) =>{
 console.log("e",weatherData)
  const pages = [5,10 ]
  const [page, setPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(pages[page])
  const [order, setOrder] = useState()
  const [orderBy, setOrderBy] = useState()
  const handleChangePage = (event, newPage) => {
    
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    console.log("rowperpage",page)
    setRowsPerPage(parseInt(event.target.value, 10))
    // setPage(0);
  };
  function stableSort(array, comparator) {
    const stabilizedThis = array.map((el, index) => [el, index]);
    stabilizedThis.sort((a, b) => {
        const order = comparator(a[0], b[0]);
        if (order !== 0) return order;
        return a[1] - b[1];
    });
    return stabilizedThis.map((el) => el[0]);
}

function getComparator(order, orderBy) {
    return order === 'desc'
        ? (a, b) => descendingComparator(a, b, orderBy)
        : (a, b) => -descendingComparator(a, b, orderBy);
}

function descendingComparator(a, b, orderBy) {
    if (b[orderBy] < a[orderBy]) {
        return -1;
    }
    if (b[orderBy] > a[orderBy]) {
        return 1;
    }
    return 0;
}
  const recordsAfterPagingAndSorting = () => {
    return stableSort(weatherData, getComparator(order, orderBy))
        .slice(page * rowsPerPage, (page + 1) * rowsPerPage)
}
const open=(url)=>{
  window.location.href=url;
}
  return (
    <>
    <div className='overflow-x-scroll  '>
       <TableContainer component={Paper}  >
      <Table sx={{ minWidth: 650 }} size="small" aria-label="simple table" className="w-full ">
        <TableHead>
          <TableRow  className="font-bold  bg-slate-400" >
          
            <TableCell  style={{fontSize:"12px",fontWeight:"520",color:"white",letterSpacing:"2px"}}> Author </TableCell>
            <TableCell  style={{fontSize:"12px",fontWeight:"520",color:"white",letterSpacing:"2px"}}> Title </TableCell>
            <TableCell align="center" style={{fontSize:"12px",fontWeight:"520",color:"white",letterSpacing:"2px"}} >Action</TableCell>
            {/* <TableCell align="center">Main</TableCell> */}
          </TableRow>
        </TableHead>
        <TableBody >
{
  recordsAfterPagingAndSorting().map((e,idx)=>{
    return(
      <>
      
        <TableRow  className="font-bold  " key={idx}>
          
          <TableCell  >{e.author} </TableCell>
          <TableCell  >{e.title} </TableCell>
          <TableCell  >
          <a type="button" class="py-2 px-3  text-xs font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
           href={e.url}
          >Read More</a>
           </TableCell>
          
          </TableRow>
      </>
    )
  })
}
         </TableBody>
         </Table>
         </TableContainer>
      <TablePagination
         component="div"
         
         className="bg-slate-200 overflow-x-scroll"
         page={page}
         rowsPerPage={rowsPerPage}
         rowsPerPageOptions={pages}
        count={weatherData.length}
        onPageChange={handleChangePage}
        // onChangeRowsPerPage={handleChangeRowsPerPage}
        onRowsPerPageChange={handleChangeRowsPerPage}

        
      />
         </div>
    </>
  );
}

export default MyTable







