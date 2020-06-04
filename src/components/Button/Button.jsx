import React from 'react'
import './button.scss'
//import buttonStyles from './button.scss'


const Button = () => {
    return (
        <button className='button'>Click Me!</button>
    );
}

export default Button;


/*
Preprocesadores (SASS)

Previamente tener instalado Yarn

yarn:
npm i -g yarn
yarn -v


1. Abrir una terminal/consola de comandos
2. Movernos a la carpeta correcta
3. instalar SASS con 'npm' o 'yarn'

yarn add node-sass (recomendado!)
npm i node-sass

4. Debemos cambiar la extension de nuestros '.css' por '.scss' y corregir las importaciones con la nueva extension.

5. Si no funciona debemos relanzar el proyecto.


*/