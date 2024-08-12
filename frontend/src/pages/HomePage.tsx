import React, { useEffect, useState } from "react";
import { Calendar } from "../stories/components/calendar/Calendar";
import { Notes } from "../stories/components/note/Notes";
import { apiURL } from "../utils/api";
import { Note } from "../utils/modelsTypes";
import { useUser } from "../contexts/UserContext";

const HomePage: React.FC = () => {
  const { user } = useUser();
  const [notes, setNotes] = useState<Note[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${apiURL}note/all`);
        const data = await response.json();
        const filteredNotes = data.notes.filter(
          (note: Note) => note.userId === user!.id
        );
        setNotes(filteredNotes);
      } catch (err) {
        console.error(err);
        setNotes([]);
      }
    };

    fetchData();
  }, [user]);

  const handleDelete = async (id: number) => {
    try {
      const response = await fetch(`${apiURL}note/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("Failed to delete note");
      }

      setNotes((prevNotes) => prevNotes.filter((note) => note.id !== id));
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="planner">
      <div className="notes">
        <Notes notes={notes} handleDelete={handleDelete} />
      </div>
      <div className="calendar">
        <Calendar />
      </div>
    </div>
  );
};

export default HomePage;
