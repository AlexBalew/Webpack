import Post from './post';
import './styles/styles.css'
import json from './assets/json.json'

const post = new Post('Webpack Post Title')

console.log('Post to String:', post.toString())
console.log('JSON:', json)