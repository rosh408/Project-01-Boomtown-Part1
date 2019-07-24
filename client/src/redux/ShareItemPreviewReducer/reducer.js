// 1st step of creating a redux reducer
// actions
const UPDATE_ITEM = "UPDATE_ITEM";
const RESET_ITEM = "RESET_ITEM";
const RESET_ITEM_IMAGE = "RESET_ITEM_IMAGE";

// 2nd step call action
// action creators
export const updateItem = item => ({
  type: UPDATE_ITEM,
  payload: item
});
export const resetItem = () => ({
  type: RESET_ITEM
});
export const resetItemImage = () => ({
  type: RESET_ITEM_IMAGE
});

// 3rd step call initial state
const initialState = {
  title: "Name your item",
  description: "Describe your item",
  created: new Date(),
  itemowner: {},
  tags: [],
  imageurl: "http://via.placeholder.com/350x250?text=Please select an image"
};

// 4th step is to update the initial state
// action creators
export default (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_ITEM: {
      return {
        ...state,
        // this will replace your initial state
        ...action.payload
      };
    }
    case RESET_ITEM: {
      return {
        ...initialState
      };
    }
    case RESET_ITEM_IMAGE: {
      return {
        // this resets the image only
        ...state,
        imageurl: initialState.imageurl
      };
    }
    default:
      return state;
  }
};
