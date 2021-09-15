import { connect } from "react-redux";
import * as actions from "../data/actionTypes";
import Notepad from "../components/notepad";
const mapStateToProps = (state) => {
  return {
    note: state.filter((note) => note.isSelected === true)[0],
  };
};
const mapDispatchToProps = {
  editNote: (id, content) => ({
    type: actions.EDIT_NOTE,
    payload: {
      id,
      content,
    },
  }),
};

export default connect(mapStateToProps, mapDispatchToProps)(Notepad);
