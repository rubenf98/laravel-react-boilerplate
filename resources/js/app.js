import React from 'react'
import { render } from 'react-dom'
import Routes from "./routes";
import { BrowserRouter } from "react-router-dom";

render(
    <BrowserRouter>
        <Routes />
    </BrowserRouter>,
    document.getElementById('index')
)