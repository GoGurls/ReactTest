import { CATEGORY_CHANGED, ERROR_CATEGORY_CHANGED, GETONE_CATEGORY_CHANGED, LOADING_CATEGORY_CHANGED } from "../actions/actionKeys";

const initialState ={
    category:[],
    loading:true,
    error:false,
    categoryById:{}
}

function reducer (state=initialState, action){
    switch (action.type) {
        case CATEGORY_CHANGED:
            return {...state, category:action.category}
        case LOADING_CATEGORY_CHANGED:
            return {...state, loading:action.loading}
        case ERROR_CATEGORY_CHANGED :
            return {...state, error: action.error}
        case GETONE_CATEGORY_CHANGED:
            return {...state, categoryById:action.categoryById}
        // case CATEGORY_ADD:
        //     return {...state, category:state.category.concat(action.payload)}
        default:
            return state
    }
}

export default reducer