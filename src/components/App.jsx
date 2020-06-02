import React,{useState} from 'react';
import Heading from "./header";
import Footer from "./footer"
import Notes from "./notes"

import CreateArea from "./createArea"
function App(){
  const[notes,setnewNotes]=useState([]);

  function addNote(newNote){
    setnewNotes(prevValues => {
      return [...prevValues, newNote]
    }
  );
console.log(newNote);
  }
  function deleteNote(id){
    setnewNotes(prevValues => {
      return prevValues.filter((noteItem,index) => {
        return index !== id;
      });
    });
    console.log(id);
  }
    return (<div>
      <Heading />
      <CreateArea addNotes={addNote} />
    <Footer />
    <span>
    {notes.map((note,index)=> { return <Notes key ={index} id={index} heading={note.title} content={note.content} deleteNotes={deleteNote} />})}
    </span>
    </div>);
}

export default App;
