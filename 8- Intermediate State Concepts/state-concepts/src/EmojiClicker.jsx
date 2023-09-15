import { useState } from "react";
import { v4 as uuid } from "uuid"

export default function EmojiClicker () {
    const [emojis, setEmojis] = useState([{id: uuid(), emoji: "🙂"}])
    const randomEmoji = () => {
        const choices = ["🙂", "🙁", "😂", "😝", "🥰", "🤩"]
        return choices[Math.floor(Math.random() * choices.length)]
    }

    const addEmoji = () => {    
        setEmojis(oldEmojis => [...oldEmojis, {id: uuid(), emoji: randomEmoji()}])
    } 
    const deleteEmoji = (id) => {
        setEmojis(oldEmojis => oldEmojis.filter(e => e.id !== id))
    }
    
    return (
        <div>
            <p style={{fontSize: "4rem"}}>
                {emojis.map(e => <span onClick={()=> deleteEmoji(e.id)} key={e.id}>{e.emoji}</span>)}
            </p>
            
            <button onClick={addEmoji}>Add Emoji</button>
        </div>
    )
}