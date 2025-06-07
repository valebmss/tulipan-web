const execPath = process.env.npm_execpath || "";

if (execPath.includes("npm") && !execPath.includes("yarn")) {
  console.error('\n🚫 ERROR: Este proyecto usa Yarn. ¡NO uses `npm install`!\n');

  // Borra el package-lock.json si lo generaron
  const fs = require('fs');
  const path = './package-lock.json';
  if (fs.existsSync(path)) {
    fs.unlinkSync(path);
    console.log('🧹 Se eliminó package-lock.json automáticamente.');
  }

  process.exit(1);
}
const fs = require('fs');
const pkg = JSON.parse(fs.readFileSync('./package.json', 'utf-8'));

/*if (pkg.dependencies && pkg.dependencies[pkg.name] === 'file:') {
  console.error(`\n🚫 Este proyecto no puede depender de sí mismo: "${pkg.name}: file:"\n`);
  process.exit(1);
}*/