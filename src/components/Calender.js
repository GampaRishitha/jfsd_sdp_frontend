import React, { useState } from 'react';

const Calendar = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [workshopDetails, setWorkshopDetails] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Sample workshop data for an art gallery context
  const workshops = {
    '2024-10-15': {
      title: 'Modern Art Exhibition',
      time: '7:00 PM',
      place: 'Art Gallery, Main Hall',
    },
    '2024-11-10': {
      title: 'Sculpture & Stonework Workshop',
      time: '3:00 PM',
      place: 'Gallery Workshop Room',
    },
    '2024-12-25': {
      title: 'Holiday Art Gala',
      time: '5:00 PM',
      place: 'Online - Virtual Gallery',
    },
    '2024-01-05': 
        { title: 'Art Exhibition: The Abstracts', time: '6:00 PM', place: 'Art Gallery, Hall 1' },
      '2024-01-12': 
        { title: 'Photography Workshop', time: '4:00 PM', place: 'Photography Studio' },
      '2024-01-18': 
        { title: 'Pottery for Beginners', time: '11:00 AM', place: 'Workshop Room A' },
      
      '2024-01-22': 
        { title: 'Painting with Light', time: '2:00 PM', place: 'Main Gallery' },
      
      '2024-01-28': 
        { title: 'Street Art Mural Exhibition', time: '8:00 PM', place: 'Outdoor Gallery' },
      
      '2024-02-03': 
        { title: 'Sculpture Exhibition', time: '7:00 PM', place: 'Sculpture Hall' },
      
      '2024-02-09': 
        { title: 'Metalwork Workshop', time: '3:00 PM', place: 'Art Workshop Room' },
      
      '2024-02-14': 
        { title: 'Clay Sculpture Art', time: '5:00 PM', place: 'Studio B' },
      
      '2024-02-18': 
        { title: 'Traditional Art and Craft', time: '9:00 AM', place: 'Craft Workshop' },
      '2024-02-25': 
        { title: 'Live Drawing Session', time: '12:00 PM', place: 'Drawing Room' },
      
      '2024-03-02': 
        { title: 'Mixed Media Art Show', time: '6:30 PM', place: 'Gallery 3' },
      
      '2024-03-08': 
        { title: 'Ink Art Masterclass', time: '2:00 PM', place: 'Studio A' },
      
      '2024-03-12': 
        { title: 'Digital Art Creation', time: '4:30 PM', place: 'Computer Lab' },
      
      '2024-03-18': 
        { title: 'Watercolor Landscape Workshop', time: '10:00 AM', place: 'Art Studio 5' },
      
      '2024-03-22': 
        { title: 'Interactive Art Installation', time: '7:00 PM', place: 'Exhibit Hall' },
      
      '2024-04-05': 
        { title: 'Modern Art in Focus', time: '5:00 PM', place: 'Main Hall' },
      
      '2024-04-10': 
        { title: 'Ceramics & Clay Workshop', time: '12:00 PM', place: 'Clay Studio' },
      
      '2024-04-15': 
        { title: 'Canvas Painting Exhibition', time: '3:00 PM', place: 'Gallery B' },
      
      '2024-04-20': 
        { title: 'Art for Children', time: '10:00 AM', place: 'Kids Art Corner' },
      
      '2024-04-25': 
        { title: 'Mixed Media Workshop', time: '4:00 PM', place: 'Art Center' },
      
      '2024-05-01': 
        { title: 'Impressionism Art Show', time: '6:00 PM', place: 'Art Gallery, Main Hall' },
      
      '2024-05-06': 
        { title: 'Watercolor Masterclass', time: '9:00 AM', place: 'Studio 3' },
      
      '2024-05-12': 
        { title: 'Oil Painting Techniques', time: '1:00 PM', place: 'Workshop Room 1' },
      
      '2024-05-18': 
        { title: 'Sculpture Art Show', time: '7:00 PM', place: 'Gallery A' },
      
      '2024-05-23': 
        { title: 'Abstract Art Creation', time: '4:00 PM', place: 'Art Workshop' },
      
      '2024-12-03': 
        { title: 'Sculpture Exhibition', time: '7:00 PM', place: 'Sculpture Hall' },
      
      '2024-11-09': 
        { title: 'Metalwork Workshop', time: '3:00 PM', place: 'Art Workshop Room' },
      
      '2024-11-14': 
        { title: 'Clay Sculpture Art', time: '5:00 PM', place: 'Studio B' },
      
      '2024-11-18': 
        { title: 'Traditional Art and Craft', time: '9:00 AM', place: 'Craft Workshop' },
      
      '2024-11-25': 
        { title: 'Live Drawing Session', time: '12:00 PM', place: 'Drawing Room' },
      
      '2024-10-02': 
        { title: 'Mixed Media Art Show', time: '6:30 PM', place: 'Gallery 3' },
      
      '2024-10-08': 
        { title: 'Ink Art Masterclass', time: '2:00 PM', place: 'Studio A' },
      
      '2024-10-12': 
        { title: 'Digital Art Creation', time: '4:30 PM', place: 'Computer Lab' },
      
      '2024-09-18': 
        { title: 'Watercolor Landscape Workshop', time: '10:00 AM', place: 'Art Studio 5' },
      
      '2024-09-22': 
        { title: 'Interactive Art Installation', time: '7:00 PM', place: 'Exhibit Hall' },
      
      '2024-09-05': 
        { title: 'Modern Art in Focus', time: '5:00 PM', place: 'Main Hall' },
      
      '2024-08-10': 
        { title: 'Ceramics & Clay Workshop', time: '12:00 PM', place: 'Clay Studio' },
      
      '2024-08-15': 
        { title: 'Canvas Painting Exhibition', time: '3:00 PM', place: 'Gallery B' },
      
      '2024-08-20': 
        { title: 'Art for Children', time: '10:00 AM', place: 'Kids Art Corner' },
      
      '2024-07-25': 
        { title: 'Mixed Media Workshop', time: '4:00 PM', place: 'Art Center' },
      
      '2024-07-01': 
        { title: 'Impressionism Art Show', time: '6:00 PM', place: 'Art Gallery, Main Hall' },
      
      '2024-07-06': 
        { title: 'Watercolor Masterclass', time: '9:00 AM', place: 'Studio 3' },
      
      '2024-06-12': 
        { title: 'Oil Painting Techniques', time: '1:00 PM', place: 'Workshop Room 1' },
      
      '2024-06-18': 
        { title: 'Sculpture Art Show', time: '7:00 PM', place: 'Gallery A' },
      
      '2024-06-23': 
        { title: 'Abstract Art Creation', time: '4:00 PM', place: 'Art Workshop' },
      
  };

  // Function to format the date as YYYY-MM-DD
  const formatDate = (date) => {
    const day = date.getDate();
    const month = date.getMonth() + 1; // Month is zero-indexed
    const year = date.getFullYear();
    return `${year}-${month < 10 ? `0${month}` : month}-${day < 10 ? `0${day}` : day}`;
  };

  // Handle clicking on a date
  const handleDateClick = (date) => {
    const formattedDate = formatDate(date);
    if (workshops[formattedDate]) {
      setWorkshopDetails(workshops[formattedDate]);
      setSelectedDate(formattedDate);
      setIsModalOpen(true);
    } else {
      setWorkshopDetails(null);
      setSelectedDate(formattedDate);
      setIsModalOpen(false);
    }
  };

  // Close the modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  // Render the calendar for the whole year
  const renderCalendar = () => {
    const months = [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
    ];

    const daysInMonth = (month, year) => {
      return new Date(year, month, 0).getDate();
    };

    const monthsJSX = months.map((month, monthIndex) => {
      const days = daysInMonth(monthIndex + 1, 2024); // Getting the days of the current month (for the year 2024)
      return (
        <div key={month} style={styles.monthContainer}>
          <h3 style={styles.monthHeading}>{month}</h3>
          <div style={styles.monthGrid}>
            {Array.from({ length: days }, (_, dayIndex) => {
              const date = new Date(2024, monthIndex, dayIndex + 1); // Creating date objects
              const formattedDate = formatDate(date);
              return (
                <div
                  key={formattedDate}
                  onClick={() => handleDateClick(date)}
                  style={{
                    ...styles.day,
                    backgroundColor: workshops[formattedDate] ? '#F2C94C' : '#E8E8E8', // Highlighted date with gold for workshop
                    border: '1px solid #BDBDBD', // Adding border for days
                  }}
                >
                  {dayIndex + 1}
                </div>
              );
            })}
          </div>
        </div>
      );
    });

    return monthsJSX;
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Art Work Shops Calendar - 2024</h1>

      {/* Render Calendar */}
      {renderCalendar()}

      {/* Modal for workshop details */}
      {isModalOpen && workshopDetails && (
        <div style={styles.modalBackdrop}>
          <div style={styles.modalContent}>
            <h2 style={styles.modalHeading}>{workshopDetails.title}</h2>
            <p><strong>Date:</strong> {selectedDate}</p>
            <p><strong>Time:</strong> {workshopDetails.time}</p>
            <p><strong>Place:</strong> {workshopDetails.place}</p>
            <button onClick={closeModal} style={styles.modalCloseButton}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

// Styles in JS with borders and updated color palette
const styles = {
  container: {
    padding: '40px',
    fontFamily: "'Arial', sans-serif",
    backgroundColor: '#F7F5F2', // Soft off-white
    minHeight: '100vh',
    color: '#333',
  },
  heading: {
    textAlign: 'center',
    color: '#3A3A3A',
    fontSize: '3rem',
    marginBottom: '40px',
    fontWeight: 'bold',
    letterSpacing: '2px',
    textTransform: 'uppercase',
    borderBottom: '2px solid #3A3A3A', // Underline effect for the heading
    paddingBottom: '10px',
  },
  monthContainer: {
    marginBottom: '40px',
    padding: '20px',
    backgroundColor: '#fff',
    borderRadius: '12px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
    border: '2px solid #BDBDBD', // Adding border to each month container
  },
  monthHeading: {
    fontSize: '2rem',
    textAlign: 'center',
    color: '#3A3A3A',
    marginBottom: '15px',
    fontWeight: 'bold',
    letterSpacing: '1px',
    borderBottom: '2px solid #F2C94C', // Gold bottom border for artistic appeal
    paddingBottom: '10px',
  },
  monthGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(7, 1fr)',
    gap: '15px',
    padding: '10px',
  },
  day: {
    padding: '20px',
    textAlign: 'center',
    borderRadius: '10px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease, transform 0.2s ease',
    fontSize: '1.4rem',
    fontWeight: '600',
    color: '#333',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    border: '1px solid #D3D3D3', // Light border for day blocks
  },
  dayHover: {
    backgroundColor: '#F2C94C',
    transform: 'scale(1.1)',
  },
  modalBackdrop: {
    position: 'fixed',
    top: '0',
    left: '0',
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: '1000',
  },
  modalContent: {
    backgroundColor: '#FFF',
    padding: '40px',
    borderRadius: '12px',
    width: '400px',
    boxShadow: '0 6px 15px rgba(0, 0, 0, 0.2)',
    textAlign: 'center',
    color: '#333',
    border: '2px solid #F2C94C', // Gold border for modal
  },
  modalHeading: {
    fontSize: '2rem',
    color: '#3A3A3A',
    marginBottom: '15px',
    fontWeight: 'bold',
    letterSpacing: '1px',
    borderBottom: '2px solid #F2C94C', // Gold underline for modal heading
    paddingBottom: '10px',
  },
  modalCloseButton: {
    marginTop: '20px',
    padding: '12px 30px',
    backgroundColor: '#F2C94C', // Gold background for the button
    color: '#fff',
    borderRadius: '8px',
    cursor: 'pointer',
    fontSize: '1.2rem',
    transition: 'background-color 0.3s',
    border: '2px solid #F2C94C', // Button border
  },
  modalCloseButtonHover: {
    backgroundColor: '#D1A700',
  },
};

export default Calendar;
