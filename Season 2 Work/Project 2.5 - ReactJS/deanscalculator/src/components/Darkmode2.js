import React, { useState, useEffect } from 'react';
import Dark from './../images/moon.svg'
import Light from './../images/sun.svg'
import './darkmode.css'
import Cookies from 'universal-cookie';

const cookies = new Cookies();


export default function Darkmode() {
    // darkmode switch
    const [darkmode, setDarkmode] = useState(cookies.get('darkmode') === 'false' ? false : true);

    useEffect(() => {
        try {
            var bodyTag = document.getElementById("body")
            darkmode === true ? bodyTag.classList.add("darkmodeDeAct") : bodyTag.classList.remove("darkmodeDeAct")
        } catch (err) { }
    }, [darkmode]);

    function LightOn() {
        setDarkmode(false);
        cookies.set('darkmode', false, { path: '/' });
    }
    function LightOff() {
        setDarkmode(true);
        cookies.set('darkmode', true, { path: '/' });
    }

    return (
    <div className="darkmode">
        <img className={darkmode ? "ON" : "OFF"} onClick={LightOff} src={Dark} alt="Dark" />
        <img className={darkmode ? "OFF" : "ON"} onClick={LightOn} src={Light} alt="Light" />
        </div >
)
}