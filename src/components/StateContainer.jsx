
export default function StateContainer({ stateID, snapShots, handleCurrentStateClick }) {
    return (
        <div className="state-container">
            <button className={`btn-state btn-state-${stateID === -1 ? '' : 'in'}active`} onClick={handleCurrentStateClick(-1)}>0</button>
            {
                snapShots.map((_, index) =>
                    <button className={`btn-state btn-state-${stateID === index ? '' : 'in'}active`} key={index} onClick={handleCurrentStateClick(index)}>{index + 1}</button>
                )
            }
        </div>
    )
}
