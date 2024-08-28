import React, { useState } from 'react';
import initialUsers from './Users';
import { Button, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Home = () => {
    const [users, setUsers] = useState(initialUsers);

    const handleDelete = (id) => {
        setUsers(users.filter(user => user.id !== id));
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
                                            <Link to={`/edit/${user.id}`}>
                                                <Button variant='secondary'>Edit</Button>
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
