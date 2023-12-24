import { useCallback, useEffect, useState } from 'react'
import './App.css'
import words from './commonWords.json'
import HangmanFigure from './HangmanFigure'
import Word from './Word'
import Keyboard from './Keyboard'

function getNewWord() {
  // take a random num(0-1) x length of list....& round-up with floor
  // thus we have a random word from the list
  return words[Math.floor(Math.random() * words.length)]
}

function App() {
  // a callback fn that gets a word from the list
  const [word, setWord] = useState(getNewWord)

// letters we've already guessed, will be stored in array of type string
const[guessedLetters, setGuessedLetters] = useState<string[]>([]) 

// wrong letters guessed are those who are not in the Word to be guessed
const wrongGuesses = guessedLetters.filter(
  letter => !word.includes(letter)
)

// if no. of wrong guesses >= no. of body parts, then losser
const isLoser = wrongGuesses.length >= 6 ;

// if every letter of the Word is guessed, then winner
const isWinner = word.split('').every(letter => guessedLetters.includes(letter));


// fn to add letter in guessed letters list, every time a
// new letter is guessed...we re-run the fn
const addGuessedLetter = useCallback((letter : string) => {
  // if we've already guessed the letter right / have finished game
  // dont add any more letters to the list
  if(guessedLetters.includes(letter) || isLoser || isWinner) return;
  // else...
  setGuessedLetters(currentLetters => [...currentLetters, letter])

}, [guessedLetters, isLoser, isWinner]);

// for actual physical keyboard to be useful
useEffect(()=>{
  const handler = (e: KeyboardEvent)=>{
    const key = e.key;
    // if anything other than alphabets is pressed, return nothing (Ignore)
    if(!key.match(/^[a-z]$/)) return;
    // if alphabets pressed...
    e.preventDefault()
    // add the guessed letter
    addGuessedLetter(key)
  }
  document.addEventListener('keypress', handler)

  // cleanup
  return ()=>{
    document.removeEventListener('keypress', handler)
  }
},[])

// for ENTER = new game / page refresh
useEffect(() => {
  const handler = (e: KeyboardEvent) => {
    const key = e.key
    if (key !== "Enter") return

    e.preventDefault()
    setGuessedLetters([])
    setWord(getNewWord())
  }

  document.addEventListener("keypress", handler)

  return () => {
    document.removeEventListener("keypress", handler)
  }
}, [])

  return (
    <>
      <div className='game'>
        <div className='situation'>
          {isWinner && <p> <b>Won !</b> - Press 'Enter' for new game.</p>}
          {isLoser && <p> <b>How Dumb !</b> - Press 'Enter' to try again.</p>}
        </div>

        <HangmanFigure noOfGuesses={wrongGuesses.length} />
        
        <Word guessedLetters={guessedLetters} word={word} reveal={isLoser} />
        
        <div style={{alignSelf:'stretch', marginTop:'2rem'}}>
        
        <Keyboard activeLetters={guessedLetters.filter(letter=>
          word.includes(letter)  
          // active letters = letters guessed right
        )} 
        inactiveLetters={wrongGuesses}
        addGuessedLetter={addGuessedLetter} 
        disabled={isWinner || isLoser}
        />
        
        </div>
        
      </div>
    </>
  )
}

export default App
