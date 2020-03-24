import { useEffect, useState } from 'react'

const isObject = (suspect) => typeof suspect == 'object'
const isNumber = (suspect) => ! isNaN(suspect)

const getType = (suspect) => {
    if (isObject(suspect))
        return 'object'

    if (isNumber(suspect))
        return 'number'

    return 'string'
}

const get = (key, value) => {
    if (getType(value) == 'object')
        return JSON.parse(localStorage.getItem(key))

    if (getType(value) == 'number')
        return Number(localStorage.getItem(key))

    return localStorage.getItem(key)
}

const set = (key, value) => {
    localStorage.setItem(key, getType(value) == 'object' ? JSON.stringify(value) : value)
}

export const useLocalStorage = (key, value) => {
    const [getter, setter] = useState(get(key, value) || value)

    useEffect(() => {
        set(key, getter)
    }, [getter])

    return [getter, setter]
}
