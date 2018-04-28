import { combineReducers } from 'redux'
import LibraryReducer from './LibraryReduces'
import SelectionReducer from './SelectionReducer';

export default combineReducers({
    libraries: LibraryReducer,
    selectedLibraryId: SelectionReducer
})
