//-----> Clone <-----
// const BASE_URL = 'https://thatcopy.pw/catapi/rest/';

// const getCats = async () => {
// 	try {
// 		const data = await fetch(BASE_URL);
// 		const json = await data.json();
// 		return json.webpurl;
// 	} catch (e) {
// 		console.log(e.message);
// 	}
// };

// const loadImg = async () => {
// 	const img = document.getElementsByTagName('img')[0];
// 	img.src = await getCats();
// };

// loadImg();

// const btn = document.getElementById('change-cat');
// btn.addEventListener('click', loadImg);
//-----> Clone <-----


// ----> Código da aula que não funcionou <-----
// const BASE_URL = 'https://thatcopy.pw/catapi/rest/';

// const catBtn = document.getElementById('change-cat');
// const catImg = document.getElementById('cat');

// const getCats = async () => {
// 	try {
// 		const data = await fetch(BASE_URL);
// 		const json = await data.json();

// 		return json.webpurl;
// 	}
// 	catch (e) {
// 		console.log(e.message);
// 	}
// };

// const loadImg = async () => {
// 	catImg.src = await getCats();
// }

// catBtn.addEventListener('click', loadImg);

// loadImg();
// ----> Código da aula que não funcionou <-----



const BASE_URL = 'https://api.thecatapi.com/v1/images/search'

const catBtn = document.getElementById('change-cat')

// const catImg = document.getElementById('cat')

const getCats = async () => {
    const data = await fetch(BASE_URL,{
    	mode:'cors' //Ativar modo cors nessa configuração
    })

    .then(res => res.json())
    .then(json=> json[0].url) //[0] pega a primeira imagem // .url em vez de .weburl

    .catch(error=> console.log(error))

	return data;
 };

 const loadImg = async () => {
 	const catImg = document.getElementById('cat');
 	catImg.src = await getCats();
 };

catBtn.addEventListener('click', loadImg);

loadImg()