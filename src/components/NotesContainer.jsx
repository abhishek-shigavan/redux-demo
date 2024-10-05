import { useEffect, useState } from "react";
import NoteCard from "./NoteCard";

export default function NotesContainer() {

    const [notesList, setNotesList] = useState([])
    
    useEffect(()=> {
        //data fetch --> api call
        setNotesList([
            {id: 101, title: "Product 1", description: "This is Product 1", quantity: 10},
            {id: 102, title: "Product 2", description: "This is Product 2", quantity: 1},
            {id: 103, title: "Product 3", description: "This is Product 3", quantity: 21},
            {id: 104, title: "Product 4", description: "This is Product 4", quantity: 2},
            {id: 105, title: "Product 5", description: "This is Product 5", quantity: 23},
            {id: 106, title: "Product 6", description: "This is Product 6", quantity: 19},
            {id: 107, title: "Product 7", description: "This is Product 7", quantity: 7},
            {id: 108, title: "Product 8", description: "This is Product 8", quantity: 4},
            {id: 109, title: "Product 9", description: "This is Product 9", quantity: 13}
          ])
    }, [])
    
    const handleNotesList = (data) => {
        console.log(data);
        setNotesList(notesList.filter(noteObj => noteObj.id !== data.id))
    }

    return(
        <>
            {/* {notesList.length == 0 ? <span>Data loading </span> : <span>Got Data</span>} */}
            <span>Notes Container</span>
            {notesList.map((noteObj) => <NoteCard noteDetails={noteObj} updateList={handleNotesList}/>)}
        </>
    )
}