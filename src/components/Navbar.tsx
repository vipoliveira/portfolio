import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 72px;
  background-color: #ffffff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
  z-index: 1000;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Logo = styled(Link)`
  font-size: 1.5rem;
  font-weight: 700;
  color: #000000;
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover {
    color: #666666;
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;
`;

const NavLink = styled(Link)`
  color: #000000;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease;

  &:hover {
    color: #666666;
  }
`;

const Navbar = () => {
  const { t } = useTranslation();

  return (
    <Nav>
      <Logo to="/">vipoliveira</Logo>
      <NavLinks>
        <NavLink to="/">{t('nav.home')}</NavLink>
        <NavLink to="/work">{t('nav.work')}</NavLink>
        <NavLink to="/contact">{t('nav.contact')}</NavLink>
      </NavLinks>
    </Nav>
  );
};

export default Navbar; 