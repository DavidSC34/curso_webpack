import Kiwi from './Kiwi.jpg';
import './kiwi-image.css';

class KiwiImage{

  render(){
     const img = document.createElement('img');
     img.src = Kiwi;
     img.alt = 'Kiwi';
     img.classLsit.add('kiwi-image');

     const bodyElement = document.querySelector('body');
     bodyElement.appenChild(img);
  }
}

export default KiwiImage;
