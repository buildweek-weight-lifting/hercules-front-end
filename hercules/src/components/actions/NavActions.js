export const TOGGLE_DROP = "TOGGLE_DROP";

export const toggleDrop = (dropped) => {
  return{
    type: TOGGLE_DROP,
    payload: dropped
  }
};