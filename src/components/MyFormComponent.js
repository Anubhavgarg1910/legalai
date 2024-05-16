import React, { useState } from 'react';
import axios from 'axios';

const MyFormComponent = () => {
    // State to store form data
    const [formData, setFormData] = useState({
        Name: '',
        Age: '',
        Date: '',
        programming: ''
    });

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await axios.post('http://127.0.0.1:5000/docs', formData);

            setFormData({
                Name: '',
                Age: '',
                Date: '',
                programming: ''
            });

            console.log('Response from Flask API:', response.data);
        } catch (error) {
            console.error('Error sending data to Flask API:', error);
        }
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Name:
                <input type="text" name="Name" value={formData.Name} onChange={handleInputChange} />
            </label>
            <label>
                Age:
                <input type="text" name="Age" value={formData.Age} onChange={handleInputChange} />
            </label>
            <label>
                Date:
                <input type="text" name="Date" value={formData.Date} onChange={handleInputChange} />
            </label>
            <label>
                Programming:
                <input type="text" name="programming" value={formData.programming} onChange={handleInputChange} />
            </label>
            <button type="submit">Submit</button>
        </form>
    );
};

export default MyFormComponent;
