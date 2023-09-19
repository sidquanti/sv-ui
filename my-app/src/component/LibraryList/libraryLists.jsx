import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './libraryList.css';
// import Modal from 'react-modal'; // Import the modal library

function LibraryList({ selectedCityId }) {
    const [libraries, setLibraries] = useState([]);
    const [cityName, setCityName] = useState('');
    const [modalIsOpen, setModalIsOpen] = useState(false); // State to manage the modal

    useEffect(() => {
        async function fetchLibraries() {
            if (!selectedCityId) {
                return;
            }

            try {
                const response = await axios.get(`http://localhost:8080/library/city/${selectedCityId}`);
                setLibraries(response.data);
            } catch (error) {
                console.error('Error fetching libraries:', error);
            }
        }

        fetchLibraries();
    }, [selectedCityId]);

    useEffect(() => {
        async function fetchCityName() {
            try {
                const response = await axios.get(`http://localhost:8080/city/${selectedCityId}`);
                setCityName(response.data.city);
            } catch (error) {
                console.error('Error fetching city name:', error);
            }
        }

        if (selectedCityId) {
            fetchCityName();
        }
    }, [selectedCityId]);

    const handleEnrollClick = () => {
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };

    return (
        <div className="library-list-container">
            <h2>Libraries in {cityName}</h2>
            <table className="library-table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Address</th>
                        <th>Opening Time</th>
                        <th>Closing Time</th>
                        <th>Total Capacity</th>
                        <th>Mobile</th>
                        <th>Email</th>
                        <th>Status</th>
                        <th>Action</th> {/* New column for the "enroll" button */}
                    </tr>
                </thead>
                <tbody>
                    {libraries.map(library => (
                        <tr key={library.id}>
                            <td>{library.name}</td>
                            <td>{library.address}</td>
                            <td>{library.openingTime}</td>
                            <td>{library.closingTime}</td>
                            <td>{library.totalCapacity}</td>
                            <td>{library.mobile}</td>
                            <td>{library.email}</td>
                            <td>{library.status}</td>
                            <td>
                                <button className="enroll-button" onClick={handleEnrollClick}>
                                    Enroll
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* Modal */}
            {/* <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Enroll Form Modal"
            >
                <h2>Library Enrollment Form</h2>
                <form>
                    <table>
                        <tbody>
                            <tr>
                                <td>
                                    <label>Name:</label>
                                </td>
                                <td>
                                    <input type="text" />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label>Mobile Number:</label>
                                </td>
                                <td>
                                    <input type="text" />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label>Email Id:</label>
                                </td>
                                <td>
                                    <input type="text" />
                                </td>
                            </tr>
                            <tr>
                                <td colSpan="2">
                                    <button type="submit">Submit</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </form>
            </Modal> */}
        </div>
    );
}

export default LibraryList;
