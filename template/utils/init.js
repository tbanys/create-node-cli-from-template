const pkgJSON = require('./../package.json');
const welcome = require('cli-welcome');
const checkNode = require('cli-check-node');
const unhandled = require('cli-handle-unhandled');

module.exports = ({ clear  = true }) => {
  unhandled();

  welcome({
    title: '{{name}}',
    tagLine: 'by {{authorName}}',
    description: pkgJSON.description,
    version: pkgJSON.version,
    bgColor: `#FADC00`,
    color: `#000000`,
    bold: true,
    clear,
  });

  checkNode('10');
};