import { createContext, FC, ReactNode, useContext, useState } from "react";

type Note = {
  id: string
  title: string;
  content: string;
  updatedAt: string;
}

type NoteContext = {
  notes: Note[],
  createNote: (title: string, content: string) => void,
  updateNote: (id: string, title: string, content: string) => void,
}

export const NotesContext = createContext<NoteContext>({ notes: [], createNote: () => null, updateNote: () => null });

export const useNotes = () => {
  return useContext(NotesContext);
};

export const NotedProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [notes, setNotes] = useState<Note[]>([]);

  const createNote = (title: string, content: string) => {
    setNotes((prevState) => {
      const newNote = { id: `${prevState.length + 1}`, title, content, updatedAt: new Date().toISOString() }
      return [newNote, ...prevState];
    });
  };

  const updateNote = (noteId: string, title: string, content: string) => {
    setNotes((prevState) => {
      const notes = prevState.filter(({ id }) => id !== noteId);

      const updatedNote = { title, content, id: noteId, updatedAt: new Date().toISOString() };

      return [updatedNote, ...notes];
    });
  };

  return (
    <NotesContext.Provider value={{ notes, createNote, updateNote }}>
      {children}
    </NotesContext.Provider>
  )
}