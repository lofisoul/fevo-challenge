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

This is a node program written in Typescript that takes the various accounts of a JSON file in `/json` and outputs an array of people with shared emails from those accounts.

Example:

```
//account
{
  application: string,
  emails: [string],
  name: string
}

//person
{
  applications: [string],
  emails: [string],
  name: string
}
```
