const accounts = require("./json/accounts.json");

interface Account {
  name: string;
  application: string;
  emails: [string];
}

type Accounts = [Account];

interface Person {
  name: string;
  applications: string[];
  emails: string[];
}

type People = Person[];

function accountsMerge(accounts: Accounts): string {
  const people: { [key: string]: Person } = {};
  const emails: { [key: string]: number } = {};

  accounts.forEach((account, idx) => {
    if (!people.hasOwnProperty(idx)) {
      people[idx] = {
        name: account.name,
        emails: [],
        applications: [],
      };

      people[idx].applications.push(account.application.toString());
    }

    account.emails.forEach((email) => {
      if (emails.hasOwnProperty(email) && emails[email] != idx) {
        const personIdx = emails[email];
        //merge
        people[idx].emails = [
          ...people[personIdx].emails,
          ...people[idx].emails,
        ];
        people[idx].applications = [
          ...people[personIdx].applications,
          ...people[idx].applications,
        ];
        people[personIdx].emails.forEach((e) => {
          emails[e] = idx;
        });
        delete people[personIdx];
      } else {
        people[idx].emails.push(email);
        emails[email] = idx;
      }
    });
  });

  return JSON.stringify(
    Object.keys(people).map((key) => {
      return people[key];
    })
  );
}

process.stdout.write(accountsMerge(accounts));
