import React, { useState } from "react";

function CreateArea(props) {

  const [note, setNote] = useState({
    title: "",
    content: ""
  })

  function handleChange(event) {
    // Destructure event/object
    // console.log(event.target.value);
    const { name, value } = event.target;

    setNote(prevValue => {
      return {
        ...prevValue,
        [name]: value
      }
    })
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    })
    // Prevent this function due to page is not load on the button click of form.
    event.preventDefault();
  }

  return (
    <div>
      <form>
        <input name="title" value={note.title} onChange={handleChange} placeholder="Title" />
        <textarea name="content" value={note.content} onChange={handleChange} placeholder="Take a note..." rows="3" />
        <button onClick={submitNote} >Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
