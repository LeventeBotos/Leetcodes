function diagonalSum(mat: number[][]): number {
    let list:number[] = []
    let i = 0
    while (i < mat.length) {
        list.push(mat[i][i])
        i++
    }
    let row = 0
    let col = mat.length - 1
    while (row < mat.length){
        if (col === row) {
            console.log("Already added")
            console.log(mat[row][col], row)
            row++
            col--
        } else {
            list.push(mat[row][col])
            row++
            col--
        }
    }
    i = 0
    let res:number = 0
    while (i < list.length) {
        res += list[i]
        i++
    }
    return(res)
};



diagonalSum([
    [1,2,3],
    [4,5,6],
    [7,8,9]])

// diagonalSum([
//     [1,1,1,1],
//     [1,1,1,1],
//     [1,1,1,1],
//     [1,1,1,1]])

// diagonalSum([[5]])

// function diagonalSum(mat: number[][]): number {
//     let list:number[] = []
//     console.log('1st while')
//     let i = 0
//     while (i < mat.length) {
//         list.push(mat[i][i])
//         console.log(list)
//         i++
//     }
//     console.log('2nd while')
//     let row = 0
//     let col = mat.length - 1
//     while (row < mat.length){
//         console.log(mat[row][col], row, col)
//         let ram:number = mat[row][col]
//         if (
//             //elso atlo n edik eleme megegyezik e length + n edik elemmel
//             col === row
//         ) {
//             console.log("Already added")
//             console.log(mat[row][col], row)
//             console.log(list)
//             row++
//             col--
//         } else {
//             list.push(mat[row][col])
//             console.log(list)
//             row++
//             col--
//         }
//     }
//     i = 0
//     let res:number = 0
//     while (i < list.length) {
//         console.log("hi", i)
//         res += list[i]
//         console.log(res)
//         i++
//     }
//     console.log('will return ', res)
//     return(res)
// };

// function diagonalSum(mat: number[][]): number {
//     let res = 0
//     console.log('1st while')
//     let i = 0
//     while (i < mat.length) {
//         res += mat[i][i]
//         console.log(res)
//         i++
//     }
//     console.log('2nd while')
//     let row = 0
//     let col = mat.length - 1
//     while (row < mat.length){
//         if (row === 1) {
//             console.log("Already added")
//             console.log(res)
//             row++
//             col--
//         } else {
//             res += mat[row][col]
//             console.log(res)
//             row++
//             col--
//         }

//     }


//     return(res)
// };

// diagonalSum([
//             [1,2,3],
//             [4,5,6],
//             [7,8,9]])

// diagonalSum([
//             [1,1,1,1],
//             [1,1,1,1],
//             [1,1,1,1],
//             [1,1,1,1]])

// export function add() {
//     const matrix: number[][] =  [
//             [1,2,3],
//             [4,5,6],
//             [7,8,9]]
//     let res = 0
//     console.log('1')
//     let i = 0
//     while (i < 3) {
//         res += matrix[i][i]
//         console.log(res)
//         i++
//     }
//     console.log('2')
//     i = 2
//     while (i > -1){
//         if (i === 1) {
//             console.log("Already added")
//             console.log(res)
//             i = i-1
//         } else {
//             res += matrix[i][i]
//             console.log(res)
//             i = i-1
//         }

//     }


//     return(res)
// }

// console.log("returned: ", add())


// Input: mat = [[1,2,3],
//               [4,5,6],
//               [7,8,9]]
// Output: 25
// Explanation: Diagonals sum: 1 + 5 + 9 + 3 + 7 = 25
// Notice that element mat[1][1] = 5 is counted only once.

// n == mat.length == mat[i].length
// 1 <= n <= 100
// 1 <= mat[i][j] <= 100

        // if (row === 1) {
        //     console.log("Already added")
        //     console.log(list)
        //     row++
        //     col--
        // } else {
        //     list.push(mat[row][col])
        //     console.log(list)
        //     row++
        //     col--
        // }