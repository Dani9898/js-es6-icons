const icone = [
	{
		name: 'cat',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'crow',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dog',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dove',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dragon',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'horse',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'hippo',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'fish',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'carrot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'apple-alt',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'lemon',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'pepper-hot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'user-astronaut',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-graduate',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-ninja',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-secret',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	}
];

const contenitore = document.getElementById("container-icone");

function stampa(icona) {
	contenitore.innerHTML += `
		<div class="icon">
			<i class="${icona.family} ${icona.prefix}${icona.name} ${icona.color}"></i>
			<h4>${icona.name}</h4>
		</div>
		`
}


icone.forEach((icon) => {
	stampa(icon)
})

const animali = icone.filter((icona) => {
	if (icona.type === "animal") {
		return true
	} 
});


const vegetali = icone.filter((icona) => {
	if (icona.type === "vegetable") {
		return true
	} 
});


const users = icone.filter((icona) => {
	if (icona.type === "user") {
		return true
	}
});


const selezione = document.getElementById("types");

selezione.addEventListener("click", function(){
	if (selezione.value === "animals") {
		contenitore.innerHTML = "";
		animali.forEach((icon) => {		
			stampa(icon);
		})
	} else if (selezione.value === "vegetables") {
		contenitore.innerHTML = "";
		vegetali.forEach((icon) => {		
			stampa(icon)
		})
	} else if (selezione.value === "users") {
		contenitore.innerHTML = "";
		users.forEach((icon) => {		
			stampa(icon)
		})
	} else if (selezione.value === "all") {
		contenitore.innerHTML = "";
		icone.forEach((icon) => {		
			stampa(icon)
		})
	}
})