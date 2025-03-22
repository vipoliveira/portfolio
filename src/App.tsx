import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';
import theme from './theme';
import GlobalStyle from './styles/GlobalStyle';
import AppContainer from './styles/AppContainer';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Work from './pages/Work';
import Resume from './pages/Resume';
import Contact from './pages/Contact';
import GoogleAnalytics from './components/GoogleAnalytics';

const MainContent = styled.main`
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  flex: 1;
`;

function App() {
  return (
    <I18nextProvider i18n={i18n}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Router>
          <GoogleAnalytics />
          <AppContainer>
            <Navbar />
            <MainContent
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/work" element={<Work />} />
                <Route path="/resume" element={<Resume />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </MainContent>
            <Footer />
          </AppContainer>
        </Router>
      </ThemeProvider>
    </I18nextProvider>
  );
}

export default App;
