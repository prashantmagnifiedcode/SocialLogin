import React,{useReducer,createContext,useContext,useEffect} from 'react'
import reducer from '../reducers/data'
import axios from 'axios'
const initialState = {
    
   query:'HTML',
   nbPages:0,
   page:0,
   hits:[],
   isloading:true,
  };
const Global= createContext(initialState)
export const useContextState = () => useContext(Global);
let API='https://hn.algolia.com/api/v1/search?'
const GlobalContext=({children})=>{

  const[state,dispatch]=useReducer(reducer,initialState);
  console.log("authistate",state)

    const fetchAuthAdmin=async(url)=>{
        await axios.get(url).then(res=>{
            if(res?.data){
              // console.log("whi",res.data)

              dispatch({type:"GET_STORIES",payload:{hits:res.data.hits,nbPages:res.data.nbpages}})
            }
          }).catch(err=>{
            // authDispatch({type:'Error',error:'Not Authorized'})
            console.log(err)
          })   
    }

const searchpost=(searchquery)=>{
 dispatch({type:'SEARCH_QUERY',payload:searchquery})
}

   
  useEffect(() => {
    
    fetchAuthAdmin(`${API}query=${state.query}&page=${state.page}`);
  }, [state.query]);
  // const value={authState ,fetchAuthAdmin,logout}
    return (
        <>
        <Global.Provider value={{...state,searchpost}}>{children}</Global.Provider>
        
        </>
    )
}
export default GlobalContext;