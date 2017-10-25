# dotenv-to-ts [![Build Status](https://travis-ci.org/bang88/dotenv-to-ts.svg?branch=master)](https://travis-ci.org/bang88/dotenv-to-ts)

> Convert dotenv file to TypeScript type definitions


## Install

```
$ npm install --save dotenv-to-ts

# or

$ yarn add dotenv-to-ts
```


## Usage

```js
import dotenvToTs from 'dotenv-to-ts'

dotenvToTs();
// export interface Environments {
// 	HOST: string;
// }
```


## API

### dotenvToTs(input, output, name)

#### input

Type: `string`

Input env file path defaults to [.env]

#### output

Type: `string`

Output type definition file path defaults to [env.d.ts]

#### name

Type: `string`

Interface's name defaults to [Environments]


## CLI

```
$ npm install --global dotenv-to-ts
```

```
$ dotenv-to-ts --help

  Usage
		$ dotenv-to-ts

	Options
		--input Input env file path defaults to [.env]
		--output Output type definition file path defaults to [env.d.ts]
		--name Interface's name defaults to [Environments]

	Examples
		$ dotenv-to-ts --input .env.example --output example.env.d.ts
		$ dotenv-to-ts --name MyEnv

```


## License

MIT © [bang](https://github.com/bang88)
