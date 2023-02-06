import React from 'react'
import ReactDOM from 'react-dom/client'

//let pPhysicalDOM = document.createElement('p')
//pPhysicalDOM.innerText = 'Hello physical DOM world!'
//document.body.appendChild(pPhysicalDOM)

const pVirtualDOM = React.createElement('p', null, 'Hello virtual DOM world!')
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(pVirtualDOM)
