import React from "react";
import DeleteIcon from '@material-ui/icons/Delete';

function Note(props) {

    function deleteNote(event) {
        props.onDelete(props.id);
        // Prevent this function due to page is not load on the button click of form.
        event.preventDefault();
    }

    return (
        <div className="note">
            <h1>{props.title}</h1>
            <p>{props.content}</p>
            <button onClick={deleteNote}><DeleteIcon /></button>
        </div>
    )
}

export default Note;