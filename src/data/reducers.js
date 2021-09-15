import * as actions from "./actionTypes";
import { v4 as uuidv4 } from "uuid";

export default function reducer(
  state = [{ id: uuidv4(), content: "", isSelected: true }],
  action
) {
  switch (action.type) {
    case actions.ADD_NOTE:
      let newNotes = [
        ...state,
        {
          id: action.payload.id,
          content: "",
          isSelected: true,
        },
      ];
      return newNotes.map((note) =>
        note.id === action.payload.id
          ? { ...note, isSelected: true }
          : { ...note, isSelected: false }
      );
    case actions.DELETE_NOTE:
      if (state.length > 1) {
        let newNotes = state.filter((note) => note.id !== action.payload.id);
        newNotes[0].isSelected = true;
        return newNotes;
      } else {
        return [{ id: uuidv4(), content: "", isSelected: true }];
      }
    case actions.SELECT_NOTE:
      return state.map((note) =>
        note.id === action.payload.id
          ? { ...note, isSelected: true }
          : { ...note, isSelected: false }
      );
    case actions.EDIT_NOTE:
      return state.map((note) =>
        note.id === action.payload.id
          ? { ...note, content: action.payload.content }
          : note
      );
    default:
      return state;
  }
}
