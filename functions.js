export const stringToformula = (str) => {
    return Function('return ' + str)()
}