import { useEffect, useState } from "react";
import NoteCard from "./NoteCard";
import { getNotesApiCall } from "../utils/Api";
import AddNote from "./AddNote";

export default function NotesContainer() {

    const [notesList, setNotesList] = useState([])
    
    useEffect(()=> {
        //data fetch --> api call
        fetchData()
    }, [])
    
    const fetchData = async () => {
        const res  =await getNotesApiCall()
        setNotesList(res)
    }
    const handleNotesList = (data, action) => {

        if(action == "delete")
        console.log(data);
        setNotesList(notesList.filter(noteObj => noteObj.id !== data.id))
        if (action == "add")
            setNotesList([data, ...notesList])
    }

    return(
        <>
            <AddNote updateList={handleNotesList}/>
            {/* {notesList.length == 0 ? <span>Data loading </span> : <span>Got Data</span>} */}
            <span>Notes Container</span>
            {notesList.map((noteObj) => <NoteCard container={"notes"} noteDetails={noteObj} updateList={handleNotesList}/>)}
        </>
    )
}