import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';

const Edit = () => {
    const [name, setName] = useState('');
    const [skill, setSkill] = useState('');
    const [mobile, setMobile] = useState('');
    const [id, setId] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        setName(localStorage.getItem('name'));
        setSkill(localStorage.getItem('skill'));
        setMobile(localStorage.getItem('mobile'));
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault();
        localStorage.setItem("name", name);
        localStorage.setItem("skill", skill);
        localStorage.setItem("mobile", mobile);
        navigate('/');
    }
    return (
        <div className='create-form'>
            <h4 className='text-center'>Edit Form</h4>
            <form onSubmit={handleSubmit}>
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