#!/usr/bin/env node
import * as  meow from 'meow'
import dotenvToTs from './index'

const cli = meow(`
	Usage
		$ dotenv-to-ts

	Options
		--input Input env file path defaults to [.env]
		--output Output type definition file path defaults to [env.d.ts]
		--name Interface's name defaults to [Environments]

	Examples
		$ dotenv-to-ts --input .env.example --output example.env.d.ts
		$ dotenv-to-ts --name MyEnv

`)

const flags = cli.flags
dotenvToTs(flags.input, flags.output, flags.name)
