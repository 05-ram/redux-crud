import React from 'react';
import users from "./Users";
import { Button, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const Home = () => {
    const handleCreate = () => {

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
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user) => (
                                <tr>
                                    <td>{user.id}</td>
                                    <td>{user.name}</td>
                                    <td>{user.skill}</td>
                                    <td>{user.mobile}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </Table>
                <Link to={"/create"} className='d-flex justify-content-end'>
                    <Button variant='success' onClick={handleCreate}>Create</Button>
                </Link>
            </div>
        </>
    )
}

export default Home