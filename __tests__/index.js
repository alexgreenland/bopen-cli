const pkg = require('../package.json')
const execa = require('execa')

test('returns version', () => {
  return execa('./index.js', ['--version']).then((result) => {
    expect(result.stdout).toBe(pkg.version)
  })
})

test('returns help', () => {
  return execa('./index.js', ['--help']).then((result) => {
    expect(result.stdout).toContain('Usage')
  })
})

test('errors when no location provided', () => {
  expect.assertions(1)
  return execa('./index.js').catch(e => {
    expect(e.message).toContain('Location not provided')
  })
})

test('launches a URL', () => {
  expect.assertions(1)
  return execa('./index.js', ['http://example.com', '--incognito']).then(result => {
    expect(result.code).toBe(0)
  })
})
