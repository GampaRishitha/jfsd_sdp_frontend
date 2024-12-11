import React, { useState } from 'react';
import Ap from './pages/Ap';
import Telangana from './pages/Telangana';
import Tamilnadu from './pages/Tamilnadu';
import ArunachalPradesh from './pages/Arunachalpradesh';
import './Aboutus.css';

const Home = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedPage, setSelectedPage] = useState(null);

  // List of pages with real components
  const pages = [
    { name: 'Telangana', content: <Telangana /> },
    { name: 'Andhra Pradesh', content: <Ap /> },
    { name: 'Tamil Nadu', content: <Tamilnadu /> },
    { name: 'Arunachal Pradesh', content: <ArunachalPradesh /> },
  ];

  // Handle search input change
  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
    setSelectedPage(null); // Reset selected page when searching
  };

  // Filter pages based on search term
  const filteredPages = pages.filter(page =>
    page.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Show selected page content
  const handlePageSelect = (content) => {
    setSelectedPage(content);
  };

  return (
    <div className="container"> {/* Add container class for background image */}
      <h1>Beauty of Indian States</h1>
      <input
        type="text"
        value={searchTerm}
        onChange={handleInputChange}
        placeholder="Search for States..."
      />
      {searchTerm && filteredPages.length > 0 && (
        <ul>
          {filteredPages.map((page, index) => (
            <li key={index} onClick={() => handlePageSelect(page.content)}>
              {page.name}
            </li>
          ))}
        </ul>
      )}
      <div className="selected-page">
        {selectedPage}

        <p>
          Welcome to our Art Gallery! We are dedicated to showcasing the finest artworks from talented artists around the world. Our mission is to create a space where art enthusiasts can explore, appreciate, and connect with various art forms.
        </p>
        <p>
          Our gallery features a diverse collection of contemporary and classic artworks, including paintings, sculptures, and photography. We host regular exhibitions and events to promote artists and foster a love for art in our community.
        </p>
        <p>
          Join us in our journey to celebrate creativity and innovation in the art world!
        </p>
      </div>
    </div>
  );
};

export default Home;
