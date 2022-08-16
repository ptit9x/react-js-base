import React, { useEffect, Suspense } from "react";
import { useSelector } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { useAppDispatch } from "src/store";
import Loading from "../components/Loading/Loading";
import Routes from "../router";
import { doGetProfile } from "./App.thunks";

const App = () => {
  const dispatch = useAppDispatch();
  const { isLoginSuccess } = useSelector((state: AppState) => state.auth);

  useEffect(() => {
    dispatch(doGetProfile());
  }, [dispatch, isLoginSuccess]);

  return (
    <BrowserRouter>
      <Suspense fallback={<Loading />}>
        <p>chao abc</p>
        <Routes />
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
