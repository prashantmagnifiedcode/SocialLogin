import React ,{useState} from "react";
import Logins from "./login"
import MyTable from './Component/RecordTable'
import axios from "axios";
import { useContextState } from "./Redux copy/Global/GlobalContext";
import { getAuth, signOut } from "firebase/auth";
import LogoutIcon from '@mui/icons-material/Logout';

const App=()=> {
  // const [weatherData, setWeatherData] = useState([]);
  const{hits,nbPages,query,searchpost}=useContextState()
  const [value,setValue] = useState('')
  const logout =()=>{
    localStorage.clear()
    window.location.reload()
}
return (
    
<div  className="flex flex-col  h-screen justify-center items-center relative  bg-gradient-to-r from-blue-100 via-blue-300 to-blue-500">

   {
    value?
<>

<div  onClick={logout}  className="absolute top-5 left-5 z-10">

<LogoutIcon style={{fontSize:"28px",color:"black"}}/>
</div>
      <form class="flex items-center mt-15 mb-5">   
    <label for="simple-search" class="sr-only">Search</label>
    <div class="relative w-full">
        <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
        </div>
        <input type="text" id="simple-search" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search" 
        value={query}
        onChange={(e)=>searchpost(e.target.value)}
        />
    </div>
    <button type="submit" class="p-2.5 ml-2 text-sm font-medium text-white bg-yellow-500 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
        <span class="sr-only">Search</span>
    </button>
</form>
{/* <Logins/> */}
<div className="  w-full flex justify-center items-center mb-20  ">
<MyTable weatherData={hits}/>
  </div>


          
</>:<Logins setValue={setValue}/>
   }   


</div>
    
  );
}



export default App



