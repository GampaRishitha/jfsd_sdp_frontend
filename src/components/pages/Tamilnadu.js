import React, { useState } from 'react';

// Reusable component for displaying art forms with a clickable effect
const ArtSection = ({ title, imgSrc, imgAlt, description }) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleImageClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <div 
      style={{
        flex: '1 1 300px', // This ensures each block takes up the same width, with a min width of 300px
        padding: '15px',
        backgroundColor: 'white',
        borderRadius: '8px',
        boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
        textAlign: 'center',
        cursor: 'pointer',
        transition: 'transform 0.3s ease', // Instead of widening, we use transform
        transform: isClicked ? 'scale(1.1)' : 'scale(1)', // Slightly enlarge the clicked block
        border: '2px solid #ddd',
        marginBottom: '20px',
        marginRight: '10px',
      }}
      onClick={handleImageClick} // The entire block is clickable
    >
      <h4 style={{ transition: 'font-size 0.3s ease', fontSize: isClicked ? '1.3rem' : '1.1rem' }}>
        {title}
      </h4>
      <img 
        src={imgSrc} 
        alt={imgAlt} 
        style={{ 
          width: '100%', 
          height: 'auto',
          borderRadius: '35px', 
          marginBottom: '10px',
          transition: 'all 0.3s ease',
        }} 
      />
      <p style={{ transition: 'font-size 0.3s ease', fontSize: isClicked ? '1.1rem' : '1rem' }}>
        {description}
      </p>
    </div>
  );
};

const Tamilnadu = () => (
  <div style={styles.container}>
    <h2>Tamil Nadu</h2>

    {/* Overview Section */}
    <div style={styles.overviewBox}>
      <p style={{ flex: 1, paddingRight: '20px' }}>
        Tamil Nadu is a state located in the southernmost part of India. It is known for its rich cultural heritage, classical music, dance forms, and grand temples. The state is home to many UNESCO World Heritage sites, including the temples of the Chola dynasty, and the coastal city of Chennai is a major hub for trade and education.
        Tamil Nadu is famous for its vibrant arts, religious festivals, and traditional food. The state's history is deeply intertwined with its ancient temples, architecture, and classical music.
      </p>
      <img 
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRS7IeuAdAgTAgA-AFbqNk-nD8xNOkd9uT6vw&s" 
        alt="Tamil Nadu Location in India" 
        style={styles.stateMap}
      />
    </div>

    {/* Art Section */}
    <div style={styles.artSectionContainer}>
      <h3>Art of Tamil Nadu</h3>
      <p>
        Tamil Nadu is home to several classical dance forms, music, and arts. Famous for the Bharatanatyam dance, Carnatic music, and ancient temple art, Tamil Nadu reflects its artistic and cultural heritage through these expressions.
      </p>

      <div style={styles.artGrid}>
        {/* Bharatanatyam */}
        <ArtSection 
          title="Bharatanatyam"
          imgSrc="https://upload.wikimedia.org/wikipedia/commons/e/eb/Murugashankari_Leo.jpg"
          imgAlt="Bharatanatyam Dance"
          description="Bharatanatyam is one of the oldest and most famous classical dance forms of India, originating in Tamil Nadu. It involves intricate footwork, expressive gestures, and elaborate storytelling."
        />

        {/* Carnatic Music */}
        <ArtSection 
          title="Carnatic Music"
          imgSrc="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Tanjore-style_Carnatic_tambura.JPG/800px-Tanjore-style_Carnatic_tambura.JPG"
          imgAlt="Carnatic Music"
          description="Carnatic music is a classical music form that originated in the Tamil-speaking regions of South India. It is known for its intricate ragas (melodic patterns) and talas (rhythmic cycles)."
        />

        {/* Tamil Temple Architecture */}
        <ArtSection 
          title="Tamil Temple Architecture"
          imgSrc="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/01MaduraiMeenakshiAmmanTemple%26IndoorCorridorView.jpg/1024px-01MaduraiMeenakshiAmmanTemple%26IndoorCorridorView.jpg"
          imgAlt="Tamil Temple Architecture"
          description="The Dravidian-style temples of Tamil Nadu are architectural marvels, known for their towering gopurams (gateway towers), intricate sculptures, and vast temple complexes like the Brihadeeswarar Temple in Thanjavur."
        />
      </div>
    </div>
  </div>
);

const styles = {
  container: {
    margin: '0 auto',
    padding: '20px',
    maxWidth: '1200px'
  },
  overviewBox: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '20px',
    border: '2px solid #ddd',
    backgroundColor: '#f9f9f9',
    marginBottom: '20px',
    borderRadius: '8px'
  },
  stateMap: {
    width: '250px',
    height: 'auto',
    borderRadius: '8px'
  },
  artSectionContainer: {
    padding: '20px',
    border: '2px solid #ddd',
    backgroundColor: '#f5f5f5',
    borderRadius: '8px'
  },
  artGrid: {
    display: 'flex',
    justifyContent: 'space-between',
    gap: '20px',
    flexWrap: 'wrap'
  }
};

export default Tamilnadu;
