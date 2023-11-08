import axios from 'axios';
import { of, from, lastValueFrom, firstValueFrom } from 'rxjs';

// API call
const obs$ = from(axios.get('https://api.github.com/users'));
firstValueFrom(obs$).then(payload => console.log('API data from firstValueFrom', {
  payloadLength: payload.data.length, 
  status: payload.status, 
  statusText: payload.statusText
}))
lastValueFrom(obs$).then(payload => console.log('API data from lastValueFrom', {
  payloadLength: payload.data.length, 
  status: payload.status, 
  statusText: payload.statusText
}))

// Stream of data
const source$ = of('First record', 'x', 'y', 'Last Record');
firstValueFrom(source$).then(payload => console.log('Stream data from firstValueFrom', { payload }));
lastValueFrom(source$).then(payload => console.log('Stream data from lastValueFrom', { payload }));