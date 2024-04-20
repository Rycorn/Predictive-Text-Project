const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');

const fruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];
const lowerCaseFruit = [];
for(val of fruit)
{
	lowerCaseFruit.push(val.toLowerCase());
}

function search(str) 
{
	let results = [];
	for(let i = 0; i < lowerCaseFruit.length; i++)
	{
		if(lowerCaseFruit[i].includes(str.toLowerCase()))
		{
			results.push(fruit[i]);
		}
	}
	return results;
}

function searchHandler(e) 
{
	let results = search(input.value);
	showSuggestions(results, input.value);
}

function showSuggestions(results, inputVal) 
{
	suggestions.replaceChildren(); 
	for(val of results)
	{
		let newSuggestions = document.createElement("li");
        newSuggestions.innerText = val;

        //add item to list
        suggestions.appendChild(newSuggestions);
	}
}

function useSuggestion(e) 
{
	input.value = e.target.innerText;
	suggestions.replaceChildren(); 
}

input.addEventListener('keyup', searchHandler);
suggestions.addEventListener('click', useSuggestion);