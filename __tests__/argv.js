const argv = require('yargs-parser')
const extract = require('../argv')

test('returns an error with no location', () => {
  expect(extract(argv(''))).toEqual(new Error('Location not provided'))
})

test('will call bopen with the location', () => {
  expect(extract(argv('http://example.com'))).toEqual({
    location: 'http://example.com',
    options: {
      incognito: false,
      background: false,
      browser: undefined,
      app: undefined,
      args: [],
      appArgs: []
    }
  })
})

test('will call bopen with the location and incognito', () => {
  expect(extract(argv('http://example.com --incognito'))).toEqual({
    location: 'http://example.com',
    options: {
      incognito: true,
      background: false,
      browser: undefined,
      app: undefined,
      args: [],
      appArgs: []
    }
  })
})

test('will call bopen with the location and background', () => {
  expect(extract(argv('http://example.com --background'))).toEqual({
    location: 'http://example.com',
    options: {
      incognito: false,
      background: true,
      browser: undefined,
      app: undefined,
      args: [],
      appArgs: []
    }
  })
})

test('will call bopen with the location, incognito and browser', () => {
  expect(extract(argv('http://example.com --incognito --browser chrome'))).toEqual({
    location: 'http://example.com',
    options: {
      incognito: true,
      background: false,
      browser: 'chrome',
      app: undefined,
      args: [],
      appArgs: []
    }
  })
})

test('will call bopen with the location, incognito and app', () => {
  expect(extract(argv('http://example.com --incognito --app "google chrome"'))).toEqual({
    location: 'http://example.com',
    options: {
      incognito: true,
      background: false,
      browser: undefined,
      app: 'google chrome',
      args: [],
      appArgs: []
    }
  })
})

test('will call bopen with the location, incognito, app and opener args', () => {
  expect(extract(argv('http://example.com --incognito --app "google chrome" --oargs="--oarg1 value --oarg2"'))).toEqual({
    location: 'http://example.com',
    options: {
      incognito: true,
      background: false,
      browser: undefined,
      app: 'google chrome',
      args: ['--oarg1', 'value', '--oarg2'],
      appArgs: []
    }
  })
})

test('will call bopen with the location, incognito, app, opener args and target app args', () => {
  expect(extract(argv('http://example.com --incognito --app safari --oargs="--oarg1 value --oarg2" --targs="--targ1 value --targ2"'))).toEqual({
    location: 'http://example.com',
    options: {
      incognito: true,
      background: false,
      browser: undefined,
      app: 'safari',
      args: ['--oarg1', 'value', '--oarg2'],
      appArgs: ['--targ1', 'value', '--targ2']
    }
  })
})
