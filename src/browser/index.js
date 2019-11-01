import React from 'react'
import {hydrate} from 'react-dom'
import App from '../shared/App'
import {BrowserRouter} from 'react-router-dom'


hydrate(

            <App  />,
  
    document.getElementById('app')
)



