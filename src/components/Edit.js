import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';
import users from './Users';

const Edit = () => {
  const [name, setName] = useState('');
  const [skill, setSkill] = useState('');
  const [mobile, setMobile] = useState('');
  const [id, setId] = useState('');
  const navigate = useNavigate();

  let index = users
    .map(function (e) {
      return e.id;
    }).indexOf(id)

  const handelSubmit = (e) => {
    e.preventDefault();
    if (name == "" || skill == "" || mobile === '') {
      alert("invalid input");
      return;
    }

    let a = users[index];
    console.log(a)
    a.name = name;
    a.skill = skill;
    a.mobile = mobile;
    a.id = id;
    navigate("/");
  };
  useEffect(() => {
    setName(localStorage.getItem("name"));
    setSkill(localStorage.getItem("skill"));
    setMobile(localStorage.getItem("mobile"));
    setId(localStorage.getItem("id"));
  }, []);

  return (
    <div className='create-form'>
      <h4 className='text-center'>Edit Form</h4>
      <form onSubmit={handelSubmit}>
        <input type="text" onChange={(e) => setName(e.target.value)} value={name} /><br /><br />
        <input type="text" onChange={(e) => setSkill(e.target.value)} value={skill} /><br /><br />
        <input type="number" onChange={(e) => setMobile(e.target.value)} value={mobile} />
        <div className='d-flex justify-content-end mt-4'>
          <Button type='submit' variant='success'>Update</Button>
        </div>
      </form>
    </div>
  )
}

export default Edit