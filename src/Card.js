import './Card.css';
import Profile from './components/Profile';
import CardBody from './components/CardBody';
import Footer from './components/Footer';

export default function Card() {
  return (
    <div className="c-card__item">
      <Profile />
      <CardBody />
      <Footer />
    </div>
  )
}
