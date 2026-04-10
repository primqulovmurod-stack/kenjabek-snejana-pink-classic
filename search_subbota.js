const fs = require('fs');
const path = require('path');

const target = '\u0421\u0423\u0411\u0411\u041e\u0422\u0410';

function search(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    try {
      if (fs.statSync(fullPath).isDirectory()) {
        if (!fullPath.includes('node_modules') && !fullPath.includes('.next')) {
          search(fullPath);
        }
      } else if (file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.js') || file.endsWith('.json')) {
        const content = fs.readFileSync(fullPath, 'utf8');
        if (content.includes(target)) {
          console.log('Found "' + target + '" in:', fullPath);
        }
      }
    } catch (e) {}
  }
}

search('d:/Murod/Startup/Onlinetaklifnoma');
