import Header from './components/Header';
import Hero from './components/Hero';
import Gallery from './components/Gallery';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

const styles: { [key: string]: React.CSSProperties } = {
  app: {
    minHeight: '100dvh',
    // If you want a gradient only:
    background: 'linear-gradient(180deg, #ffffff 0%, #f8fafc 100%)',
    // Or combine gradient + image (uncomment and set your URL):
    // backgroundImage: 'linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(248,250,252,1) 100%), url("https://your-cdn/image.jpg")',
    // backgroundSize: 'cover',
    // backgroundPosition: 'center',
    color: '#0f172a',
    display: 'flex',
    flexDirection: 'column',
  },
  main: {
    flex: 1,
    width: '100%',
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 24px',
  },
  section: {
    padding: '64px 0',
    borderBottom: '1px solid rgba(15, 23, 42, 0.06)',
  },
  sectionLarge: {
    padding: '96px 0 64px',
    borderBottom: '1px solid rgba(15, 23, 42, 0.06)',
  },
};

export default function App() {
  return (
    <div style={styles.app}>
      <Header />
      <main style={styles.main}>
        <section id="home" style={styles.sectionLarge}>
          <div style={styles.container}>
            <Hero />
          </div>
        </section>

        <section id="work" style={styles.section}>
          <div style={styles.container}>
            <Gallery />
          </div>
        </section>

        <section id="contact" style={styles.section}>
          <div style={styles.container}>
            <ContactForm />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
