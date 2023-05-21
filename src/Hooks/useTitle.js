import { useEffect } from "react"

const useTitle = title=>{
    useEffect(()=>{
        document.title = `${title} - Animals Toys`;
    },[title])
}
export default useTitle;