const nums = [1,2,3,4,5,6,7,8,9,10]

for (let x in nums){
    if (x == 5){
        break // desvio de fluxo para o bloco FOR
    } 
    console.log(`${x} = ${nums[x]}`)
}
console.log('\n')
for (let y in nums){
    if (y == 5) {
        continue // Ele interrompe a reptição corrente 
    }
    console.log(`${y} = ${nums[y]}`)
}

externo: for (a in nums) {
    for (b in nums){
        if (a == 2 && b == 3){
            break externo
            console.log(`Par = ${a}, ${b}`)
        }
    }
}