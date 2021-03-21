const fs = require('fs')
const path = require('path')

module.exports = {
  title: 'Front-End-Notes',
  description:
    'This is a guide that everyone can use to learn about the practice of front-end development.',
  base: '/front-end-notes/',
  head: [['link', { rel: 'icon', href: '/favicon.ico' }]],
  themeConfig: {
    repo: 'AonanHe/front-end-notes',
    editLinks: true,
    docsDir: 'docs',
    editLinkText: '✏️ Edit this page on GitHub',
    lastUpdated: '📅 Last Updated',
    sidebar: inferSiderbars(),
    nav: [
      {
        text: '首页',
        link: '/'
      },
      {
        text: '笔记',
        link: '/notes/'
      },
      {
        text: '资源',
        link: '/resources/'
      },
      {
        text: '最近阅读',
        link: '/reading/'
      }
    ]
  }
}

/**
 * Creates a docs that automatically lists all files in all subdirectories.
 *
 * @return {Object}
 */
function inferSiderbars() {
  const sidebars = require('./sidebar')
  const dict = {}
  sidebars.forEach(({ title, dirname, group }) => {
    const dirpath = path.resolve(__dirname, '../' + dirname)
    const key = '/' + dirname + '/'
    dict[key] = []
    if (group && group.length) {
      group.forEach((g) => {
        const groupDir = dirpath + '/' + g.dirname
        const children = inferFiles(groupDir, g.dirname)
        dict[key].push({
          title: g.title,
          collapsable: false,
          children
        })
      })
    } else {
      const children = inferFiles(dirpath)
      dict[key].push({
        title,
        collapsable: false,
        children
      })
    }
  })
  return dict
}

function inferFiles(dirpath, dirname) {
  return fs
    .readdirSync(dirpath)
    .filter(
      (item) =>
        item.endsWith('.md') && fs.statSync(path.join(dirpath, item)).isFile()
    )
    .sort((prev, next) =>
      prev.indexOf('README.md') !== -1
        ? -1
        : next.indexOf('README.md') === -1
        ? 1
        : 0
    )
    .map(
      (item) =>
        (dirname ? dirname + '/' : '') + item.replace(/(README)?(.md)$/, '')
    )
}

