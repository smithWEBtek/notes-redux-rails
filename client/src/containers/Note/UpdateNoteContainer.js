//Stateful component responsible for editing notes.

import React from 'react'
import {bindActionCreators} from 'redux'
import * as actions from '../../store/actions/noteActions.js'
import {connect} from 'react-redux';
import {Button} from 'reactstrap'

class UpdateNoteContainer extends React.Component {
  //Sets state to include props and all data in state as empty strings.

  constructor(props) {
    super(props)

    this.state = {
      title: '',
      body: ''
    }
  }

  // When component will mount, takes in passed in props from Note presentational,
  // received from NotesIndex, to set state to proper note being edited's data.

  componentDidMount() {
    this.setState({id: this.props.note.id, title: this.props.note.title, body: this.props.note.body})
  }

  //When changing form, sets state to reflect change on form.

  handleChange = (e) => {
    const {name, value} = e.target
    this.setState({[name]: value})
  }

  // Passes in the state, and the id of the note,
  // instead of submitting form regularly, calls action to update note with that
  // data.

  submitForm(e) {
    const values = this.state;
    const id = values.id
    this.props.actions.updateNote(values, id)
    e.preventDefault();
  }

  // Form for editing note initially populated by note's contents, later changed by
  // user as state is set. Fields require text through HTML required.

  render() {
    return (
      <div>
        <form onSubmit= {(e) => this.submitForm(e)}>
          <h2>
            Edit {this.state.title}!
          </h2>
          <br/>
          <h3>Edit Note Title:</h3>
          <input
            type="text"
            name="title"
            value={this.state.title}
            onChange={this.handleChange}
            required/>
          <br/>
          <h3>
            Edit Note Content:</h3>
          <textarea
            rows="10"
            cols="25"
            name="body"
            value={this.state.body}
            onChange=
            {(e) => {this.handleChange(e)}}
            required/>
          <Button>Submit</Button>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  const note = state.notePad.notes.find(note => note.id == ownProps.match.params.id)
  const loading = state.notePad.loading

  if (note) {
    return { note, loading }
  } else {
    return { note: {} }
  }
}

//Allows for access to actions.

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}

//Exports with knowledge of actions.

export default connect(mapStateToProps, mapDispatchToProps)(UpdateNoteContainer);
