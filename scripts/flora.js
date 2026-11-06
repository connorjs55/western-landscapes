const floraArray = [
    {
        id: 1,
        latinName: 'Artemisia tridentata',
        commonName: 'Big Sagebrush',
        description:
            'It grows in arid and semi-arid conditions, throughout a range of cold desert, steppe, and mountain habitats in the Intermountain West of North America. Big sagebrush and other Artemisia shrubs are the dominant plant species across large portions of the Great Basin. Sagebrush provides food and habitat for a variety of species, such as sage grouse, pronghorn antelope, grey vireo, pygmy rabbit, and mule deer. Several major threats exist to sagebrush ecosystems, including human settlements, conversion to agricultural land, invasive plant species, and wildfires. Native Americans have used the plant medicinally.',
        imgSrc: 'styles/images/artemisia-tridentata.jpg',
        regionTags: ['south', 'central'],
        typeTag: ['shrubs'],
    },

    {
        id: 2,
        latinName: 'Ericameria nauseosa',
        commonName: 'Rubber Rabbitbrush',
        description:
            'Drought-tolerant shrubs with yellow flowers.',
        imgSrc: 'styles/images/ericameria-nauseosa-1.jpg',
        regionTags: ['south', 'central', 'north'],
        typeTag: ['shrubs'],
    },

    {
        id: 3,
        latinName: 'Purshia tridentata',
        commonName: 'Antelope Bitterbrush',
        description: 'Aromatic shrub with yellow flowers, common in dry areas.',
        imgSrc: 'styles/images/purshia-tridenta-2.jpg',
        regionTags: ['south', 'central'],
        typeTag: ['shrubs'],
    },

    {
        id: 4,
        latinName: 'Festuca idahoensis',
        commonName: 'Idaho Fescue',
        description: 'A good forage grass.',
        imgSrc: 'styles/images/festuca-idahoensis-2.jpg',
        regionTags: ['south', 'central', 'north'],
        typeTag: ['grasses']
    },

    {
        id: 5,
        latinName: 'Linum lewisii',
        commonName: 'Blue Flax',
        description: 'Blue flowers.',
        imgSrc: 'styles/images/linum-lewisii-1.jpg',
        regionTags: ['south', 'central', 'north'],
        typeTag: ['wildflowers']
    },

    {
        id: 6,
        latinName: 'Juniperus osteosperma',
        commonName: 'Utah Juniper',
        description: 'A large shrub or small tree that grows at moderate altitudes on dry soils.', 
        imgSrc: 'styles/images/utah-juniper.jpg',
        regionTags: ['south'],
        typeTag: ['shrubs', 'trees']
    },

    {
        id: 7,
        latinName: 'Castilleja spp.',
        commonName: 'Indian Paintbrush',
        description: 'Showy wildflowers with red, orange, or yellow spikes.',
        imgSrc: 'styles/images/indian-paintbrush-wildflowers-2.jpg',
        regionTags: ['south', 'central', 'north'],
        typeTag: ['wildflowers']
    },

    {
        id: 8,
        latinName: 'Balsamorhiza sagittata',
        commonName: 'Arrowleaf Balsamroot',
        description: 'Large sunflower-like flowers on tall stems.',
        imgSrc: '',
        regionTags: ['south', 'central'],
        typeTag: ['wildflowers']
    },

    {
        id: 9,
        latinName: 'Lupinus spp.',
        commonName: 'Lupine',
        description: 'Colorful, pea-like flowers in various shades.',
        imgSrc: '',
        regionTags: ['south', 'central', 'north'],
        typeTag: ['wildflowers']
    },

    {
        id: 10,
        latinName: 'Achillea millefolium var. occidentalis',
        commonName: 'Western Yarrow',
        description: 'White or pink flowers in flat-topped clusters.',
        imgSrc: '',
        regionTags: ['south', 'central', 'north'],
        typeTag: ['wildflowers']
    },

    {
        id: 11,
        latinName: 'Pseudoroegneria spicata',
        commonName: 'Bluebunch Wheatgrass',
        description: 'Dominant native grass in upland areas. Considered to be one the most important bunchgrasses in the Intermountain West.',
        imgSrc: 'styles/images/bluebunch-wheatgrass-2.jpg',
        regionTags: ['south', 'central'],
        typeTag: ['grasses']
    },

    {
        id: 12,
        latinName: 'Populus tremuloides',
        commonName: 'Quaking Aspen',
        description: 'Iconic deciduous tree with fluttering leaves.',
        imgSrc: '',
        regionTags: ['central', 'north'],
        typeTag: ['trees']
    },

    {
        id: 13,
        latinName: 'Pseudotsuga menziesii',
        commonName: 'Douglas Fir',
        description: 'Tall conifer with distinctive cones.',
        imgSrc: '',
        regionTags: ['central', 'north'],
        typeTag: ['trees']
    },

    {
        id: 14,
        latinName: 'Pinus ponderosa',
        commonName: 'Ponderosa Pine',
        description: 'Tall pine tree with thick, yellow-orange bark.',
        imgSrc: '',
        regionTags: ['south', 'central'],
        typeTag: ['trees']
    },

    {
        id: 15,
        latinName: 'Pinus contorta',
        commonName: 'Lodgepole Pine',
        description: 'Conical pine with small, closed cones.',
        imgSrc: '',
        regionTags: ['central', 'north'],
        typeTag: ['trees']
    },

    {
        id: 16,
        latinName: 'Abies concolor',
        commonName: 'White Fir',
        description: 'Tall evergreen with bluish-green needles.',
        imgSrc: '',
        regionTags: ['central'],
        typeTag: ['trees']
    },

    {
        id: 17,
        latinName: 'Juniperus occidentalis',
        commonName: 'Western Juniper',
        description: 'Small to medium-sized tree with bluish berries.',
        imgSrc: '',
        regionTags: ['south'],
        typeTag: ['trees']
    },

    {
        id: 18,
        latinName: 'Rhus aromatica',
        commonName: 'Fragrant Sumac',
        description: 'Aromatic shrub with small yellow flowers and red fall foliage.',
        imgSrc: '',
        regionTags: ['south', 'central'],
        typeTag: ['shrubs']
    },

    {
        id: 19,
        latinName: 'Elymus elymoides',
        commonName: 'Bottlebrush Squirreltail',
        description: 'Standing just 12-18 inches tall, Bottlebrush Squirreltail is a bunchgrass notable for its aggressive seed dispersal strategy: the long, sharp awns attach to passing animals and clothing, enabling seeds to travel long distances.',
        imgSrc: '',
        regionTags: ['north'],
        typeTag: ['grasses']
    },

    {
        id: 20,
        latinName: 'Acer negundo',
        commonName: 'Box Elder',
        description: 'Fast-growing tree commonly found near water.',
        imgSrc: '',
        regionTags: ['south', 'central', 'north'],
        typeTag: ['trees']
    },

    {
        id: 21,
        latinName: 'Tanacetum camphoratum',
        commonName: 'Dune Tansy',
        description: 'Aromatic plant with yellow button-like flowers.',
        imgSrc: '',
        regionTags: ['south'],
        typeTag: ['wildflowers']
    },

    {
        id: 22,
        latinName: 'Populus angustifolia',
        commonName: 'Narrowleaf Cottonwood',
        description: 'Tall tree commonly found along rivers and streams.',
        imgSrc: '',
        regionTags: ['south', 'central'],
        typeTag: ['trees']
    },

    {
        id: 23,
        latinName: 'Quercus macrocarpa',
        commonName: 'Bur Oak',
        description: 'Large oak tree with deeply lobed leaves and large acorns.',
        imgSrc: '',
        regionTags: ['north'],
        typeTag: ['trees']
    },
    
    {
        id: 24,
        latinName: 'Philadelphus lewisii',
        commonName: 'Syringa',
        description: 'State flower of Idaho. Common in open coniferous forests and on forest edges.',
        imgSrc: '',
        regionTags: ['central', 'north'],
        typeTag: ['wildflowers']
    },

    {
        id: 25,
        latinName: 'Abies grandis',
        commonName: 'Grand Fir',
        description: 'Coniferous tree that typically grows to 130-230 ft and may be the tallest Abies species in the world.',
        imgSrc: 'styles/images/grand-fir.jpg',
        regionTags: ['north'],
        typeTag: ['trees']
    }
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

