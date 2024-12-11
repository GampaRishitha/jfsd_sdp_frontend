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

const ArunachalPradesh = () => (
  <div style={styles.container}>
    <h2>Arunachal Pradesh</h2>

    {/* Overview Section */}
    <div style={styles.overviewBox}>
      <p style={{ flex: 1, paddingRight: '20px' }}>
        Arunachal Pradesh is a northeastern state in India, known for its breathtaking natural beauty, diverse tribal cultures, and rich traditions. The state shares borders with Bhutan, China, and Myanmar. Its capital, Itanagar, is known for its historical significance and natural landscape. The state is home to several tribes, each with distinct cultural practices, festivals, and art forms. The Tawang Monastery and the Ziro Valley are among the top tourist destinations in Arunachal Pradesh.
      </p>
      <img 
        src="https://upload.wikimedia.org/wikipedia/commons/7/73/India_Arunachal_Pradesh_locator_map.svg" 
        alt="Arunachal Pradesh Location in India" 
        style={styles.stateMap}
      />
    </div>

    {/* Art Section */}
    <div style={styles.artSectionContainer}>
      <h3>Art of Arunachal Pradesh</h3>
      <p>
        Arunachal Pradesh is known for its diverse art forms, particularly the unique traditions of the many indigenous tribes. These art forms reflect the lifestyle, beliefs, and natural surroundings of the people. Key art forms include intricate wood carving, traditional dance, and mask-making, all representing the deep connection between the people and their environment.
      </p>

      <div style={styles.artGrid}>
        {/* Tribal Mask Making */}
        <ArtSection 
          title="Tribal Mask Making"
          imgSrc="https://tawangtourism.in/wp-content/uploads/2015/02/dur-dag-skeleton-face-199x300.jpg"
          imgAlt="Tribal Mask Making"
          description="The tribes of Arunachal Pradesh are known for their exquisite wooden masks, used in traditional dance rituals and festivals. These masks are intricately carved and often represent animals, spirits, or ancestral deities."
        />

        {/* Dree Festival Dance */}
        <ArtSection 
          title="Dree Festival Dance"
          imgSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQW31KMPo_D-zlC-WJMcM1BvwBvVW9GW9Z-A&s"
          imgAlt="Dree Festival Dance"
          description="The Dree Festival is a harvest festival celebrated by the Apatani tribe in Arunachal Pradesh. It involves traditional dances, songs, and rituals to ensure a bountiful harvest."
        />

        {/* Wood Carving Art */}
        <ArtSection 
          title="Wood Carving Art"
          imgSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfck1fNx2DKtf_pqM1vlSBzRbQKtQpOjUzHg&s"
          imgAlt="Wood Carving"
          description="Wood carving is a traditional art form practiced in Arunachal Pradesh. The carvings are often used to decorate homes, temples, and ceremonial objects, reflecting the spiritual and cultural beliefs of the region's tribes."
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

export default ArunachalPradesh;
