import React from 'react';
import Student from '../Student/Student'
import { useSelector, useDispatch } from 'react-redux';
import { removeStudent, editRate, editName, editEditable, editBirthdate } from '../../store/actions';

const StudentList = () => {
  const dispatch = useDispatch();
  const students = useSelector(state => state.students);

  const deleteStudentHandler = (id) => {
    dispatch(removeStudent(id));
  }

  const changeNameHandler = (e, id) => {
    const name = e.target.value;
    dispatch(editName(id, name));
  }

  const changeBirthdateHandler = (e, id) => {
    const birthDate = e.target.value;
    dispatch(editBirthdate(id, birthDate));
  }

  const changeRateHandler = (e, id) => {
    const rate = e.target.value;
    dispatch(editRate(id, rate));
  }

  const editStudentHandler = (id) => {
    dispatch(editEditable(id));
  }

  return (
    <div className="list">
      {students.map((item, index) => {
        return <Student 
        key={index} 
        name={item.name} 
        birthDate={item.birthDate} 
        rate={item.rate} 
        editable={item.editable} 
        onClickDeleteBtn={(e) => deleteStudentHandler(item.id)} 
        onChangeName={(e) => changeNameHandler(e, item.id)}
        onChangeBirthdate={(e) => changeBirthdateHandler(e, item.id)}
        onChangeRate={(e) => changeRateHandler(e, item.id)}
        onClickEditBtn={(e) => editStudentHandler(item.id)} 
        />;
      })}
    </div>
  )
}

export default StudentList;