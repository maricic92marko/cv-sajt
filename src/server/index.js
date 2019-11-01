import express from 'express'
import cors from 'cors'
import {renderToString} from 'react-dom/server'
import App from '../shared/App'
import React from 'react'
import sendMail from './sendMail'
const bodyParser = require('body-parser')
const router = express.Router()
const app = express()
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json()); 
app.use(cors())
app.use(express.static('public'))

router.post('/send-message',(req,res)=>{

    let data = req.body.eMail
   let mailOptions = {
        from: data.email,
        to: 'maricic92marko@gmail.com',
        subject: `${data.Firstname} ${data.Lastname} posetio moj sajt/CV`,
        text: data.message,
    };
    sendMail(mailOptions)
        res.json(true)
        res.end()
})

router.get('/',(req,res)=>{

    let mailOptions = {
        from: "maricic92marko@gmail.com",
        to: 'maricic92marko@gmail.com',
        subject: `Neko je posetio moj sajt/CV`,
        text: 'Neko je posetio moj sajt/CV',
    };
    sendMail(mailOptions)

    const markup = renderToString(
        //<StaticRouter location={req.url} context={{url_data}}>
            <App />
       // </StaticRouter> 
)

res.send(`
    <!DOCTYPE html>
    <html>
        <head>
        <title>Marko Maricic</title>
        <meta name="Marko Maricic" 
        content="Innovative and creative with great analytical skills. Highly motivated, self tought
        with great desire for learning and improving programming skills." />
        <link rel="canonical" href="http://markomaricic.com" />
            <link rel="stylesheet" href="/main.css">
            <script src='/bundle.js' defer></script>
           
            </head>      
        <body>
            <div id='app'>${markup}</div>
        </body>
    </html>
    `)   

})

app.use(router)

app.listen(3000, () => {
    console.log('server is listening on port :3000')
})

