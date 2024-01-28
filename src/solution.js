import { fakeSearch } from './fake_backend';

import {
	switchMap,
	fromEvent,
	map,
	startWith,
	debounceTime,
	distinctUntilChanged,
} from 'rxjs';

const searchField = document.querySelector('[name=search]');
const resultsArea = document.querySelector('.results-area');

function renderResults(results) {
	resultsArea.innerText = JSON.stringify(results, null, 2);
}

const changes$ = fromEvent(searchField, 'input').pipe(
	map((event) => event.target.value),
	startWith(''),
	debounceTime(400),
	distinctUntilChanged()
);

changes$.pipe(switchMap((value) => fakeSearch(value))).subscribe((results) => {
	renderResults(results);
});
