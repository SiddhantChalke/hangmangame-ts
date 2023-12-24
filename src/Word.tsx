// type definition
type HangmanWordProps = {
    guessedLetters : string[];
    word: string;
    reveal?: boolean;
};


const Word = ({ guessedLetters,word, reveal = false }: HangmanWordProps) => {

    return (
        <div style={{
            display: "flex",
            gap: ".25em",
            fontSize: "3rem",
            fontWeight: "bold",
            textTransform: "uppercase",
            fontFamily: "monospace",
        }}>

        {word.split('').map((letter, i) =>(
            <span style={{borderBottom:'2px solid black',margin:'0 auto'}} key={i}>
                <span 
                style={{
                    // if guessed-letter is right, show that letter, else... 
                    visibility:guessedLetters.includes(letter) || reveal ? 'visible':'hidden',
                    color:
                !guessedLetters.includes(letter) && reveal ? "red" : "black",
                    }}>
                    {letter}
                </span>
            </span>
        ))}

        </div>
    )
}

export default Word