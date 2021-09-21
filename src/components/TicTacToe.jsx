import React from "react";

export default function TicTacToe() {

  const handleClick = e => {
    const target = e.target.closest('td')
    if (target && !target.classList.contains('td-active')) {
      target.className = 'td-active'
      target.textContent = "X"
    }
  }

  return (
    <main>
      <h1>Player X, it's your turn!</h1>
      <table cellSpacing={10} onClick={handleClick}>
        <tbody>
          <tr>
            <td className="td"><div className="dot" /></td>
            <td className="td"><div className="dot" /></td>
            <td className="td"><div className="dot" /></td>
          </tr>

          <tr>
            <td className="td"><div className="dot" /></td>
            <td className="td"><div className="dot" /></td>
            <td className="td"><div className="dot" /></td>
          </tr>
          <tr>
            <td className="td"><div className="dot" /></td>
            <td className="td"><div className="dot" /></td>
            <td className="td"><div className="dot" /></td>
          </tr>
        </tbody>
      </table>
    </main>
  );
}
