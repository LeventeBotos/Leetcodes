function checkB(a, b, nums, target) {
    b = 1;
    while (b < nums.length) {
        if (nums[a] + nums[b] === target) {
            return b;
        }
        else {
            b++;
        }
    }
    return b;
}
function twoSum(nums, target) {
    var res = [];
    var a = 0;
    var b = 1;
    var now = nums[a] + nums[b];
    while (now !== target) {
        b = checkB(a, b, nums, target);
        if (nums[a] + nums[b] === target) {
            break;
        }
        else {
            while (a < nums.length - 1) {
                a++;
                b = checkB(a, b, nums, target);
                if (nums[a] + nums[b] === target && a != b) {
                    break;
                }
            }
        }
        now = nums[a] + nums[b];
    }
    res = [a, b];
    return res;
}
// function checkB(a: number, b: number, nums: number[], target: number) {
//     b = 1
//     while (b < nums.length) {
//       if (nums[a] + nums[b] === target) {
//         return b;
//       } else {
//         b++;
//       }
//     }
//     return b;
//   }
//   function checkA(a: number, b: number, nums: number[], target: number) {
//     while (a < nums.length - 1) {
//       a++;
//       b = checkB(a, b, nums, target);
//       if (nums[a] + nums[b] === target && a != b) {
//         break;
//       }
//     }
//     let ret:number[] = [a, b]
//     return(ret)
//   }
//   function twoSum(nums: number[], target: number): number[] {
//     let res: number[] = [];
//     let a: number = 0;
//     let b: number = 1;
//     let now: number = nums[a] + nums[b];
//     while (now !== target && a < nums.length - 1) {
//       b = checkB(a, b, nums, target)
//       if (nums[a] + nums[b] === target) {
//         break;
//       } else {
//         let ret = checkA(a, b, nums, target);
//         a = ret[0]
//         b = ret[1]
//       }
//       now = nums[a] + nums[b];
//     }
//     res = [a, b];
//     return res;
//   }
// function checkB(a: number, b: number, nums: number[], target: number) {
//     b = 1
//     while (b < nums.length) {
//       if (nums[a] + nums[b] === target) {
//         console.log('found');
//         console.log(b);
//         return b;
//       } else {
//         console.log('not yet');
//         b++;
//       }
//     }
//     return b;
//   }
//   function checkA(a: number, b: number, nums: number[], target: number) {
//     while (a < nums.length - 1) {
//       a++;
//       b = checkB(a, b, nums, target);
//       if (nums[a] + nums[b] === target) {
//         console.log('found');
//         break;
//       } else {
//         console.log('not yet');
//       }
//     }
//     let ret:number[] = [a, b]
//     return(ret)
//   }
//   function twoSum(nums: number[], target: number): number[] {
//     let res: number[] = [];
//     console.log(res);
//     console.log(nums, target);
//     let a: number = 0;
//     let b: number = 1;
//     let now: number = nums[a] + nums[b];
//     while (now !== target && a < nums.length - 1) {
//       console.log('not');
//       b = checkB(a, b, nums, target)
//       if (nums[a] + nums[b] === target) {
//         console.log('founnd')
//         break;
//       } else {
//         console.log('checka')
//         let ret = checkA(a, b, nums, target);
//         a = ret[0]
//         b = ret[1]
//       }
//       now = nums[a] + nums[b];
//       console.log(nums[a], nums[b], now);
//     }
//     res = [a, b];
//     console.log(res)
//     return res;
//   }
// function checkB(a:number, b:number, nums:number[], target:number) {
//     while (b < nums.length +1) {
//       if (nums[a] + nums[b] == target) {
//             console.log('found')
//             console.log(b)
//             break
//         }
//         else {
//             console.log('not yet')
//             b++
//         }
//     }
//     return(b)
// }
// function checkA(a:number, b:number, nums:number[], target:number) {
//     while (b < nums.length) {
//         b++
//         if (nums[a] + nums[b] == target) {
//             console.log('found')
//             console.log(b)
//             break
//         }
//         else {
//             console.log('not yet')
//         }
//     }
//     return(b)
// }
// function twoSum(nums: number[], target: number): number[] {
//     let res:number[] = []
//     console.log(res)
//     console.log(nums, target)
//     let a:number = 0
//     let b:number = 1
//     let now:number = nums[a] + nums[b]
//     while (now != target) {
//         console.log('not')
//         b = checkB(a, b, nums, target)
//         now = nums[a] + nums[b]
//         while (true) {
//             if (now == target) {
//                 break
//             }
//             else {
//                 a++
//                 checkB(a, b, nums, target)
//             }
//         }
//         console.log(nums[a], nums[b], now)
//         // while (b < nums.length) {
//         //     b++
//         //     now = nums[a] + nums[b]
//         //     if (now == target) {
//         //         console.log('found')
//         //         console.log(b)
//         //         break
//         //     }
//         //     else {
//         //         console.log('not yet')
//         //     }
//         // }
//     }
//     res = [a, b]
//     return(res)
// };
twoSum([3, 2, 4], 6);
