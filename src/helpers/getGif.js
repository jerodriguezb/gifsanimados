import axios from "axios"
//import {getGifs} from "../helpers/getGifs.js"

export const getGifs=async (category)=> {

    const apikey='yGsEUd2oFkyppcVxZBZ5H2aB7uQLZRIf'
    const url=`https://api.giphy.com/v1/gifs/search?api_key=${apikey}&q={category}&limit=10`

    const resp= await axios(url)
    const {data}=resp.data
     // console.log(resp.data)
    const gifs=data.map(img=>{
        //console.log(data)
        return {
            id:img.id,
            title:img.title,
            url:img.images.downsized_medium.url
        }
    })

    return gifs

}

//export default getGifs //se agrego - no estaba esta linea