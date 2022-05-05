/**
 * {}
 * @author yutent<yutent.io@gmail.com>
 * @date 2022/05/05 11:21:01
 */

import scss from 'sass'
import fs from 'iofs'
import { parse } from 'path'
import { execSync } from 'child_process'
import chokidar from 'chokidar'
import chalk from 'chalk'

const CINNAMON_SCSS = './cinnamon/sass/cinnamon.scss'
const CINNAMON_STYLE = './cinnamon/cinnamon.css'
const GTK3_SCSS = './gtk-3.0/sass/gtk.scss'
const GTK3_STYLE = './gtk-3.0/gtk.css'

function render(file) {
  return scss.renderSync({
    file,
    indentType: 'space',
    indentWidth: 2
  }).css
}

/*=======================================================*/
/*=====                                               ===*/
/*=======================================================*/

let ready = false
let timer = null

chokidar
  .watch('./')
  .on('all', (act, file) => {
    if (!ready) {
      return
    }
    if (act === 'add' || act === 'change') {
      let { ext } = parse(file)

      if (ext === '.scss') {
        clearTimeout(timer)
        timer = setTimeout(_ => {
          console.log('更新 Cinnamon 样式……')
          {
            let style = render(CINNAMON_SCSS)
            fs.echo(style, CINNAMON_STYLE)
          }
          console.log('更新 Cinnamon 完成!!!')

          console.log('更新 Gtk3 样式……')
          {
            let style = render(GTK3_SCSS)
            fs.echo(style, GTK3_STYLE)
          }

          console.log('更新 Gtk3 完成!!!')
          console.log()

          execSync('bash ./update-theme.sh', {
            stdio: [process.stdin, process.stdout, process.stdout]
          })
        }, 1000)
      }
    }
  })
  .on('ready', () => {
    ready = true
    console.log(chalk.red('预处理完成,监听文件变化中,请勿关闭本窗口...'))
  })
