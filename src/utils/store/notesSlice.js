import { createSlice } from "@reduxjs/toolkit";

const notesSlice = createSlice({
  name: "notes",
  initialState: {
    notesList: [],
    archiveList: [
        {id: 101, title: "Product 1", description: "This is Product 1", quantity: 10},
            {id: 102, title: "Product 2", description: "This is Product 2", quantity: 1},
            {id: 103, title: "Product 3", description: "This is Product 3", quantity: 21},
            {id: 104, title: "Product 4", description: "This is Product 4", quantity: 2},
            {id: 105, title: "Product 5", description: "This is Product 5", quantity: 23},
    ],
    noteObj: {},
  },
  reducers: {
    addNoteToList: (state, action) => {
        state.notesList.push(action.payload);
    },
    removeNoteFromList: (state, action) => {
        console.log("add to note list action called");
      state.archiveList.splice(action.payload, 1)
    },
    clearNoteList: (state) => {
      state.notesList.length = 0
    },
  },
});

export const { addNoteToList, removeNoteFromList, clearNoteList } = notesSlice.actions;
export default notesSlice.reducer;