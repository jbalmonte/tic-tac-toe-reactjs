import createPersistedState from "use-persisted-state";
const usePersistedStorage = createPersistedState('snapShots')

export default function usePersistedState(initialValue) {
    const [snapShots, setSnapShots] = usePersistedStorage(initialValue)
    const restart = () => setSnapShots([])

    const push = (prevState, index, entry) => {
        setSnapShots(prev => {
            let newState = [...prevState, ...new Array(9 - prevState.length)]
            newState[index] = entry
            return [...prev.slice(0, newState.filter(v => v).length - 1), newState]
        })
    }

    return {
        snapShots,
        push,
        restart
    }
}