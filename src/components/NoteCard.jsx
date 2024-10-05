import { useDispatch } from "react-redux";
import { removeNoteFromList } from "../utils/store/notesSlice";

export default function NoteCard(props) {
    const { noteDetails, updateList, container } = props
    console.log(noteDetails);
    const dispatch = useDispatch();
    // dispatch(clearCart());
    const handleDelete = () => {
        console.log(noteDetails);
        updateList(noteDetails, 'delete')
        // dispatch(removeNoteFromList())
    }

    return(
        <div style={{width: "200px", height: "200px", border: "1px solid black", margin: "20px"}}>
            <span>{noteDetails.title}</span><br /><br />
            <span>{noteDetails.description}</span><br /><br />
            <button onClick={handleDelete}>Delete</button>
        </div>
    )
}