import { useEffect } from 'react'
import { useState } from 'react'
import "./style.css"

function App() {
  const [quotes, setQuotes] = useState([])
  const [currentQuote, setCurrentQuote] = useState(0)

  useEffect(() => {
    fetch('https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json')
    .then(response => response.json()).then(response => {
      setQuotes(response.quotes)
      setCurrentQuote(Math.floor(Math.random() * response.quotes.length - 1))
    })
    .catch(err => console.error(err))
  }, [])

  function newQuote() {
    console.log(quotes, quotes.length)
    setCurrentQuote(Math.floor(Math.random() * quotes.length - 1))
  }

  return (
    <div id="wrapper">
      <div id="quote-box">
        <div className="quote-text">
          <p id="text">
            {
              quotes.length > 0 ?
                String(quotes[currentQuote].quote)
              :
                null
            }
          </p>
        </div>
        <div className="quote-author">
          <p id="author">- 
            {
              quotes.length > 0 ?
              String(quotes[currentQuote].author)
            :
              null
            }
          </p>
        </div>
        <div className="buttons">
          <a
            className="button"
            id="tweet-quote"
            title="Tweet this quote!"
            target="_top"
          >
            Twitter
          </a>
          <a
            className="button"
            id="tumblr-quote"
            title="Post this quote on tumblr!"
            target="_blank"
          >
            Tumblr
          </a>
          <button className="button" id="new-quote" onClick={() => newQuote()}>New quote</button>
        </div>
      </div>
    </div>
  )
}

export default App
