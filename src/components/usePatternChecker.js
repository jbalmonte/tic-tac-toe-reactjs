
export default function useWinnerChecker() {
    return (snapShot) => {
        const matchPattern =
            snapShot
                .map(v => "XO".indexOf(v) < 0 ? '.' : v)
                .join``
                .padEnd(9, '.')
                .match(/(X|O)(..(\1|.\1.)..\1|.\1.\1..$|\1\1(...)*$)/)

        if (matchPattern) return (/X(..(X|.X.)..X|.X.X..$|XX(...))/.test(matchPattern) ? 'X' : 'O')
        return null
    }
}