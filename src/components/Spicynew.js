import React, { useState } from "react";
import { spicyFoods, getNewRandomSpicyFood } from "../data";

function SpicyNew(){
    const [foods, SetFood] = useState(spicyFoods);
    // const [filter, setFilter] = useState("All");
    

    function addFood(){
        const foodupdate=getNewRandomSpicyFood();
        const foodUpdateNew=[...foods, foodupdate]
        SetFood(foodUpdateNew)
    }
        const foodList = foods.map(food => (<li key={food.id}>
        name={food.name}  | cuisine={food.cuisine}  | heatLevel={food.heatLevel}</li>));
    
    function handleDelete(id){
        const deleteFood = foods.filter(food => food.id!== id)
        SetFood(deleteFood)
    }
    // const newFoods = foods.map(food => (<li key={food.id}  onClick={handleDelete}>
    //     name={food.name}  |  cuisine={food.cuisine}   |  heatLevel={food.heatLevel}
    // </li>))

return (
    <div>
        <button onClick={addFood}>Add New Food</button>
        <li onClick={() => handleDelete(foods.map(food=>food.id))}>{foodList}</li>
    </div>)
}
    // function handleUpdate(e){
    //     e.target.value}
        
    //     const UpdateFood = foods.filter(food => {
    //         if (filter === "All"){
    //             return true;
    //             } else {
    //                 return food.cuisine === filter;
    //             }   
    //         })
        // }
                // const FoodsDisplayed = UpdateFood.map(food => (<li key={food.id} onClick =
                // {()=> {handleChange}}>
                // name={food.name}  | cuisine={food.cuisine}  | heatLevel={food.heatLevel}</li>));


 

    // {
        /* <select name="filter" onChange={handleUpdate}>
     <option value = "All">All</option>
     <option value = "American">American</option>
     <option value = "Sichuan">Sichuan</option>
     <option value = "Thai">Thai</option>
     <option value = "Mexican">Mexican</option>
     </select> */
    // }
     

      

    


export default SpicyNew;