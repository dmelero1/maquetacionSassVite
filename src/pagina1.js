import './styles/main.scss';
import Header from './components/Header';
import BannerFoto from './components/BannerFoto.js';
import Cuerpo1 from './components/Cuerpo1.js';

document.getElementById('app').innerHTML = `
  ${Header()}
  ${BannerFoto()}
  ${Cuerpo1()}
`;
