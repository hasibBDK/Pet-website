const loadPetbutton =()=>
{
    fetch('https://openapi.programming-hero.com/api/peddy/categories')
    .then(res=>res.json())
    .then(data=>displayPetbutton(data.categories))
}

 displayPetbutton = (categories)=>{
    const buttonDiv = document.getElementById("petcategorybutton");
    categories.forEach((item) =>{
        const button = document.createElement("button")
        button.classList = "btn gap-3";
        button.innerHTML = `
            <img src="${item.category_icon}" class="w-8 h-8" /> ${item.category}
        `;
        
        buttonDiv.append(button);
    })
}


loadPetbutton();