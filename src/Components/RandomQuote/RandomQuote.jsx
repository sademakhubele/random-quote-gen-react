import React, { useState } from 'react'
import './RandomQuote.css'
import twitter_icon from '../Assets/twitter.png'
import reload_icon from '../Assets/reloadd.png'

const RandomQuote = () => {

    let quotes = [];

    async function loadQuotes() {
        const response = await fetch("https://type.fit/api/quotes");
        quotes = await response.json();
    }

    const random = () => {
        const select = quotes[Math.floor(Math.random()*quotes.length)];
        setQuote(select);
    }

    const twitter = ()=>{
        window.open(`https://twitter.com/intent/tweet?text=${quote.text} - ${quote.author.split(',')[0]}`)
    }
    
    const [quote,setQuote] = useState({
        text:"I am in the right place at the right time, doing the right thing",
        author:"Louise Hay"
    });

    loadQuotes();
  return (


    <div className='container'>
        <div className="quote">{quote.text}</div>
        <div>
            <div className="line"></div>
            <div className="bottom">
                <div className="author">-{quote.author.split(',')[0]}</div>
                <div className="icon">
                    <img src={reload_icon} onClick={()=>{random()}} alt="" />
                    <img src={twitter_icon} onClick={()=>{twitter()}} alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default RandomQuote
