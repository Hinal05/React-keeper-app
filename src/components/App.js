import React, {useState} from "react";

import Header from './Header/header';
import Footer from './Footer/footer';
import CreateArea from './CreateArea/createArea';
import Note from './Note/note';

function App() {

    const [ notes, setNotes ] = useState([]);

    function addNote(newNote) {
        // console.log(note);
        setNotes(prevNotes => {
            return [...prevNotes, newNote];
        })
    }

    function deleteNote(id) {
        setNotes((prevNotes) => {
            return prevNotes.filter((noteItem, index) => {
              return index !== id;
            });
        });
    }

    return (
        <section>
            <Header />
            <CreateArea onAdd={addNote} />
            {notes.map((noteItem, index) => {
                return <Note key={index} id={index} title={noteItem.title} content={noteItem.content} onDelete={deleteNote} />;
            })}
            <Footer />
        </section>
    )
}

export default App;