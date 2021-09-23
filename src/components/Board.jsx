import React from 'react'

export default function Board({ handleClick, board, winner }) {
    const isActive = id => ('XO'.indexOf(board?.[id]) >= 0 || winner)
    return (
        <table onClick={handleClick}>
            <tbody>
                <tr>
                    <td><button id="1" className={`element element-${isActive(0) ? '' : 'in'}active`}>{board?.[0] || '.'}</button></td>
                    <td><button id="2" className={`element element-${isActive(1) ? '' : 'in'}active`}>{board?.[1] || '.'}</button></td>
                    <td><button id="3" className={`element element-${isActive(2) ? '' : 'in'}active`}>{board?.[2] || '.'}</button></td>
                </tr>

                <tr>
                    <td><button id="4" className={`element element-${isActive(3) ? '' : 'in'}active`}>{board?.[3] || '.'}</button></td>
                    <td><button id="5" className={`element element-${isActive(4) ? '' : 'in'}active`}>{board?.[4] || '.'}</button></td>
                    <td><button id="6" className={`element element-${isActive(5) ? '' : 'in'}active`}>{board?.[5] || '.'}</button></td>
                </tr>
                <tr>
                    <td><button id="7" className={`element element-${isActive(6) ? '' : 'in'}active`}>{board?.[6] || '.'}</button></td>
                    <td><button id="8" className={`element element-${isActive(7) ? '' : 'in'}active`}>{board?.[7] || '.'}</button></td>
                    <td><button id="9" className={`element element-${isActive(8) ? '' : 'in'}active`}>{board?.[8] || '.'}</button></td>
                </tr>
            </tbody>
        </table >
    )
}
