import React from "react";
import './App.css';
import Header from "./components/Header/Header";
import {Outlet, Route, Routes} from "react-router-dom";
import IndexPage from "./components/IndexPage/IndexPage";
import Footer from "./components/Footer/Footer";
import Users from "./components/Users/Users";
import User from "./components/User/User";




function App() {
  return (
      <Routes>
          <Route path={'/'} element = {<Layout/>}>
              <Route index element = {<IndexPage/>}/>
              <Route path={'users'} element = {<UsersLayout/>}>
                  <Route index element = {<Users/>}/>
                  <Route path={':userId'} element={<User/>}>
                      {/*<Route index element = {<Users/>}/>*/}
                      {/*<Route path={'user'} element = {<UserLayout/>}/>*/}
                  </Route>
              </Route>
          </Route>
      </Routes>
  )
}

// function UserLayout(){
//     return(
//         <Outlet/>
//     )
// }

function UsersLayout(){
    return(
        <Outlet/>
    )
}

function Layout() {
  return(
      <div className="App">
        <Header/>
        <main className={'content'}>
            <Outlet/>
        </main>
          <Footer/>
      </div>
  )
}


export default App;
