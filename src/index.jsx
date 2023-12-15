import React from 'react'
import {createRoot} from 'react-dom'
import App from './App'
import "./firebase-config"

createRoot(document.getElementById("root")).render(
    <App />
)