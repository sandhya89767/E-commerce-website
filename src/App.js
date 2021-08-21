import "./App.css";
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Checkout from"./Checkout";
import Login from "./Login"
import {useStateValue} from "./StateProvider"
import {auth} from "./firebase"
import {useEffect} from "react"
function App() {
  const[{basket,user},dispatch]=useStateValue();
  //code which runs based on a given condition
  //useEffect<<<<powerful
  useEffect(() => {
    //everytime authenication changes authenticate user
   const unsubscribe = auth.onAuthStateChanged((authUser)=>{
     if(authUser){
       //logged in
       dispatch({
         type:"SET_USER",
         user:authUser
       });
     }
     else{
       //logged out
       dispatch({
        type:"SET_USER",
        user:null
      });
     }
   });
   return()=>{
     unsubscribe();
   }
  }, []);
  console.log("user is>>>>",user);
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/checkout">
            <Header/>
            <Checkout/>
          </Route>
          <Route path="/login">
           <Login/>
          </Route>
          <Route path="/che">
            <h1>this is checkout page</h1>
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
