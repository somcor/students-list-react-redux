import React from 'react';
import { useDispatch } from 'react-redux';
import { addStudent } from '../../store/actions';

const AddBtn = (props) => {
  const dispatch = useDispatch();

  const addNewStudentHandler = () => {
    function uuidv4() {
      return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
          let r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
          return v.toString(16);
      });
    }

    const uniqueId = uuidv4();

    const newStudent = {
      id: uniqueId,
      name: '',
      birthDate: '',
      rate: '',
      editable: true
    }

    dispatch(addStudent(newStudent));
  }

  return(
    <div className="btn" onClick={() => addNewStudentHandler()}>Add new</div>
  )
}

export default AddBtn;