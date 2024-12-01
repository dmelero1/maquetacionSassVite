import './styles/main.scss';
import Header from './components/Header';
import BannerTexto from './components/BannerTexto';
import Cuerpo2 from './components/Cuerpo2';
import Footer from './components/Footer';

document.getElementById('app').innerHTML = `
  ${Header()}
  ${BannerTexto()}
  ${Cuerpo2()}
  ${Footer()}
`;
