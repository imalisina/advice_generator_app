import '../styles/globals.css';

// Application layout
import Header from '../layout/header';

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      {/* Header layout */}
      <Header />

      {/* Main app */}
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
