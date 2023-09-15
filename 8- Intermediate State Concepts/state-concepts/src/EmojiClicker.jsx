import { useState } from "react";

export default function EmojiClicker () {
    const [emojis, setEmojis] = useState(["🙂"])
    const addEmoji = () => {
        setEmojis(oldEmojis => [...oldEmojis, "🙂"])
    } 
    return (
        <div>
            <p style={{fontSize: "4rem"}}>
                {emojis.map(emoji => <span>{emoji}</span>)}
            </p>
            
            <button onClick={addEmoji}>Add Emoji</button>
        </div>
    )
}