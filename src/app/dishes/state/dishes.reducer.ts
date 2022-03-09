import {createAction, createReducer, on} from "@ngrx/store";

export const dishesReducer = createReducer(
  { viewMore: true },
  on(createAction('[Dish] View more Dishes'), state => {
    return {
      ...state,
      viewMore: !state.viewMore
    }
  })
)
