const buttonMode = document.getElementById("btn_mode");
const headerNav = document.getElementById("header_nav");
const images = document.getElementById('images');

buttonMode.addEventListener('click', () =>{
    changePrimaryColor();
})

const changePrimaryColor = () =>{
    if(headerNav.classList.contains('header-sec')){
        headerNav.classList.remove('header-sec');
        buttonMode.textContent = "Dark Mode";
    } 
    else{
        buttonMode.textContent = "Bright Mode";
        headerNav.classList.add('header-sec');
    }

}

/* const getImages = () => { //Declara 
    axios('https://picsum.photos/v2/list?page=3&limit=16')
        .then(res => {
            const fragment = document.createDocumentFragment();
            res.data.forEach(element => {
                const newImage = document.createElement('IMG');
                newImage.src = element.download_url;
                newImage.classList.add("img-item")
                fragment.appendChild(newImage);
//              console.log(res.data)
            })
            images.appendChild(fragment);
            // setObserver(); //Llama
        })
} */
// const callback = (entries) => { //Declara
//     entries.forEach(entry => {
//         if (entry.isIntersecting) {
//             getImages(); //Llama
//         } else {
//             //quitar animación
//         }
//     })
// }

// const setObserver = () => { // Declara
//     const options = {
//         threshold: 0.5
//     }

//     const observer = new IntersectionObserver(callback, options)
//     observer.observe(images.lastElementChild)
// }
getImages() //Llamada final