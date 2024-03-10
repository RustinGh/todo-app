import { useEffect, useState } from "react"
import { getStorageItem, setStorageItem } from "../utills/LocalStorage"

const useLocalSrorage = (key, value) => {

    const [state, setState] = useState(
        getStorageItem(key) ?? value

    )
    useEffect(() => {
        setStorageItem(key, state)
    }, [state])
    return [state, setState]
}
export default useLocalSrorage