import React from 'react';
import DeleteIcon from '@material-ui/icons/Delete';


function Note(props) {

  function handleDelete(){
    props.deleteNotes(props.id);
  }
    return (
      <div className="note">
        <h1>{props.heading}</h1>
        <p>{props.content}</p>
        <button onClick={handleDelete}> <DeleteIcon /> </button>
      </div>
    );
  }

  export default Note;
