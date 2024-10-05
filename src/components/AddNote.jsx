
export default function AddNote({updateList}) {

    const handleAddNote = () => {
        //first call api
        //after that pass data to parent
        updateList({id: 110, title: "Product 10", description: "This is Product 10", quantity: 13}, 'add')
    }

    return(
        <>
            <span>Add note</span>
            <button onClick={handleAddNote}>Close</button>
        </>
    )
}