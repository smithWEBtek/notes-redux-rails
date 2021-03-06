//Sets initial state without which Redux would error.

const initialState = {
  notes: [],
  loading: false,
  deletedNote: {}
}

// Passes initial state and ability to have actions into reducer, switch case of
// types includes a case for when notes are loading, returning non-mutated state
// and setting loading to true, case for fetching notes from the API to keep
// store current, resetting loading to false and giving the action payload as
// notes, creating a new note into the store, updating the notes, deleting a note,
// clearing the state of the deleted note.

export default function notesReducer(state = initialState, action) {
  switch (action.type) {
    case 'LOADING_NOTES':
      return {
        ...state,
        loading: true
      }
    case 'FETCH_NOTES':
      return {
        ...state,
        notes: action.payload,
        loading: false,
      }
    case 'CREATE_NOTE':
      return {
        ...state,
        loading: false,
        notes: [
          ...state.notes,
          action.payload
        ]
      }
    case 'UPDATE_NOTE':
      const noteData = action.payload
      const updatedNoteArray = state.notes.map(note => note.id === noteData.id
          ? noteData : note)
          return {
          ...state,
          loading: false,
          notes: updatedNoteArray
        }
    case 'DELETE_NOTE':
      return {
        ...state,
        loading: false,
        deletedNote: action.payload,
        notes: state.notes.filter(note => action.payload.id !== note.id)
      }
    case 'CLEAR_DELETED_NOTE':
      return {
        ...state,
        deletedNote: {}
      }
    default:
      return state;
  }
}