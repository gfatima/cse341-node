import express from 'express'
import { url } from 'inspector'
import {dirname, join} from 'path'
import {fileURLToPath} from 'url'

const app = express ()


const __dirname = dirname (fileURLToPath(import.meta.url))
console.log(url); 
console.log(__dirname); 

app.set('views', join(__dirname, '../views'))
app.set('views')
app.set('view engine', 'ejs')

app.get ('/', (req, res) => res.render('index'))

app.listen(3000)
console.log('Ivette Casas, Server is listening on port', 3000);