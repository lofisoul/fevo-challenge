# fevo-challenge

FEVO Challenge built using Typescript and NodeJS

## Getting started

**Download packages:**

```
npm i
```

**Run:**

```
npm start
```

This is a node program written in Typescript that takes the various accounts of a JSON file in `/json` and outputs an array of people with shared emails from those accounts in the terminal.

**Example shapes of objects:**

```
//account from json
{
  application: string,
  emails: [string],
  name: string
}

//person from merged function
{
  applications: [string],
  emails: [string],
  name: string
}
```
