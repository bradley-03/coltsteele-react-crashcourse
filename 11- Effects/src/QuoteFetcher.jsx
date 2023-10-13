const QUOTE_URL = "https://inspo-quotes-api.herokuapp.com/quotes/random"

import './QuoteFetcher.css'

import { useState } from "react"
import { useEffect } from "react"

export default function QuoteFetcher () {
    const [quote, setQuote] = useState({text: "", author: ""})

    useEffect(() => {
        fetchQuote()
    }, [])

    async function fetchQuote () {
        try { 
            const response = await fetch(QUOTE_URL)
            const jsonResponse = await response.json()
            setQuote(jsonResponse.quote)
        } catch (e) {
            console.log(e)
            setQuote({text: "Failed to fetch quote."})
        } 
    }

    return (
        <div className="QuoteFetcher">
            <h2>{quote.text}</h2>
            <h3>{quote.author}</h3>
            <button onClick={fetchQuote}>Get Quote</button>
        </div>
    )
}