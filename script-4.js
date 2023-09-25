var arr = ['olma', 'nok', 'banan', 'olma', 'nok', 'banan', 'tarvuz'];

function DeleteMeva(name) {
    return arr.filter((value) => value !== name)
}

console.log(DeleteMeva('nok'));