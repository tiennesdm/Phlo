import React, { Fragment, useContext, Suspense, useEffect } from "react";
import { AppContext } from "./GlobalContexts/AppContext";
import { BrowserRouter } from "react-router-dom";
import Router from "./Router";
import { SnackbarProvider } from "notistack";
import CssBaseline from "@mui/material/CssBaseline";


function App() {
  let auth = localStorage.getItem("auth");
  let username = localStorage.getItem("username");
  let data = localStorage.getItem('userDetail');
  const { setIsLoading, setAuthenticated, setData, authenticated } = useContext(AppContext);
  
  useEffect(() => {
    if (!auth && !username) {
      setIsLoading(false);
      setAuthenticated(false);
    }
    if(data){
        setData(data)

    }

    // saving sample auth
  }, [auth,authenticated, username, setIsLoading,setData, setAuthenticated, data]);

  return (
    <Fragment>
        <SnackbarProvider maxSnack={3}>
          <Suspense fallback={<null />}>
            <CssBaseline />
            <BrowserRouter>
              <Router />
            </BrowserRouter>
          </Suspense>
        </SnackbarProvider>
    </Fragment>
  );
  //
}

export default App;
