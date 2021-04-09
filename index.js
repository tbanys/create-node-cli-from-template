#!/usr/bin/env node
const path = require('path');
const alert = require('cli-alerts');
const copy = require('copy-template-dir');
const { green: g, dim: d } = require('chalk');

const init = require('./utils/init');
const ask = require('./utils/ask');


(async () => {
  init();

  const name = await ask({ message: `CLI name?`, hint: `(kebab-case only)` });
  const description = await ask({ message: `CLI description?` });
  const version = await ask({ message: `CLI version?`, initial: '0.0.1' });
  const license = await ask({ message: `CLI license?`, initial: 'UNLINCENSED' });
  const authorName = await ask({ message: `CLI author name?` });
  const authorEmail = await ask({ message: `CLI author email?` });
  const authorUrl = await ask({ message: `CLI author url?` });

  const vars = { 
    name,
    description,
    version,
    authorName,
    authorEmail,
    authorUrl
  }
  // join for all OS
  // path join has ability to recogize OS and create path for specific OS
  const outDir = vars.name;
  const inDirPath = path.join(__dirname, `template`); 
  const outDirPath = path.join(process.cwd(), outDir); 
  
  copy(inDirPath, outDirPath, vars, (err, createdFiles) => {
    if (err) throw err

    console.log(d(`\nCreating files in ${g(`./${outDir}`)} directory:\n`));

    createdFiles.forEach(filePath => {
      const fileName = path.basename(filePath);
      console.log(`${g(`CREATED`)} ${fileName}`);
    })

    alert({
      type: `success`,
      name: `ALL DONE`,
      msg: `\n\n${createdFiles.length} files created in ${d(`./${outDir}`)} directory`,
    })
  })

})();
