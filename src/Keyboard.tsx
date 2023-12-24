import styles from "./Keyboard.module.css"

const KEYS = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
]

// type definition
type KeyboardProps = {
    activeLetters: string[];
    inactiveLetters: string[];
    // fn that takes string & returns nothing
    addGuessedLetter: (letter : string) => void;
    // disabled is an optional variable
    disabled?: boolean;
}

const Keyboard = ({activeLetters, inactiveLetters, addGuessedLetter, disabled = false}: KeyboardProps) => {
    return (
        <div style={{
            display: 'grid',
            gridTemplateColumns: "repeat(auto-fit, minmax(75px, 1fr))",
            gap: ".5rem",
        }}>
        
        {/* display each letter from above list on keyboard */}
        {KEYS.map(key => {

            const isActive = activeLetters.includes(key);
            const isInactive = inactiveLetters.includes(key);

            return (
                <button onClick={()=> addGuessedLetter(key)} 
                className={`${isActive ? styles.active : ""} ${
                    isInactive ? styles.inactive : ""
                  }` } 
                  disabled={isInactive || isActive || disabled} 
                    key={key}>
                {key}
                </button>
            )
        })}

        </div>
    )
}

export default Keyboard