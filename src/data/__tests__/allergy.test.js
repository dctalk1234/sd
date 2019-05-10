/* global test, describe, it, expect */
'use strict'
const staticData = require("./filesObjects")
const staticData.allergies = require(allergiesFilePath)

describe('tests for allergy', () => {
  test('allergies data files returns array', () => {
    expect(allergies).not.toBe('')
  })
})
