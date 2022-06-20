const { readdirSync, readFileSync, writeFileSync } = require('fs');
const { join } = require('path');

const MODELS_FOLDER = 'src/client/models';

const files = readdirSync(MODELS_FOLDER, { encoding: 'utf8' });

files.forEach((fileName) => {
  const filePath = join(MODELS_FOLDER, fileName);

  const content = readFileSync(filePath, { encoding: 'utf8' });
  const newContent = content.replace(/( +)=\s'',/g, `$1NONE = '',`);

  writeFileSync(filePath, newContent);
});
