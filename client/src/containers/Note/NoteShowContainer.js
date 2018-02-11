import React from 'react';
import Note from '../../components/Note';
import {connect} from 'react-redux';

// Introspects through router for corresponding note to URL path, passes down
// appropriate data as note constant to Note presentational.

const NoteShowContainer = (props) => < div > {
  props.loading
    ? <h1>Loading page...</h1>
    : <Note note={props.note}/>
} </div>

const mapStateToProps = (state, ownProps) => {
  const note = state.notePad.notes.find(note => note.id == ownProps.match.params.id)

  if (note) {
    return { note }
  } else {
    return { note: {} }
  }
}

export default connect(mapStateToProps)(NoteShowContainer);