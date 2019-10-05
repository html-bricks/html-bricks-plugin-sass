var sass = require('node-sass')

const sassReg = /(\.sass|\.scss)$/

exports.postBuild = function (files) {
  return new Promise((resolve, reject) => {
    const next = files.map(file => {
      if (file.src.match(sassReg)) {
        return Object.assign({}, file, {
          dest: file.dest.replace(sassReg, '.css'),
          content: sass.renderSync({
            data: file.content
          }).css.toString()
        })
      } else {
        return file
      }
    })

    resolve(next)
  })
}
