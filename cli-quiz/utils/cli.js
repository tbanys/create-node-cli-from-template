const meow = require('meow');
const meowHelper = require('cli-meow-help');

const flags = {
  clear: {
    type: 'boolean',
    default: true,
    desc: 'Clear the console'
  },
  debug: {
    type: 'boolean',
    default: false,
    alias: 'd',
    desc: 'Print debug info'
  },
  version: {
    type: 'boolean',
    default: false,
    alias: 'v',
    desc: 'Print cli version'
  },
};

const commands = {
  help: {
    desc: `Print the help info`,
  },
};

const helpText = meowHelper({
  name: 'quiz',
  flags,
  commands,
});

const options = {
  inferType: true,
  description: false,
  hardRejection: false,
  flags
}

module.exports = meow(helpText, options);