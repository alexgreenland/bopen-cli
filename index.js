#!/usr/bin/env node
'use strict'

const bopen = require('bopen')
const yargs = require('yargs')
const chalk = require('chalk')
const extract = require('./argv')

yargs
  .version()
  .alias('v', 'version')
  .option('i', {
    alias: 'incognito',
    describe: 'Open in incognito/private mode',
    type: 'boolean'
  })
  .option('g', {
    alias: 'background',
    describe: 'Open in background',
    type: 'boolean'
  })
  .option('b', {
    alias: 'browser',
    describe: 'Browser to launch URL with',
    choices: ['chrome', 'firefox', 'ie', 'edge', 'safari']
  })
  .option('a', {
    alias: 'app',
    describe: 'App to launch location with'
  })
  .option('t', {
    alias: 'targs',
    describe: 'Target app arguments, use --targs="ARGS" format'
  })
  .option('o', {
    alias: 'oargs',
    describe: 'Opener arguments, use --oargs="ARGS" format'
  })
  .help('help')
  .alias('h', 'help')
  .example('$0 http://example.com', 'Open webpage in default browser')
  .example('$0 image.png', 'Open file in default viewer')
  .example('$0 http://example.com -b chrome', 'Open in Chrome')
  .example('$0 http://example.com -b firefox', 'Open in Firefox')
  .example('$0 http://example.com -b chrome -i', 'Open with Chrome in incognito')
  .example('$0 http://example.com -b ie -i', 'Open in IE with InPrivate')
  .example('$0 http://example.com --targs="-n"', 'Open with target app args')
  .usage(`$0. A better native open utility.

Usage: $0 <url|path> [options]`)

const result = extract(yargs.argv)

if (result instanceof Error) {
  console.error(chalk.red.bold(result.message))
  yargs.showHelp()
  process.exit(1)
}

bopen(result.location, result.options)
