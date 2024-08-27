import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';
import users from "./Users";

const Create = () => {
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [skill, setSkill] = useState('');
    const [mobile, setMobile] = useState('');

    const canSubmit = Boolean(skill) && Boolean(skill) && Boolean(mobile);

    const handleSubmit = (e) => {
        e.preventDefault();
        // if (name === '' || skill === '' || mobile === '') {
        //     alert('invalid Details')
        //     return;
        // }
        users.push({
            id: (users.length + 1).toString(),
            name, skill, mobile
        })
        navigate('/');
    }
    return (
        <div className='create-form'>
            <h4 className='text-center'>Create Form</h4>
            <form onSubmit={handleSubmit}>
                <label>Name:</label><br />
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} /><br /><br />
                <label>Skill:</label><br />
                <input type="text" onChange={(e) => setSkill(e.target.value)} /><br /><br />
                <label>Mobile:</label><br />
                <input type="number" onChange={(e) => setMobile(e.target.value)} />
                <div className='d-flex justify-content-end mt-4'>
                    <Button type='submit' variant='success' disabled={!canSubmit}>Submit</Button>
                </div>
            </form>
        </div>
    )
}

export default Create