const floraArray = [
    {
        id: 1,
        latinName: 'Carnegiea gigantea',
        commonName: 'Saguaro',
        description:
            'Tall cactus that grows in the desert.',
        imgSrc: 'styles/images/saguaro.jpg',
        regionTags: ['south', 'central'],
        typeTag: ['shrubs'],
    },
    
    {
        id: 2,
        latinName: 'Baileya multiradiata',
        commonName: 'Desert Marigold',
        description:
            'Yellow flower.',
        imgSrc: 'styles/images/desert-marigold.jpg',
        regionTags: ['south', 'central'],
        typeTag: ['wildflowers'],
    },

    {
        id: 3,
        latinName: 'Parkinsonia florida',
        commonName: 'Palo Verde',
        description:
            'Green tree.',
        imgSrc: 'styles/images/palo-verde.jpg',
        regionTags: ['south', 'central'],
        typeTag: ['trees'],
    },
]

function floraTemplate(flora) {
    return `
        <hr>
        <section class="info">
            <div class="info-text">
                <h2>${flora.latinName} "${flora.commonName}"</h2>
                <img class="info-img" src="${flora.imgSrc}" alt="${flora.commonName}">
                <p class="description">${flora.description}</p>
            </div>
        </section>
        `
}

let form = document.querySelector('form')
form.addEventListener('submit', search)

// Search
function search(event) {
	event.preventDefault()
	let inputValue = document.querySelector('#search-bar').value;
    if(inputValue === '') {
        displayFlora(floraArray)
        return
    }

	function filterFlora(flora) {
		if(flora.latinName.toLowerCase().includes(inputValue.toLowerCase()) ||
		flora.commonName.toLowerCase().includes(inputValue.toLowerCase()) ||
		flora.typeTag.find(tag => tag.toLowerCase().includes(inputValue.toLowerCase()))
		){
			return true
		}
		else {return false}	
		}

	let results = floraArray.filter(filterFlora)
	results = results.sort(flora => flora.latinName.toLowerCase())
	displayFlora(results)
}

function displayFlora(floraResults) {
    const floraHtml = floraResults.map(floraTemplate)
    const container = document.querySelector('#flora-container')
    container.innerHTML = floraHtml.join("")
}


// // REGION filter
let regionSelect = document.querySelector('#region-select')

// // TYPE filter
let typeSelect = document.querySelector('#type-select');
let clearButton = document.querySelector('#clear-button');
clearButton.addEventListener('click', clearFilters);
regionSelect.addEventListener('change', applyFilters);
typeSelect.addEventListener('change', applyFilters);

function applyFilters() {
    const region = regionSelect.value;
    const type = typeSelect.value;

    let results = floraArray.filter(flora => {
        const matchesRegion = region === '' || flora.regionTags.includes(region);
        const matchesType = type === '' || flora.typeTag.includes(type);

        return matchesRegion && matchesType;
    });

    results = results.sort(flora => flora.latinName.toLowerCase());
    displayFlora(results);
}

// CLEAR search and filters
function clearFilters() {
    document.querySelector('#search-bar').value = '';
    regionSelect.value = '';
    typeSelect.value = '';

    applyFilters();
}

// Display
displayFlora(floraArray)

