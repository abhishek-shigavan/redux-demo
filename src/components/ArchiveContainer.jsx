import { useSelector } from "react-redux";
import NoteCard from "./NoteCard";

export default function ArchiveContainer() {

    const archiveNotesList = useSelector((store) => store.notes.archiveList);
    
    return(
        <>
            <span>Archive Container</span>
            {archiveNotesList.map((noteObj) => <NoteCard noteDetails={noteObj}/>)}
        </>
    )
}