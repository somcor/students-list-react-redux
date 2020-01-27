import { 
  ACTION_REMOVE_STUDENT,
  ACTION_ADD_STUDENT,
  ACTION_EDIT_NAME,
  ACTION_EDIT_BIRTHDATE,
  ACTION_EDIT_RATE,
  ACTION_EDIT_EDITABLE
} from '../index';

const initialState = {
  students: [
    {
      id: 'id1',
      name: 'John Doe',
      birthDate: '18.04.1987',
      rate: 'A',
      editable: false
    },
    {
      id: 'id2',
      name: 'Jane Doe',
      birthDate: '12.06.1985',
      rate: 'B',
      editable: false
    }
  ]
}

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {   
      case ACTION_REMOVE_STUDENT: {
        const id = action.id;
        const studentsArr = [...state.students];
        const result = studentsArr.filter(item => item.id !== id);
        return {
          ...state, 
          students: result
        }
      }
      case ACTION_ADD_STUDENT: {
        return {
          ...state, 
          students: [...state.students, action.student]
        } 
      }
      case ACTION_EDIT_NAME: {
        const studentsArr = [...state.students];
        const studentIndex = studentsArr.findIndex(item => item.id === action.id);
        studentsArr[studentIndex].name = action.name; 
        return {
          ...state, 
          students: studentsArr
        }
      }
      case ACTION_EDIT_BIRTHDATE: {
        const studentsArr = [...state.students];
        const studentIndex = studentsArr.findIndex(item => item.id === action.id);
        studentsArr[studentIndex].birthDate = action.birthDate; 
        return {
          ...state, 
          students: studentsArr
        }
      }
      case ACTION_EDIT_RATE: {
        const studentsArr = [...state.students];
        const studentIndex = studentsArr.findIndex(item => item.id === action.id);
        studentsArr[studentIndex].rate = action.rate; 
        return {
          ...state, 
          students: studentsArr
        }
      }
      case ACTION_EDIT_EDITABLE: {
          const studentsArr = [...state.students];
          const studentIndex = studentsArr.findIndex(item => item.id === action.id);
          studentsArr[studentIndex].editable = !studentsArr[studentIndex].editable; 
          return {
            ...state, 
            students: studentsArr
          }
        }
      default:
  }
  return state;
};