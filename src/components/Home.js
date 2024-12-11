import React from 'react';
import './Homepage.css'; // Custom styles

const Homepage = () => {
  return (
    <div className="homepage">
      {/* Header Section */}
      <header className="homepage-header">
        <h1>Welcome to Indian Art Gallery</h1>
        <p>Explore the rich heritage of Indian art, from traditional to contemporary works by various artists across the country.</p>
      </header>

      {/* About Indian Art Section */}
      <section className="art-description">
        <h2>About Indian Art</h2>
        <p>India has a diverse history of art, ranging from the intricate carvings of ancient temples to the vibrant colors of modern-day paintings. Our gallery showcases a collection that represents various art forms including Madhubani, Tanjore, Warli, and more.</p>
        <p>Each region in India brings its own unique style and cultural influence to the art scene, making Indian art a reflection of its multifaceted traditions and modern innovations.</p>
      </section>

      {/* Featured Artworks Section */}
      <section className="art-images">
        <h2>Featured Artworks</h2>
        <div className="art-gallery">
          <img src="./image1.jpeg" alt="Traditional Indian Art 1" className="art-image" />
          <img src="./image2.jpeg" alt="Contemporary Indian Art 2" className="art-image" />
          <img src="./image3.jpeg" alt="Madhubani Painting" className="art-image" />
        </div>
      </section>

      {/* Mission Section */}
      <section className="gallery-mission">
        <h2>Our Mission</h2>
        <p>We aim to preserve and promote Indian art by providing a platform where artists and art enthusiasts can connect, celebrate creativity, and explore the beauty of Indian culture through its artwork.</p>
      </section>

      {/* Footer Section */}
      <footer className="homepage-footer">
        <p>Follow us on social media for the latest updates and exhibitions.</p>
        <p>Contact us: <a href="mailto:info@indianartgallery.com">info@indianartgallery.com</a></p>
      </footer>
    </div>
  );
};

export default Homepage;