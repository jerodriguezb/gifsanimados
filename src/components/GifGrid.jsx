//import React, { useEffect, useState } from 'react'
import React from "react"
//import {getGifs} from "../helpers/getGif.js" // se reemplazo x {getGifs}
import useAxiosGifs from '../hooks/useAxiosGifs.jsx'
import GifGridItem from './GifGridItem.jsx'
import Loading from "./Loading"
// import axios from "axios"

const GifGrid = ({category}) => {

    const {data,loading}=useAxiosGifs(category)

    // const [images, setImages] = useState({
    //     data:[],
    //     loading:true,
    // })

    // useEffect(() => {

    //     getGifs(category).then(gifs=>{

    //         //console.log(gifs)
    //         setImages({
    //             data:gifs,
    //             loading:false,
    //         })
    
    //     })
    // }, [category])


    // const apikey='yGsEUd2oFkyppcVxZBZ5H2aB7uQLZRIf'
    // const url=`https://api.giphy.com/v1/gifs/search?api_key=${apikey}&q=${category}&limit=10
    // `
    // const getGifs=async ()=> {

    //     const resp= await axios(url)
    //     const {data}=resp.data
    //     // console.log(data)
    //     const gifs=data.map(img=>{
    //         return {
    //             id:img.id,
    //             title:img.title,
    //             url:img.images.downsized_medium.url
    //         }
    //     })

    //     return gifs


    // }

        return (
            <div>
                
                <h3>{category}</h3>

                <div className="container">
                    {loading && <Loading />}
                        {data.map(img=>{
                        return <GifGridItem img={img} key={img.id}/>

                     
                    })}
                </div>
            </div>
        )
    }

export default GifGrid

