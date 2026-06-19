const fs = require('fs');
const path = require('path');

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walkDir(dirPath, callback) : callback(path.join(dir, f));
  });
}

walkDir('src', function(filePath) {
  if (filePath.endsWith('.tsx') || filePath.endsWith('.ts')) {
    let content = fs.readFileSync(filePath, 'utf8');
    let newContent = content.replace(/-orange-50/g, '-brand-50')
                           .replace(/-orange-100/g, '-brand-100')
                           .replace(/-orange-200/g, '-brand-200')
                           .replace(/-orange-300/g, '-brand-300')
                           .replace(/-orange-400/g, '-brand-400')
                           .replace(/-orange-500/g, '-brand-500')
                           .replace(/-orange-600/g, '-brand-600')
                           .replace(/-orange-700/g, '-brand-700')
                           .replace(/-orange-800/g, '-brand-800')
                           .replace(/-orange-900/g, '-brand-900');
    if (content !== newContent) {
      fs.writeFileSync(filePath, newContent, 'utf8');
      console.log('Updated: ' + filePath);
    }
  }
});
