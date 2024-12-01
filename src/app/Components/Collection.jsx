import Image from 'next/image';
import styles from '../Collections.module.css';

const Collections = () => {
  return (
    <section className={styles.collectionsSection} data-scroll-section>
      <h2 className={styles.title}  data-scroll 
  data-scroll-speed="1">
        <span>Featured</span> Collections
      </h2>
      <p className={styles.description}  data-scroll 
  data-scroll-speed="1">
        Explore our curated collection of timeless pieces, where bespoke craftsmanship meets modern style. 
        Find the perfect look for every occasion with Essosa Fashion.
      </p>

      <div className={styles.grid}>
        {/* Smaller images on the left */}
        <div className={styles.small_images_container}>
        <div className={styles.smallImages1}>
          <div className={styles.imageWrapper }  data-scroll 
  data-scroll-speed="3">
            <img src="/img1.png" alt="Dress 1"  />
          </div>
          <div className={styles.imageWrapper}  data-scroll 
  data-scroll-speed="1">
            <img src="/img2.png" alt="Dress 2"/>
          </div>
          </div>

          <div className={styles.smallImages2}>
          <div className={styles.imageWrapper}  data-scroll 
  data-scroll-speed="1">
            <img src="/img3.png" alt="Dress 3"/>
          </div>
          <div className={styles.imageWrapper}  data-scroll 
  data-scroll-speed="3">
            <img src="/img4.png" alt="Dress 4"/>
          </div>
        </div>
        </div>
        {/* Large image on the right */}
        <div className={styles.largeImage}  data-scroll 
  data-scroll-speed="2">
          <img src="/large.png" alt="Main Dress"  />
        </div>
      </div>

      <button className={styles.gallery} data-scroll data-scroll-speed="1">View Gallery</button>
    </section>
  );
};

export default Collections;
