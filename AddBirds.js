import React from "react";
function AddBirds(){
return(
    <div className="p-5 text-center border rounded-pills">
        <h1 >Add Birds </h1>
        <h6>Enter the Bird Name : <input type="text"/></h6><br></br>
        <h6>Enter the Bird video : <input type="file"/></h6><br></br>
        <h6>Enter the first Bird image : <input type="file"/></h6><br></br>
        <h6>Enter the second Bird image : <input type="file"/></h6><br></br>
        <h6>Enter the third Bird image : <input type="file"/></h6><br></br>
        <h6>Enter the Bird Common Name : <text type="text"/></h6><br></br>
        <h6>Enter the Bird Scientific Name : <input type="text"/></h6><br></br>
        <h6>Enter the Bird Size : <input type="text"/></h6><br></br>
        <h6>Enter the Bird Life expectancy : <input type="text"/></h6><br></br>
        <h6>Enter the  Habitat1 : <textarea type="text"/></h6><br></br>
        <h6>Enter the  Habitat2 : <textarea type="text"/></h6><br></br>
        <h6>Enter the breed1 : <input type="text"/></h6><br></br>
        <h6>Enter the Breed2 : <input type="text"/></h6><br></br>
        <h6>Enter the Breed3 : <input type="text"/></h6><br></br>
        <h6>Enter the Breed4 : <input type="text"/></h6><br></br>
        <h6>Enter the identification : <text type="text"/></h6><br></br>
        <h6>Enter the food : <textarea  type="text"/></h6><br></br>
    </div>
)
}
export default AddBirds;