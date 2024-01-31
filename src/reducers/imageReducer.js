// reducers/imageReducer.js
import { NEXT_IMAGE, PREV_IMAGE } from '../actions';

const initialState = {
  images: [
    'https://www.adorama.com/alc/wp-content/uploads/2018/11/landscape-photography-tips-yosemite-valley-feature.jpg',
    'https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=612x612&w=0&k=20&c=A63koPKaCyIwQWOTFBRWXj_PwCrR4cEoOw2S9Q7yVl8=',
    'https://images.unsplash.com/photo-1503614472-8c93d56e92ce?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8fA%3D%3D',
    'https://www.shutterstock.com/image-photo/magic-pink-rhododendron-flowers-on-260nw-97696616.jpg',
    'https://media.istockphoto.com/id/1296913338/photo/sonoran-sunset.webp?b=1&s=612x612&w=0&k=20&c=NOSHXzJM2-drMgGa2kJAEVMMBQzPR7YAFOyJ-Y1LtAk=',
  ],
  currentIndex: 0,
};

const imageReducer = (state = initialState, action) => {
  switch (action.type) {
    case NEXT_IMAGE:
      return {
        ...state,
        currentIndex: (state.currentIndex + 1) % state.images.length,
      };
    case PREV_IMAGE:
      return {
        ...state,
        currentIndex: (state.currentIndex - 1 + state.images.length) % state.images.length,
      };
    default:
      return state;
  }
};

export default imageReducer;
