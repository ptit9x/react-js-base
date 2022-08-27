import { combineReducers } from "redux";
import appReducer from "./App/App.reducer";
import mainLayoutReducer from "./layouts/MainLayout/MainLayout.reducer";

const rootReducer = combineReducers({
  app: appReducer,
  mainLayout: mainLayoutReducer
});

export default rootReducer;
