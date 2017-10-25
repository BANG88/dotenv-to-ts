import test from 'ava'
import * as fs from 'fs'
import * as prettier from 'prettier'
import fn from './index'

test('interface name', (t) => {
	t.is(fn(undefined, undefined, 'X'), prettier.format(`export interface X {
	HOST: string;
}`))
})

test('input & output path', (t) => {
	t.is(fn('.env.example', 'example.env.d.ts'), prettier.format(`export interface Environments {
	HOST: string;
	PORT: string;
}`))
	t.is(fs.existsSync('example.env.d.ts'), true)
})
