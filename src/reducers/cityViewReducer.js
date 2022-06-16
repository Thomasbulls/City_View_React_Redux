import {CLICK_IMAGE, FETCH_ALL_IMAGES, IS_LOADING} from "../consts";
const initState = {
    imgLibrary: [],
    clickImgIndex: 0,
    isLoading: false
}
 export const cityViewReducer = (state=initState, action) => {
    switch (action.type) {
        case FETCH_ALL_IMAGES:
            console.log('images reducer is printing ...', action?.payload)
            return {...state, imgLibrary: action?.payload, clickImgIndex: 0}
        case CLICK_IMAGE:
            console.log('images reducer is printing ...', action?.payload)
            return {...state, clickImgIndex: action?.payload}
        case IS_LOADING:
            console.log('isLoading works')
            return {...state, isLoading: action?.payload}
        default:
            console.log('image reducer initial state')
            return state
    }
 }