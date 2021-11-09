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

function stampa(icons) {
	contenitore.innerHTML = "";
	icons.forEach((icon) => {
		contenitore.innerHTML += `
		<div class="icon">
			<i class="${icon.family} ${icon.prefix}${icon.name} ${icon.color}"></i>
			<h4>${icon.name}</h4>
		</div>
		`
	});
}

stampa(icone);

const selezione = document.getElementById("types");

selezione.addEventListener("change", function(){
	if (selezione.value === "animals") {
		const animali = icone.filter((icona) => {
			if (icona.type === "animal") {
				return true
			} 
		});
		stampa(animali);
	} else if (selezione.value === "vegetables") {
		const vegetali = icone.filter((icona) => {
			if (icona.type === "vegetable") {
				return true
			} 
		});
		stampa(vegetali);
	} else if (selezione.value === "users") {
		const users = icone.filter((icona) => {
			if (icona.type === "user") {
				return true
			}
		});
		stampa(users);
	} else if (selezione.value === "all") {
		stampa(icone);
	}
})