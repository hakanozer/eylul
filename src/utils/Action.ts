export const cal1 = () => {
    return new Promise<number>((resolve, reject) => {
        setTimeout(() => {
            console.log("cal1 call")
            resolve(1)
        }, 3000);
    })
}

export const cal2 = () => {
    return new Promise<number>((resolve, reject) => {
        setTimeout(() => {
            console.log("cal2 call")
            resolve(2)
        }, 2000);
    })
}

export const cal3 = () => {
    return new Promise<number>((resolve, reject) => {
        setTimeout(() => {
            console.log("cal3 call")
            resolve(3)
        }, 4000);
    })
}