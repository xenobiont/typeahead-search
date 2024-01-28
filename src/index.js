import { fakeSearch } from './fake_backend';

import { switchMap, fromEvent } from 'rxjs';

const searchField = document.querySelector('[name=search]');
const resultsArea = document.querySelector('.results-area');

function renderResults(results) {
	resultsArea.innerText = JSON.stringify(results, null, 2);
}

// your code here
