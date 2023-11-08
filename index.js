"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = require("axios");
var rxjs_1 = require("rxjs");
var obs$ = (0, rxjs_1.from)(axios_1.default.get('https://api.github.com/users'));
(0, rxjs_1.firstValueFrom)(obs$).then(console.log);
(0, rxjs_1.firstValueFrom)(obs$).then(function (data) { return console.log(data.status); });
(0, rxjs_1.lastValueFrom)(obs$).then(function (data) { return console.log(data.statusText); });
