
import React, { Component } from "react";
import Title from "./Title";
import PhotoWall from "./PhotoWall";
import AddPhoto from "./AddPhoto";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Single from "./Single";

class Main extends Component {
  // constructor() {
  //   super();
  // }

  render() {
    console.log(this.props)
    return (
      <div>
        {/* <h1>
          <Link to='/' >PhotoWall</Link>
        </h1> */}
        <BrowserRouter>
          <Routes>
            <Route exact
              path="/"
              element={
                <div>
                  <Title title={"Photowall"} />
                  <PhotoWall {...this.props}/>
                </div>
              }
            />

            <Route
              path="/AddPhoto"
              element={
                <AddPhoto {...this.props}/>
              }
            />

            {/* <Route
              path="/AddPhoto"
              render={({history})=>(
                <AddPhoto {...this.props} onHistory={history}/>
              )}
            /> */}

            <Route path="/single/:id" render={(params)=>(
              <Single {...params} {...this.props}/>
            )}/>

            {/* <Route path="/AddPhoto" Component={AddPhoto} /> */}
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}

export default Main;

