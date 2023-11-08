import axios from 'axios';
import { from, lastValueFrom, firstValueFrom } from 'rxjs';

// // Import stylesheets
// import './style.css';

// // Write TypeScript code!
// const appDiv: HTMLElement = document.getElementById('app');
// appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;

const obs$ = from(axios.get('https://api.github.com/users'));

async function test() {
  const test = await firstValueFrom(obs$);
  console.log(test);
}
test();
