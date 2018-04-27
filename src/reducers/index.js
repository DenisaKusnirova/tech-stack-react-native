import { combineReducers } from 'redux'
import LibraryReducer from './LibraryReduces'

export default combineReducers({
    libraries: LibraryReducer
})
