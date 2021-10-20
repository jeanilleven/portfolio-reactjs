import React from 'react'
import ReactTypingEffect from 'react-typing-effect'

function AboutDescription() {
  return (
    <>
      <ReactTypingEffect
        speed = {50}
        eraseSpeed = {30}
        eraseDelay ={2500}
        typingDelay = {100}
        text={["Jean.", "a teamplayer.", "hardworking.", "a goal-getter."]}
        cursorRenderer={cursor => <h1>{cursor}</h1>}
        displayTextRenderer={(text, i) => {
          return (
            <h3>
              {text.split('').map((char, i) => {
                const key = `${i}`;
                return (
                  <span
                    key={key}
                    style={{color: 'blueviolet'}}
                  >{char}</span>
                );
              })}
            </h3>
          );
        }}        
      />
    </>
  );
}

export default AboutDescription