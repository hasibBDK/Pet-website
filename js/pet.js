const loadPetbutton =()=>
{
    fetch('https://openapi.programming-hero.com/api/peddy/categories')
    .then((res)=>res.json())
    .then((data)=>displayPetbutton(data.categories))
}


const displaycategory =(category)=>{
    
    fetch(`https://openapi.programming-hero.com/api/peddy/category/${category}`)
    .then((res)=>res.json())
    .then((data)=>displayallPets(data.data))
}

 displayPetbutton = (categories)=>{
    const buttonDiv = document.getElementById("petcategorybutton");
    categories.forEach((item) =>{
        const buttonContainer = document.createElement("div")
        
        buttonContainer.innerHTML = `
         <button onclick="displaycategory('${item.category}')" class="btn gap-3"><img src="${item.category_icon}" class="w-8 h-8" /> ${item.category}</button>
            
        `;
        
        buttonDiv.append(buttonContainer);
    })
}


getpetIdforshowdetails=(petid)=>
{
    fetch(`https://openapi.programming-hero.com/api/peddy/pet/${petid}`)
    .then((res)=>res.json())
    .then((data)=>displaypetDetails(data.petData))
}

displaypetDetails=(petdata)=>
{
    const detailsContainer = document.getElementById("showdetailsdiv");
    detailsContainer.innerHTML =`
        <figure class=" rounded-xl">
            <img class="rounded-xl max-h-60 object-cover mx-auto "
            src=${petdata.image}  alt="pets" />
        </figure>
        <div class="py-3 ">
            <h2 class="card-title font-bold text-xl">${petdata.pet_name}</h2>
            <div class="mt-2">
              <div class="flex gap-2">
                <img class="w-6 h-6"  src="https://img.icons8.com/?size=64&id=nnczdGIxHmuu&format=png" />
                <p>Breed: ${petdata.breed}</p>
              </div>
              <div class="flex gap-2 mt-1">
                <img class="w-6 h-6"  src="https://img.icons8.com/?size=160&id=udduMUcrHmZa&format=png" />
                <p>Birth: ${petdata.date_of_birth}</p> 
              </div>
              <div class="flex gap-2 mt-1">
                <img class="w-6 h-6"  src="https://img.icons8.com/?size=160&id=70834&format=png" />
                <p>Gender: ${petdata.gender}</p>
              </div>
              <div class="flex gap-2 mt-1">
                <img class="w-6 h-6"  src="https://img.icons8.com/?size=100&id=7172&format=png"/>
                <p>Price: ${petdata.price}$</p>
              </div>
            </div>
            <div class="divider mt-0"></div>
            <div class="flex justify-between ">
              ${petdata.pet_details}
            </div>
        </div>
    `;
    document.getElementById("showModaldata").click();
}

const loadallPets =()=>
{
    fetch('https://openapi.programming-hero.com/api/peddy/pets')
    .then((res)=>res.json())
    .then((data)=>displayallPets(data.pets))
}


const lickedpet = (likedimage) => {
    const likedContainer = document.getElementById("likedPetcontainer");
    const div = document.createElement("div");
    div.classList="";

    div.innerHTML = `
        <img class="rounded-2xl w-32 h-32" src="${likedimage}" />
    `;

    likedContainer.appendChild(div);
};


displayallPets=(pets)=>
{
    
    const petContainer = document.getElementById("allPetsContainer");
    petContainer.innerHTML="";
    if(pets.length==0)
        {
            petContainer.classList.remove("grid");
            petContainer.innerHTML=`
                <div class="flex flex-col justify-center items-center  gap-5 p-5">
                    <img class="w-50 h-50" src="images/error.webp" />
                    <h1 class="font-bold text-3xl">No Information Available</h1>
                    <p>No pets available now.If any pet availabel will updated.Stay with us.</p>
                </div>
            
            `;

        }
        else{
            petContainer.classList.add("grid");
        }
    
    pets.forEach((eachpet)=>{

        const card = document.createElement("div");
        card.classList = "card card-compact p-3";
        card.innerHTML= `
         <figure class=" rounded-xl">
            <img
            src=${eachpet.image}  alt="pets" />
        </figure>
        <div class="py-3 ">
            <h2 class="card-title font-bold text-xl">${eachpet.pet_name}</h2>
            <div class="mt-2">
              <div class="flex gap-2">
                <img class="w-6 h-6"  src="https://img.icons8.com/?size=64&id=nnczdGIxHmuu&format=png" />
                <p>Breed: ${eachpet.breed}</p>
              </div>
              <div class="flex gap-2 mt-1">
                <img class="w-6 h-6"  src="https://img.icons8.com/?size=160&id=udduMUcrHmZa&format=png" />
                <p>Birth: ${eachpet.date_of_birth}</p> 
              </div>
              <div class="flex gap-2 mt-1">
                <img class="w-6 h-6"  src="https://img.icons8.com/?size=160&id=70834&format=png" />
                <p>Gender: ${eachpet.gender}</p>
              </div>
              <div class="flex gap-2 mt-1">
                <img class="w-6 h-6"  src="https://img.icons8.com/?size=100&id=7172&format=png"/>
                <p>Price: ${eachpet.price}$</p>
              </div>
            </div>
            <div class="divider mt-0"></div>
            <div class="flex justify-between ">
              <button id="likebutton" onclick="lickedpet('${eachpet.image}')" class="btn"><img class="w-full h-full" src=" https://img.icons8.com/?size=96&id=U6uSXVbuA1xU&format=png" /> </button>
              <button class="btn"><p class="font-bold text-green-700">Adopt</p></button>
              <button onclick="getpetIdforshowdetails(${eachpet.petId})" class="btn"><p class="font-bold text-green-700">Details</p></button>
            </div>
        </div>
        
        `
        petContainer.append(card);
    })

}




loadallPets();
loadPetbutton();