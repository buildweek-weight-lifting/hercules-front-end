export const LEFT = "LEFT"
export const RIGHT = "RIGHT"

export const goLeft = (carouselIndex) => {
  return{
    type: LEFT,
    payload: carouselIndex
  }
};

export const goRight = (carouselIndex) => {
  return{
    type: RIGHT,
    payload: carouselIndex
  }
};