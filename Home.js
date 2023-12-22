import React from "react";
import "./Home.css";
import { Link } from 'react-router-dom';
const Home=()=>{
    const home=[
        {
            Name:"Tails and Barks",
            heading:"Birds Online Shoping",
            content:"Birds Selling"
        }
    ]
    return(
        <div class="home">
           <div className="flex  ">
           <Link to='/Login'> <button  className="adminButton btn  border rounded-pill ">Admin  </button></Link>
           <Link to='/Login'> <button className="userButton btn  border rounded-pill ">User</button></Link>
            </div>
           <h1 class="title">{home[0].Name}</h1>
           <h3 class="heading">{home[0].heading}</h3><br></br>
           <p class="content">hdfehdwjdjandjsbfiewhqjeooiqjeoqwjqwqwdbdqiufqw eefowqp   qks ndqwhdihqw qwwdiuqoqj   sabdhbqw jwdiwqdqjwqd bwedqwjdkqdwh fqdq    j ddiwqq    wqnf hfoiqdqwd csjdfhowdnhfiwiewj vdbfiuewjkjf vwhqbfhf </p>
        </div>
    )
}
export default Home;