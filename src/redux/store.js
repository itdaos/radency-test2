import { configureStore, createSlice, nanoid } from "@reduxjs/toolkit";
import { initialNotes, initialArchive } from "./init.js";

const notesSlice = createSlice({
  name: "notes",
  initialState: initialNotes.map((item) => ({ id: nanoid(), ...item })) || [],
  reducers: {
    noteAdded(state, action) {
      state.push(action.payload);
    },
    noteEdited(state, action) {
      const { id } = action.payload;
      const editedNote = action.payload;
      const existingNote = state.find((note) => note.id === id);
      if (existingNote) {
        existingNote.name = editedNote.name;
        existingNote.category = editedNote.category;
        existingNote.content = editedNote.content;
        existingNote.dates = editedNote.dates;
        existingNote.createdAt = editedNote.createdAt;
      }
    },
    noteDeleted(state, action) {
      const { id } = action.payload;
      return state.filter((note) => note.id !== id);
    },
    noteArchived(state, action) {
      const { id } = action.payload;
      const note = state.find((note) => note.id === id);
      store.dispatch(archiveAdded({ note }));
      return state.filter((note) => note.id !== id);
    },
  },
});

export const { noteAdded, noteEdited, noteDeleted, noteArchived } =
  notesSlice.actions;

const archiveSlice = createSlice({
  name: "archive",
  initialState: initialArchive.map((note) => ({ id: nanoid(), ...note })) || [],
  reducers: {
    archiveAdded(state, action) {
      state.push(action.payload);
    },
  },
});

export const { archiveAdded } = archiveSlice.actions;

const summarySlice = createSlice({
  name: "summary",
  initialState: [],
  reducers: {},
});

const store = configureStore({
  reducer: {
    notes: notesSlice.reducer,
    archive: archiveSlice.reducer,
    summary: summarySlice.reducer,
  },
});

export default store;
