import Container from 'react-bootstrap/Container';

import MyBreadCrumbs from './MyBreadCrumbs';
import MyCarousel from './MyCarousel';
import MyDropdown from './MyDropdown';
import MyListGroup from './MyListGroup';
import MyNav from './MyNav';
import MyTabs from './MyTabs';

import './App.css'

export default function App() {
  return (
    <Container>
      <h1>BreadCrumbs</h1>
      <MyBreadCrumbs />
      <h4>
        TODO: Try to implement the other React-Bootstrap Components
      </h4>
    </Container>
  )
}
