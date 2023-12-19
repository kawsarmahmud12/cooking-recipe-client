import { useEffect } from "react"

const useTitle = title =>{
    useEffect( () => {
        document.title = `${title} - Cooking Recipe`;
    },[title])
}

export default useTitle;