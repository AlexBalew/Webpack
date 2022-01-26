import React from 'react'
import { render } from 'react-dom';
import * as $ from 'jquery'
import Post from '@models/post'; //alias webpack config. Создаем абсолютный путь
import './styles/styles.css'
import json from './assets/json.json'
import WebpackLogo from './assets/webpack-logo' //расширение файла не пишем, т.к. они указаны в extensions webpack config
import xml from '@/assets/data.xml' //@ заменяет . или  src. alias webpack config
import csv from './assets/data.csv'
import './babel'

const post = new Post('Webpack Post Title', WebpackLogo)

//$('pre').addClass('code').html(post.toString()) // jquery не работает с реакт, см пред. комм.

const App = () => {
    return <div className="container">
        <h2>Getting to know Webpack</h2>
        <br/>
        <div className="logo"/>
        <br/>
        <pre/>
        <br/>
        <div className="card">
            <h2>sass</h2>
        </div>
    </div>
}

render(<App/>, document.getElementById('app'))

console.log('Post to String:', post.toString())
console.log('JSON:', json)
console.log('XML:', xml)
console.log('CSV:', csv)