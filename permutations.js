const allPermutations = (arr) => {
    const res = []

    const rec = (path, mem) => {
        if (path.length >= arr.length) return res.push(path)


        arr.forEach((el, i) => {
            if (!mem[i]) rec([...path, el], { ...mem, [i]: true })
        });
    }


    rec([], {})

    return res
}

console.log(allPermutations([1, 2, 3]))