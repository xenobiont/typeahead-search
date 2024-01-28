import Fuse from 'fuse.js';

function roughDelay() {
	return new Promise((resolve) =>
		setTimeout(resolve, 250 + Math.random() * 3000),
	);
}

export function fakeSearch(keyword) {
	return roughDelay().then(() => {
		return fuse.search(keyword);
	});
}

const options = {
	caseSensitive: false,
	shouldSort: true,
	threshold: 0.6,
	location: 0,
	distance: 100,
	maxPatternLength: 32,
	minMatchCharLength: 1,
	keys: ['name'],
};

const list = [
	'Toronto',
	'Montreal',
	'Calgary',
	'Ottawa',
	'Edmonton',
	'Mississauga',
	'Winnipeg',
	'Vancouver',
	'Brampton',
	'Hamilton',
	'Quebec City',
	'Surrey',
	'Laval',
	'Halifax',
	'London',
	'Markham',
	'Vaughan',
	'Gatineau',
	'Saskatoon',
	'Longueuil',
	'Kitchener',
	'Burnaby',
	'Windsor',
	'Regina',
	'Richmond',
	'Richmond Hill',
	'Oakville',
	'Burlington',
	'Greater Sudbury',
	'Sherbrooke',
	'Oshawa',
	'Saguenay',
	'Lévis',
	'Barrie',
	'Abbotsford',
	'Coquitlam',
	'Trois-Rivières',
	'St. Catharines',
	'Guelph',
	'Cambridge',
	'Whitby',
	'Kelowna',
	'Kingston',
	'Ajax',
	'Langley',
	'Saanich',
	'Terrebonne',
	'Milton',
	"St. John's",
	'Thunder Bay',
	'Waterloo',
	'Delta',
	'Chatham-Kent',
	'Red Deer',
	'Strathcona County',
	'Brantford',
	'Saint-Jean-sur-Richelieu',
	'Cape Breton',
	'Lethbridge',
	'Clarington',
	'Pickering',
	'Nanaimo',
	'Kamloops',
	'Niagara Falls',
	'Victoria',
	'Brossard',
	'Repentigny',
	'Newmarket',
	'Chilliwack',
	'Maple Ridge',
	'Peterborough',
	'Kawartha Lakes',
	'Drummondville',
	'Saint-Jérôme',
	'Prince George',
	'Sault Ste. Marie',
	'Moncton',
	'Sarnia',
	'Wood Buffalo',
	'New Westminster',
	'Saint John',
	'Caledon',
	'Granby',
	'St. Albert',
	'Norfolk County',
	'Medicine Hat',
	'Grande Prairie',
	'Airdrie',
	'Halton Hills',
	'Port Coquitlam',
	'Fredericton',
	'Blainville',
	'Saint-Hyacinthe',
	'Aurora',
	'North Vancouver',
	'Welland',
	'North Bay',
	'Belleville',
	'Mirabel',
].map((name) => ({ name }));

const fuse = new Fuse(list, options);