// use os variables to dynamically render each body part
const HEAD = (
<div style={{
    width: "50px",
      height: "50px",
      borderRadius: "100%",
      border: "7px solid black",
      position: "absolute",
      top: "50px",
      right: "-30px",
    }}/>
)
const BODY = (
    <div
      style={{
        width: "7px",
        height: "100px",
        background: "black",
        position: "absolute",
        top: "120px",
        right: 0,
      }}
    />
  )

  const RT_HAND = (
    <div
      style={{
        width: "100px",
        height: "7px",
        background: "black",
        position: "absolute",
        top: "150px",
        right: "-100px",
        rotate: "-30deg",
        transformOrigin: "left bottom",
      }}
    />
  )
  
  const LFT_HAND = (
    <div
      style={{
        width: "100px",
        height: "7px",
        background: "black",
        position: "absolute",
        top: "150px",
        right: "10px",
        rotate: "30deg",
        transformOrigin: "right bottom",
      }}
    />
  )
  
  const RT_LEG = (
    <div
      style={{
        width: "100px",
        height: "7px",
        background: "black",
        position: "absolute",
        top: "210px",
        right: "-90px",
        rotate: "60deg",
        transformOrigin: "left bottom",
      }}
    />
  )
  
  const LFT_LEG = (
    <div
      style={{
        width: "100px",
        height: "7px",
        background: "black",
        position: "absolute",
        top: "210px",
        right: 0,
        rotate: "-60deg",
        transformOrigin: "right bottom",
      }}
    />
  )

const BODY_PARTS = [HEAD, BODY, RT_HAND, LFT_HAND, RT_LEG, LFT_LEG]

// new type 
  type HangmanFigureProps = {
    noOfGuesses : number
  }

const HangmanFigure = ({noOfGuesses}: HangmanFigureProps) => {
    return (
        <div style={{position:'relative',margin:'0 auto', maxWidth:'325px'}}>
            
            {BODY_PARTS.slice(0, noOfGuesses)}
            
            <div
                style={{
                    height: "50px",
                    width: "7px",
                    background: "black",
                    position: "absolute",
                    top: 0,
                    right: 0,
                }}
            />
            <div
                style={{
                    height: "7px",
                    width: "200px",
                    background: "black",
                    marginLeft: "120px",
                }}
            />
            <div
                style={{
                    height: "325px",
                    width: "7px",
                    background: "black",
                    marginLeft: "120px",
                }}
            />
            {/* <div style={{ height: "10px", width: "250px", background: "black" }} /> */}
        </div>
    )
}

export default HangmanFigure