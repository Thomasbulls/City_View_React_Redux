import "./App.css";
import CityInput from "./CityInput";
import {useSelector} from "react-redux";

import {useState} from "react";

import ImageList from "./ImageList";

function App() {

    const [images, setImages] = useState([])
    const updateImages = (newImages) => setImages(newImages)
    const imageLibrary = useSelector(state => state?.cityViewReducer?.imgLibrary)
    const index = useSelector(state => state?.cityViewReducer?.clickImgIndex)
    const isLoading = useSelector(state => state?.cityViewReducer?.isLoading)
    return <div className="App"
                style={{background: `url('${imageLibrary[index]?.url}') no-repeat center center/cover fixed`}}>
        <CityInput cbUpdateImages={updateImages}/>
        <ImageList images={images}/>

        {isLoading && <img src="https://c.tenor.com/FBeNVFjn-EkAAAAC/ben-redblock-loading.gif" alt="Loading"/>}
        {/*<p>*/}
        {/*    {JSON.stringify(imageLibrary)}*/}
        {/*</p>*/}
        {/*<ImageList images={}/>*/}

    </div>
}

export default App;
