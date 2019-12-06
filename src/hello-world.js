import HelloWorldButton from './components/hello-world-button/hello-world-button.js';
import Heading from './components/heading/heading.js';
import React from 'react';


const heading = new Heading();
heading.render('hello world');

const helloWorldButton = new HelloWorldButton();
helloWorldButton.render();


const ten = 10;
if (process.env.NODE_ENV === 'production') {
    console.log('Modo de produccion');
}else if (process.env.NODE_ENV === 'development'){
  console.log('Modo de DEsarrollo')
}

//helloWorldButton.metodoQueNoExiste();
