import * as React from 'react';
import moment from 'moment';

import '../Style/TodoItem.css';

const TodoItem = (props, { index }) => {
  return (
    <div id="task" className={props.status}>
      <div className="content">
        <h3>Title: {props.title}</h3>
        <p className="content-creator">Creator: {props.creator}</p>
        <p className="stt" id={props.status}> Status: <span id="stt-spn">{props.status}</span> </p>
        <p className="stt">Deadline: {moment(props.deadline).format('DD/MM/YYYY')}</p>
        <hr />
        <h4>Description:</h4>
        <p> {props.description}</p>
      </div>
      <div className="status">
        <button id="edit" onClick={props.handleEditStatus}>
          Edit
        </button>
        <button id="delete" onClick={props.handleDelete}>
          Delete
        </button>
      </div>
    </div>
  );
};
export default TodoItem;
