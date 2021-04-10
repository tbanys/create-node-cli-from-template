const ask = require('./ask');

module.exports = async () => {
  const name = await ask({ message: `CLI name?`, hint: `(kebab-case only)` });
  const command = await ask({ message: `CLI command?`, hint: `(optional: if different from CLI name)` });
  const description = await ask({ message: `CLI description?` });
  const version = await ask({ message: `CLI version?`, initial: '0.0.1' });
  const license = await ask({ message: `CLI license?`, initial: 'UNLINCENSED' });
  const authorName = await ask({ message: `CLI author name?` });
  const authorEmail = await ask({ message: `CLI author email?` });
  const authorUrl = await ask({ message: `CLI author URL?` });

  const vars = { 
    name,
    command: command ? command : name,
    description,
    version,
    license,
    authorName,
    authorEmail,
    authorUrl
  };

  return vars;
};