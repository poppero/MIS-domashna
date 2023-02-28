
export const validateEmail = email => String(email).toLowerCase().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)


export const insertInHash = (arr, ele, key, obh = false) => {
    let a = [...arr]
    if (obh === true) {
        if (a[ele[key]] === null || a[ele[key]] === undefined) a[ele[key]] = []
        a[ele[key]].push(ele)
    }
    else a[ele[key]] = ele
    return a
}

export const removeFromHash = (arr, ele = null, key = null) => {
    let a = [...arr]
    if (ele === null) a[key] = null
    else a[ele[key]] = ele
    return a
}