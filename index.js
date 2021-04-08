#!/usr/bin/env node
const path = require('path');
const copy = require('copy-template-dir');
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
  const inDir = path.join(__dirname, `template`); 
  const outDir = path.join(process.cwd(), vars.name); 
  
  copy(inDir, outDir, vars, (err, createdFiles) => {
    if (err) throw err
    console.log(`Creating files in ./${vars.name}`);
    createdFiles.forEach(filePath => {
      const fileName = path.basename(filePath);
      console.log(`Created ${fileName}`);
    })
    console.log('Done!')
  })

})();
