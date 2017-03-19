import { dec, inc } from '../framework/utils/fp'
import Actions from '../actions'
import { COUNT, RGB, SUBTITLE } from '../constants/stateKeys'
import {
  INCREMENT,
  DECREMENT,
  RESET,
  EDIT_SUBTITLE,
  UPDATE_RGB,
} from '../constants/actionTypes'
import { enableLogging } from '../framework'

/******************************************************************************
  Using a plain JS object to hold app state
*******************************************************************************/

const reducer = (state, action) => Actions.case({
  [INCREMENT]: () => ({ ...state, [COUNT]: inc(state[COUNT]) }),
  [DECREMENT]: () => ({ ...state, [COUNT]: dec(state[COUNT]) }),
  [RESET]: () => ({ ...state, [COUNT]: 0 }),
  [EDIT_SUBTITLE]: () => ({ ...state, [SUBTITLE]: action.payload }),
  [UPDATE_RGB]: () => ({ ...state, [RGB]: action.payload }),
  _: () => state,
}, action)

const reducerWithLogging = (state, action) =>
  enableLogging(state, action, reducer(state, action))

export default reducerWithLogging

// Or export the reducer directly to turn off logging
// export default reducer
