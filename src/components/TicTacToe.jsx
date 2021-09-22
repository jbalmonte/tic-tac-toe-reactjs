import React from "react";

export default function TicTacToe() {

  const handleClick = e => {
    const target = e.target.closest('button')
    if (target) {
      target.className = 'element-active'
      target.textContent = "X"
    }
  }

  return (
    <main>
      <h1>Player X, it's your turn!</h1>
      <table onClick={handleClick}>
        <tbody>
          <tr>
            <td><button className="element" >.</button></td>
            <td><button className="element" >.</button></td>
            <td><button className="element" >.</button></td>
          </tr>

          <tr>
            <td><button className="element" >.</button></td>
            <td><button className="element" >.</button></td>
            <td><button className="element" >.</button></td>
          </tr>
          <tr>
            <td><button className="element" >.</button></td>
            <td><button className="element" >.</button></td>
            <td><button className="element" >.</button></td>
          </tr>
        </tbody>
      </table>
      <div className="state-container">
        <button className="btn-state" onClick={e => e.target.className = "btn-state-active"}>0</button>
        <button className="btn-state" onClick={e => e.target.className = "btn-state-active"}>1</button>
        <button className="btn-state" onClick={e => e.target.className = "btn-state-active"}>2</button>
      </div>
      <button className="btn-restart">Restart</button>
    </main>
  );
}
