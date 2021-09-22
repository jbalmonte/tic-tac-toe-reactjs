import createPersistedState from "use-persisted-state";
const usePersistedStorage = createPersistedState('entries')

export default function usePersistedState(initialValue) {
    const [entries, setEntries] = usePersistedStorage(initialValue)
    const restart = () => setEntries([])

    const push = (index, entry) => {
        setEntries(prev => {
            let array = [...prev]
            array[index] = entry
            return Array.apply(null, array)
        })
    }

    return {
        entries,
        push,
        restart
    }
}