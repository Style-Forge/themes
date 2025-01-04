import fs from 'fs'
import postcss from 'postcss'

import pImport from 'postcss-import'
import pMinify from 'postcss-minify'

const [from, to] = ['src/all.css', 'themes.css']
const css = fs.readFileSync(from, 'utf8')

const packageFile = JSON.parse(fs.readFileSync('package.json', 'utf8'))
const title = packageFile.name + ' ' + packageFile.version
const license = packageFile.license + ' License'
const link = packageFile.repository.url.replace('git+', '').replace('.git', '')
const header = '/*! ' + [title, license, link].join(' | ') + ' */'

const plugins = [pImport, pMinify]

postcss(plugins)
  .process(css, { from })
  .then(({ css}) => fs.writeFile(to, [header, css].join('\n\n'), () => true))
