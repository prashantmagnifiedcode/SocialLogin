const reducer = (state,action) => {
    
	switch(action.type){
		case "GET_STORIES":
			return{
			 	...state,
			 	hits:action.payload.hits,
			 	nbPages:action.payload.nbPages,
			 	
			}
        case 'SEARCH_QUERY':
             return{
                ...state,
                query:action.payload

             }
		default:
			return state
	}	
}

export default reducer;