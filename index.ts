import * as dotenv from 'dotenv'
import * as fs from 'fs'
import * as prettier from 'prettier'
/**
 * @param input {string} .env
 * @param output {string} env.d.ts
 * @param name {string} Environments
 */
export default (
	input = '.env',
	output = 'env.d.ts',
	name = 'Environments',
) => {
	const envs = dotenv.parse(fs.readFileSync(input))
	const s = Object.keys(envs).map((env) => `${env}: string\n`)
	const contents = prettier.format(
		`
	export interface ${name} {
		${s}
	}
	`,
	)

	fs.writeFileSync(output, contents)

	// tslint:disable-next-line:no-console
	console.log('Generated type definitions:')
	// tslint:disable-next-line:no-console
	console.log(contents)
	return contents
}
