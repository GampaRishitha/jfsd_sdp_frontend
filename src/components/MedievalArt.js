import React from 'react';

const MedievalArtGallery = () => {
  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1 style={styles.title}>Medieval Art Gallery</h1>
        <p style={styles.subtitle}>Explore the exquisite artworks of the medieval era</p>
      </header>

      <section style={styles.gallery}>
        <div style={styles.card}>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/The_Unicorn_in_Captivity_%28from_the_Unicorn_Tapestries%29_MET_DP118991.jpg/635px-The_Unicorn_in_Captivity_%28from_the_Unicorn_Tapestries%29_MET_DP118991.jpg"
            alt="The Unicorn Tapestries"
            style={styles.image}
          />
          <h3 style={styles.artTitle}>The Unicorn Tapestries</h3>
          <p style={styles.description}>A series of medieval tapestries depicting a hunt for the mystical unicorn.</p>
        </div>

        <div style={styles.card}>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/5/5a/Odo_of_Bayeux.jpg"
            alt="The Bayeux Tapestry"
            style={styles.image}
          />
          <h3 style={styles.artTitle}>The Bayeux Tapestry</h3>
          <p style={styles.description}>A historical tapestry illustrating the Norman conquest of England.</p>
        </div>

        <div style={styles.card}>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/07angels-hildegard_von_bingen.jpg/330px-07angels-hildegard_von_bingen.jpg"
            alt="Hildegard of Bingens Illuminations"
            style={styles.image}
          />
          <h3 style={styles.artTitle}>Hildegard of Bingens Illuminations</h3>
          <p style={styles.description}>
            Medieval manuscripts with intricate illuminations by Hildegard of Bingen.
          </p>
        </div>

        <div style={styles.card}>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Cenral_tympanum_Chartres.jpg/149px-Cenral_tympanum_Chartres.jpg"
            alt="Stained Glass of Chartres Cathedral"
            style={styles.image}
          />
          <h3 style={styles.artTitle}>Stained Glass of Chartres Cathedral</h3>
          <p style={styles.description}>
            Brilliantly colored stained glass windows from the Gothic period.
          </p>
        </div>

        <div style={styles.card}>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/LindisfarneFol27rIncipitMatt.jpg/390px-LindisfarneFol27rIncipitMatt.jpg"
            alt="The Lindisfarne Gospels"
            style={styles.image}
          />
          <h3 style={styles.artTitle}>The Lindisfarne Gospels</h3>
          <p style={styles.description}>
            An illuminated manuscript gospel book created in the Early Middle Ages.
          </p>
        </div>
      </section>
    </div>
  );
};

const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    padding: '20px',
    backgroundColor: '#f5f5f5',
    color: 'black',
  },
  header: {
    textAlign: 'center',
    marginBottom: '30px',
    color:'black'
  },
  title: {
    fontSize: '2.5rem',
    margin: '10px 0',
    color:'black'
  },
  subtitle: {
    fontSize: '1.2rem',
  },
  gallery: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '20px',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: '8px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    padding: '15px',
    textAlign: 'center',
  },
  image: {
    width: '100%',
    height: 'auto',
    borderRadius: '5px',
    marginBottom: '15px',
  },
  artTitle: {
    fontSize: '1.5rem',
    margin: '10px 0',
  },
  description: {
    fontSize: '1rem',
  },
};

export default MedievalArtGallery;
