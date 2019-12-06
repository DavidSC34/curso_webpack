import HelloWorldButton from './components/hello-world-button/hello-world-button.js';
import Heading from './components/heading/heading.js';
import _ from 'lodash';

const heading = new Heading();
heading.render(_.upperFirst('hello world'));

const helloWorldButton = new HelloWorldButton();
helloWorldButton.render();


const ten = 10;
if (process.env.NODE_ENV === 'production') {
    console.log('Modo de produccion');
}else if (process.env.NODE_ENV === 'development'){
  console.log('Modo de DEsarrollo')
}

//helloWorldButton.metodoQueNoExiste();
