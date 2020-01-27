import React from 'react';
import Input from '../Input/Input';
import Select from '../Select/Select';
import { useSelector } from 'react-redux';

const Student = (props) => {
  const rates = [
    {
      title: 'No rate',
      value: 'No rate'
    },
    {
      title: 'A',
      value: 'A'
    },
    {
      title: 'B',
      value: 'B'
    },
    {
      title: 'C',
      value: 'C'
    },
    {
      title: 'D',
      value: 'D'
    }
  ]

  return(
    <div className="list-item">
      {props.editable ? (
        <div className="list-item__name"><Input value={props.name} placeholder="Name" onChangeInput={(e) => props.onChangeName(e)} /></div>
      ) : (
        <div className="list-item__name">{props.name}</div>
      )}
      {props.editable ? (
        <div className="list-item__birth-date"><Input value={props.birthDate} placeholder="Birth Date" onChangeInput={(e) => props.onChangeBirthdate(e)} /></div>
      ) : (
        <div className="list-item__birth-date">{props.birthDate}</div>
      )}
      {props.editable ? (
        <div className="list-item__rate">
          <Select value={props.rate} options={rates} onSelectChange={e => props.onChangeRate(e)} />
        </div>
      ) : (
        <div className="list-item__rate">{props.rate}</div>
      )}
      {props.editable ? (
        <div className="list-item-edit"><div className="btn" onClick={(e) => props.onClickEditBtn(e)}>Save</div></div>
      ) : (
        <div className="list-item-edit"><div className="btn" onClick={(e) => props.onClickEditBtn(e)}>Edit</div></div>
      )}
      <div className="list-item-delete"><div onClick={(e) => props.onClickDeleteBtn(e)} className="btn">Delete</div></div>
    </div>
  )
}

export default Student;