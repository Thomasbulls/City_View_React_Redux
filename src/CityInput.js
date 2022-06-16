import {useEffect, useState} from "react";
import "./CityInput.scss";
import {AccessKey, BasicUrl, DefaultCity} from "./consts";
import axios from "axios";
import {useDispatch} from "react-redux";
import {fetchImageAPI, fetchImageAPIAwait, fetchImageInAction} from "./actions/action";

const CityInput = ({cbUpdateImages}) => {
    const dispatch = useDispatch()
    const [city, setCity] = useState(DefaultCity)
    const [images, setImages] = useState([])

    //load imageList in local component
    // useEffect(() => fetchCity(city), [city])

    //load imageList in action
    // useEffect(() => {
    //     dispatch(fetchImageInAction())
    // },[])
    // useEffect(() => {
    //     dispatch(fetchImageAPI(city))
    // },[city])
    useEffect(() => {
        dispatch(fetchImageAPIAwait(city))
    },[])
    //event handler for key down
    const cbInput = (evt) => {
        let newCity = evt.target.value.trim().toLowerCase()
        newCity !== city && setCity(newCity)
    }

    const fetchCity = city =>
        axios.get(BasicUrl, {
            params: {
                query: city,
                orientation: 'landscape'
            },
            headers: {
                Authorization: `Client-ID ${AccessKey}`
            }
        }).then(res => {
            let {data: {results}} = res
            let imageList = results.map(item => ({
                des: item.alt_description,
                regular: item.urls.regular,
                thumb: item.urls.thumb
            }))
            setImages(imageList)
            cbUpdateImages(imageList)
            console.log('tidied data', imageList)

        }).catch(err => console.log('fetch city http error!', err))


    return (
        <div className="searchBar">
            <input
                className="inputCity"
                type="text"
                placeholder="Search City here ..."
                onChange={cbInput}
            />
            <button onClick={() => {
                dispatch(fetchImageInAction())
            }}>Use action</button>
            <button onClick={()=>{
                dispatch(fetchImageAPI(city))
            }}>Fetch img from API</button>
            <button onClick={()=>{
                dispatch(fetchImageAPIAwait(city))
            }}>API Await</button>
            {/*{JSON.stringify(images)}*/}
        </div>
    )
}

export default CityInput