import React, { useEffect, useState } from 'react';
import users from './Users';
import { Button, Table } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

const Home = () => {
  let history = useNavigate();

  const setValue = (id, name, skill, mobile) => {
    localStorage.setItem("id", id);
    localStorage.setItem("name", name);
    localStorage.setItem("skill", skill);
    localStorage.setItem("mobile", mobile);
  }

  const handleDelete = (id) => {
    let index = users
      .map(function (e) {
        return e.id;
      }).indexOf(id)
    users.splice(index, 1);
    history('/')
  }

  return (
    <>
      <div className='glbl-tbl'>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Skill</th>
              <th>Mobile</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {
              users.map((user) => (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.skill}</td>
                  <td>{user.mobile}</td>
                  <td>
                    <div className='d-flex gap-3 justify-content-center'>
                      <Link to={`/edit`}>
                        <Button variant='secondary' onClick={() => setValue(user.id, user.name, user.skill, user.mobile)}>Edit</Button>
                      </Link>
                      <Button
                        variant='danger'
                        className='ml-2'
                        onClick={() => handleDelete(user.id)}
                      >
                        Delete
                      </Button>
                    </div>
                  </td>
                </tr>
              ))
            }
          </tbody>
        </Table>
        <div className='d-flex justify-content-end'>
          <Link to={"/create"}>
            <Button variant='success'>Create</Button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Home;
