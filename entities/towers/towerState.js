/**
 * class used to get input from script in main the basic blue tower is default
 *               
 * @author:    Quetzalcoatl
 * Created:   31.03.2025
 **/

let chosenTower;
export function setChosenTower(typeIn){
    chosenTower = typeIn
    console.log("valgte" +" "+ chosenTower + " " + "tower")
};

export function getChosenTower(){
    if (chosenTower != null){
        return chosenTower;
    } return "basic";
};