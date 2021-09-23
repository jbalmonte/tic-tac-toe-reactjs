
export default function Label({ winner, entriesLength, player }) {
    return (
        <h1>
            {
                winner ?
                    `Winner: Player ${winner} 🎉🥳` :
                    entriesLength === 9 ?
                        `Nobody won.`
                        :
                        `Player ${player}, it's your turn!`
            }
        </h1 >
    )
}
