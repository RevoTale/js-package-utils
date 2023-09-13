#!/usr/bin/env node

import { isAbsolute, resolve } from 'path'
import { argv, cwd, exit } from 'process'
import { bundlePackage } from '../src/utils'

const runCLI = () => {
  let [, , dir] = argv
  if (!isAbsolute(dir)) {
    dir = resolve(cwd(), dir)
  }
  bundlePackage(resolve(dir, './build.config.json')).catch(err => {
    console.error(err)
    exit(1)
  })
}
runCLI()
