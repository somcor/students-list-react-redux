import {
  ACTION_REMOVE_STUDENT,
  ACTION_ADD_STUDENT,
  ACTION_EDIT_NAME,
  ACTION_EDIT_EDITABLE,
  ACTION_EDIT_BIRTHDATE,
  ACTION_EDIT_RATE,
} from '../index';

export const removeStudent = (id) => {
  return {
      type: ACTION_REMOVE_STUDENT,
      id
  }
}

export const addStudent = (student) => {
  return {
      type: ACTION_ADD_STUDENT,
      student
  }
}

export const editName = (id, name) => {
  return {
      type: ACTION_EDIT_NAME,
      id,
      name
  }
}

export const editBirthdate = (id, birthDate) => {
  return {
      type: ACTION_EDIT_BIRTHDATE,
      id,
      birthDate
  }
}

export const editRate = (id, rate) => {
  return {
      type: ACTION_EDIT_RATE,
      id,
      rate
  }
}

export const editEditable = (id) => {
  return {
      type: ACTION_EDIT_EDITABLE,
      id,
  }
}