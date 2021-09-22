import React, { useState, useEffect } from "react";
import usePersistedState from "./usePersistedState";

export default function TicTacToe() {
  const { entries, push, restart } = usePersistedState([], 'entries')
  const [playerXTurn, setPlayerXTurn] = useState(true)
  const [winner, setWinner] = useState(null)

  useEffect(() => {
    if (entries.length >= 5) {
      const matchPattern =
        entries
          .map(v => "XO".indexOf(v) < 0 ? '.' : v)
          .join``
          .padEnd(9, '.')
          .match(/(X|O)(..(\1|.\1.)..\1|.\1.\1..$|\1\1(...)*$)/)
      if (matchPattern) {
        setWinner(/X(..(X|.X.)..X|.X.X..$|XX(...))/.test(matchPattern) ? 'X' : 'O')
      }
    }
  }, [entries])


  const handleClick = e => {
    const target = e.target.closest('button')
    if (target && !winner && !target.classList.contains('element-active')) {
      const entry = playerXTurn ? 'X' : 'O'
      target.className = 'element-active'
      target.textContent = entry
      push(target.id - 1, entry)
      setPlayerXTurn(prev => !prev)
    }
  }

  const handleRestart = () => {
    restart();
    setWinner(null)
    setPlayerXTurn(true)
  }

  return (
    <main>

      <h1>
        {
          winner ?
            `Winner: Player ${winner} 🎉🥳` :
            entries.length === 9 ?
              `Nobody won.`
              :
              `Player ${playerXTurn ? 'X' : 'O'}, it's your turn!`
        }
      </h1 >

      <table onClick={handleClick}>
        <tbody>
          <tr>
            <td><button id="1" className={`element${'XO'.indexOf(entries[0]) >= 0 || winner !== null ? '-active' : ''}`}>{entries[0] || '.'}</button></td>
            <td><button id="2" className={`element${'XO'.indexOf(entries[1]) >= 0 || winner !== null ? '-active' : ''}`}>{entries[1] || '.'}</button></td>
            <td><button id="3" className={`element${'XO'.indexOf(entries[2]) >= 0 || winner !== null ? '-active' : ''}`}>{entries[2] || '.'}</button></td>
          </tr>

          <tr>
            <td><button id="4" className={`element${'XO'.indexOf(entries[3]) >= 0 || winner !== null ? '-active' : ''}`}>{entries[3] || '.'}</button></td>
            <td><button id="5" className={`element${'XO'.indexOf(entries[4]) >= 0 || winner !== null ? '-active' : ''}`}>{entries[4] || '.'}</button></td>
            <td><button id="6" className={`element${'XO'.indexOf(entries[5]) >= 0 || winner !== null ? '-active' : ''}`}>{entries[5] || '.'}</button></td>
          </tr>
          <tr>
            <td><button id="7" className={`element${'XO'.indexOf(entries[6]) >= 0 || winner !== null ? '-active' : ''}`}>{entries[6] || '.'}</button></td>
            <td><button id="8" className={`element${'XO'.indexOf(entries[7]) >= 0 || winner !== null ? '-active' : ''}`}>{entries[7] || '.'}</button></td>
            <td><button id="9" className={`element${'XO'.indexOf(entries[8]) >= 0 || winner !== null ? '-active' : ''}`}>{entries[8] || '.'}</button></td>
          </tr>
        </tbody>
      </table >
      <div className="state-container">
        <button className="btn-state" onClick={e => e.target.className = "btn-state-active"}>0</button>
        <button className="btn-state" onClick={e => e.target.className = "btn-state-active"}>1</button>
        <button className="btn-state" onClick={e => e.target.className = "btn-state-active"}>2</button>
      </div>
      <button className="btn-restart" onClick={handleRestart}>Restart</button>
    </main >
  );
}
