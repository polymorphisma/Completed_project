const generateCat = () =>{
 let image = document.createElement('img');
 let div = document.getElementById('flex-cat-gen');
 image.src = 'https://thecatapi.com/api/images/get?format=src&type=gif&size=small';
 div.appendChild(image);
}