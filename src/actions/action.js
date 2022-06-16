import {AccessKey, BasicUrl, CLICK_IMAGE, FETCH_ALL_IMAGES, IS_LOADING} from "../consts";
import axios from "axios";

const imgLibrary = [
  {
    des: "Crossing",
    url: "https://images.unsplash.com/photo-1506751470038-e579eb91f580?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyOTg3Mjl8MHwxfHNlYXJjaHwxfHxUb3JvbnRvfGVufDB8MHx8fDE2NTA2NTYyMjM&ixlib=rb-1.2.1&q=80&w=400",
  },
  {
    des: "body of water",
    url: "https://images.unsplash.com/photo-1507992781348-310259076fe0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyOTg3Mjl8MHwxfHNlYXJjaHwzfHxUb3JvbnRvfGVufDB8MHx8fDE2NTA2NTYyMjM&ixlib=rb-1.2.1&q=80&w=400",
  },
  {
    des: "city buildings",
    url: "https://images.unsplash.com/photo-1503206557829-9a9979ad1227?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyOTg3Mjl8MHwxfHNlYXJjaHw0fHxUb3JvbnRvfGVufDB8MHx8fDE2NTA2NTYyMjM&ixlib=rb-1.2.1&q=80&w=400",
  },
  {
    des: "city wallpapers",
    url: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max",
  },
  {
    des: "high-rise buildings",
    url: "https://images.unsplash.com/photo-1486325212027-8081e485255e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyOTg3Mjl8MHwxfHNlYXJjaHw1fHxUb3JvbnRvfGVufDB8MHx8fDE2NTA2NTYyMjM&ixlib=rb-1.2.1&q=80&w=400",
  },
];

//action creator (to create action):
export const fetchImageInAction = () => {
  console.log("fetch all images from action");
  return {
    type: FETCH_ALL_IMAGES,
    payload: imgLibrary
  };
};

//async action creator
export const fetchImageAPI = city => dispatch => {
  console.log("fetch all images from API");
  //set isLoading = true
  dispatch({
    type: IS_LOADING, //最好写成变量
    payload: true
  })
  //sending request
  axios.get(BasicUrl, {
    params: {
      query: city,
      orientation: 'landscape'
    },
    headers: {
      //change AccessKey
      Authorization: `Client-ID ${AccessKey}`
    }
  }).then(res => {
    let {data: {results}} = res
    let imageList = results.map(item => ({
      des: item.alt_description,
      url: item.urls.regular,
      // thumb: item.urls.thumb
    }))
    //set isLoading = false
    dispatch({
      type: IS_LOADING, //最好写成变量
      payload: false
    })

    console.log('async action data', imageList)
    dispatch({
      type: FETCH_ALL_IMAGES,
      payload: imageList
    })
  }).catch(err => console.log('fetch city http error!', err,
  dispatch({
    type: IS_LOADING, //最好写成变量
    payload: false
  }))
  //set isLoading = false

)
}

/**********************************************************************************/
//async action creator
export const fetchImageAPIAwait = city => async dispatch => {
  console.log("fetch all images from API Await");
  //set isLoading = true
  dispatch({
    type: IS_LOADING, //最好写成变量
    payload: true
  })

  try {
    //sending request
    let tempRes = await axios.get(BasicUrl, {
      params: {
        query: city,
        orientation: 'landscape'
      },
      headers: {
        //change AccessKey
        Authorization: `Client-ID ${AccessKey}`
      }
    })
    let {data: {results}} = tempRes
    let imageList = results.map(item => ({
      des: item.alt_description,
      url: item.urls.regular,
      // thumb: item.urls.thumb
    }))
    //set isLoading = false
    dispatch({
      type: IS_LOADING, //最好写成变量
      payload: false
    })

    console.log('async action data', imageList)
    dispatch({
      type: FETCH_ALL_IMAGES,
      payload: imageList
    })
  } catch (err) {
        console.log('fetch city http error! Await', err)
        dispatch({
          type: IS_LOADING, //最好写成变量
          payload: false        //set isLoading = false
        })
  }

}


export const clickImg = (index) => {
  console.log("clickImg");
  return {
    type: CLICK_IMAGE,
    payload: index
  };
};
// export {
//   fetchImageInAction
// }