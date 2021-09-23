import React, { useState, useEffect } from "react";
import Board from "./Board";
import Label from "./Label";
import StateContainer from "./StateContainer";
import useWinnerChecker from "./usePatternChecker";
import usePersistedState from "./usePersistedState";

export default function TicTacToe() {

  const { snapShots, push, restart } = usePersistedState([])
  const checkForWinner = useWinnerChecker()

  const [currentState, setCurrentState] = useState([])
  const [playerXTurn, setPlayerXTurn] = useState(true)
  const [winner, setWinner] = useState(null)
  const [currentStateID, setCurrentStateID] = useState()


  useEffect(() => {
    setCurrentState(snapShots[(snapShots.length - 1) || 0])
    setCurrentStateID(snapShots.length - 1)
  }, [snapShots])


  useEffect(() => {
    if ((currentState || []).join``.split(/[XO]/).length >= 5) {
      let result = checkForWinner(currentState)
      if (result) setWinner(result)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentState])


  const handleClick = e => {
    const target = e.target.closest('button')
    if (target && !winner && target.textContent === '.') {
      push(currentState || [], target.id - 1, playerXTurn ? 'X' : 'O')
      setPlayerXTurn(prev => !prev)
    }
  }

  const handleCurrentStateClick = id => e => {
    const newState = id >= 0 ? snapShots[id] : []
    const board = newState.join``
    setCurrentStateID(id)
    setCurrentState(newState)
    setWinner(null)
    setPlayerXTurn(board.split`X`.length === board.split`O`.length)
  }

  const handleRestart = () => {
    restart();
    setWinner(null)
    setPlayerXTurn(true)
    setCurrentState([])
  }


  return (
    <main>
      <Label
        winner={winner}
        entriesLength={currentState?.filter(v => v).length}
        player={playerXTurn ? 'X' : 'O'}
      />

      <Board
        handleClick={handleClick}
        winner={!!winner}
        board={currentState}
      />

      <StateContainer
        stateID={currentStateID}
        snapShots={snapShots}
        handleCurrentStateClick={handleCurrentStateClick}
      />
      <button className="btn-restart" onClick={handleRestart}>Restart</button>
    </main >
  );
}
