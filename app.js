var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var accounts = require("./json/accounts.json");
function accountsMerge(accounts) {
    var people = {};
    var emails = {};
    accounts.forEach(function (account, idx) {
        if (!people.hasOwnProperty(idx)) {
            people[idx] = {
                name: account.name,
                emails: [],
                applications: []
            };
            people[idx].applications.push(account.application.toString());
        }
        account.emails.forEach(function (email) {
            if (emails.hasOwnProperty(email) && emails[email] != idx) {
                var personIdx = emails[email];
                //merge
                people[idx].emails = __spreadArray(__spreadArray([], people[personIdx].emails, true), people[idx].emails, true);
                people[idx].applications = __spreadArray(__spreadArray([], people[personIdx].applications, true), people[idx].applications, true);
                people[personIdx].emails.forEach(function (e) {
                    emails[e] = idx;
                });
                delete people[personIdx];
            }
            else {
                people[idx].emails.push(email);
                emails[email] = idx;
            }
        });
    });
    return Object.keys(people).map(function (key) {
        return people[key];
    });
}
console.log(accountsMerge(accounts));
