import '../styles/globals.css';

// Layouts
import NavbarContainer from '../components/navbar/navbarContainer';

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      {/* App navbar layout */}
      <NavbarContainer />

      {/* Next App */}
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
