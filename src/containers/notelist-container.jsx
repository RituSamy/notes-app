import { connect } from "react-redux";
import Notelist from "../components/notelist";
import * as actions from "../data/actionTypes";

const mapStateToProps = (state) => {
  return {
    notes: state,
    currentNote: state.filter((note) => note.isSelected === true)[0],
  };
};

const mapDispatchToProps = {
  addNote: (id) => ({
    type: actions.ADD_NOTE,
    payload: {
      id,
    },
  }),

  deleteNote: (id) => ({
    type: actions.DELETE_NOTE,
    payload: {
      id,
    },
  }),

  selectNote: (id) => ({
    type: actions.SELECT_NOTE,
    payload: {
      id,
    },
  }),
};

export default connect(mapStateToProps, mapDispatchToProps)(Notelist);
