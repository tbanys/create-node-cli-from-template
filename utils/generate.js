const path = require('path');
const alert = require('cli-alerts');
const copy = require('copy-template-dir');
const { green: g, dim: d } = require('chalk');
const questions = require('./questions');

module.exports = async () => {
  const vars = await questions();
  // join for all OS
  // path join has ability to recogize OS and create path for specific OS
  const outDir = vars.name;
  const inDirPath = path.join(__dirname, `../template`); 
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
}