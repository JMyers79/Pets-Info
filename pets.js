const petsData = [
    {
        petName: "Stella",
        type: "dog",
        age: 7,
        weightInKilos: 24,
        breed: "Dalmation"
    },
    {
        petName: "Cody",
        type: "dog",
        age: 8,
        weightInKilos: 22,
        breed: "Corgi"
    },
    {
        petName: "Mango",
        type: "cat",
        age: 2,
        weightInKilos: 11,
        breed: "Persian"
    },
    {
        petName: "Lucy",
        type: "snake",
        age: 4,
        weightInKilos: 35,
        breed: "Ball Python"
    },
    {
        petName: "Buhmie",
        type: "dog",
        age: 1,
        weightInKilos: 28,
        breed: "Bull-dog"
    }
];

let showInfo = () =>{
    const petNum = document.querySelector('#petNum').value-1;
    console.log(petNum);
    petArea = document.querySelector(".selectedPetInfo")
    petStr = `${petsData[petNum].petName} the ${petsData[petNum].type} is ${petsData[petNum].age} year(s) old. This ${petsData[petNum].type} 
    weighs ${petsData[petNum].weightInKilos} killos and is a ${petsData[petNum].breed} breed.`
    petArea.textContent = petStr
}
