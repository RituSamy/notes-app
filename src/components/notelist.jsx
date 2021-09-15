import React from "react";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Button from "react-bootstrap/Button";
import { v4 as uuidv4 } from "uuid";

const Notelist = (props) => {
  return (
    <div>
      <div align="left">
        <Button
          variant="light"
          style={{ color: "#FFADDB", borderColor: "#FFADDB" }}
          onClick={() => props.addNote(uuidv4())}
        >
          +
        </Button>
        <Button
          variant="light"
          style={{ color: "#FFADDB", borderColor: "#FFADDB" }}
          onClick={() => props.deleteNote(props.currentNote.id)}
        >
          Delete Note
        </Button>
      </div>

      <ButtonGroup vertical>
        {props.notes.map((note) => (
          <Button
            key={note.id}
            variant="light"
            style={{
              backgroundColor: note.isSelected ? "#FFADDB" : "",
              borderColor: "#FFADDB",
            }}
            onClick={() => props.selectNote(note.id)}
          >
            {note.content === "" ? "New Note" : note.content.slice(0, 18)}
          </Button>
        ))}
      </ButtonGroup>
    </div>
  );
};

export default Notelist;
