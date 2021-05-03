import { useState,useEffect } from "react"
import {getGifs} from "../helpers/getGif"


const useAxiosGifs = (category) => {
   const [state, setState] = useState({

        data:[],
        loading:true

   })

   useEffect(() => {

        getGifs(category).then(gifs=>{
            
            setState({
                data:gifs,
                loading:false
            })

        })
        }, [category])

return state

}

export default useAxiosGifs
