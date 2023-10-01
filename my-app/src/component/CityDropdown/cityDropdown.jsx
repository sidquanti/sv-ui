import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './cityDropdown.css'; // Import the CSS file for component-specific styling
import { Url } from '../../constant';

function CityDropdown({ onSelectCity,setSelectedCityId }) {
    const navigate = useNavigate();
    const [cities, setCities] = useState([]);

    useEffect(() => {
        async function fetchCities() {
            try {
                const response = await axios.get(`${Url}/city`);
                setCities(response.data);
            } catch (error) {
                console.error('Error fetching cities:', error);
            }
        }

        fetchCities();
    }, []);

    const handleCityChange = (event) => {
        const selectedCityId = event.target.value;
        const searchRoute=`/searchPage/?city=${selectedCityId}`;
        setSelectedCityId(selectedCityId)

        navigate(searchRoute)
        // onSelectCity(selectedCityId);
    };

    return (
        <div className="city-dropdown-container">
            <select className="city-select" onChange={handleCityChange}>
                <option value="">Select a city</option>
                {cities.map(city => (
                    <option key={city.id} value={city.id}>
                        {city.city}, {city.state}, {city.country}
                    </option>
                ))}
            </select>
        </div>
    );
}

export default CityDropdown;
