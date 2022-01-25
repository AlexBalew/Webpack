import * as $ from 'jquery'
import Post from '@models/post'; //alias webpack config. Создаем абсолютный путь
import './styles/styles.css'
import json from './assets/json.json'
import WebpackLogo from './assets/webpack-logo' //расширение файла не пишем, т.к. они указаны в extensions webpack config
import xml from '@/assets/data.xml' //@ заменяет . или  src. alias webpack config
import csv from './assets/data.csv'

const post = new Post('Webpack Post Title', WebpackLogo)

$('pre').html(post.toString())

console.log('Post to String:', post.toString())
console.log('JSON:', json)
console.log('XML:', xml)
console.log('CSV:', csv)