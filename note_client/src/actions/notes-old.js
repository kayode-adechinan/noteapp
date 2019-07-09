import axios from "axios";



export const fetchNotesold = () => {
  return dispatch => {
    let headers = { "Content-Type": "application/json" };
    return fetch("http://localhost:8000/api/v1/notes/", { headers })
      .then(res => res.json())
      .then(notes => {
        return dispatch({
          type: "FETCH_NOTES",
          notes: notes.results
        });
      });
  };
};

export const fetchNotes = () => {
  return (dispatch, getState) => {

    let {token} = getState().auth;

    let headers = { headers: { Authorization: `Bearer ${token}` } }

    axios.get(`http://localhost:8000/api/v1/notes/`, headers)
    .then(response => {
      return dispatch({
        type: "FETCH_NOTES",
        notes: response.data.results
      });
    });
  };
};

export const addNote = text => {
  return dispatch => {
    return axios
      .post(`http://localhost:8000/api/v1/notes/`, {
        text: text
      })
      .then(response => {
        return dispatch({
          type: "ADD_NOTE",
          note: response.data
        });
      });
  };
};

export const updateNote = (index, text) => {
  return (dispatch, getState) => {
    let noteId = getState().notes[index].id;

    return axios
      .put(`http://localhost:8000/api/v1/notes/${noteId}/`, {
        text: text
      })
      .then(response => {
        return dispatch({
          type: "UPDATE_NOTE",
          note: response.data,
          index
        });
      });
  };
};

export const deleteNote = index => {
  return (dispatch, getState) => {
    let noteId = getState().notes[index].id;
    return axios
      .delete(`http://localhost:8000/api/v1/notes/${noteId}/`)
      .then(response => {
        return dispatch({
          type: "DELETE_NOTE",
          index
        });
      });
  };
};
