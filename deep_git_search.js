const { execSync } = require('child_process');

const branches = ['main', 'kenjabek-only', 'remotes/kenjabek-rus/main'];

for (const branch of branches) {
  console.log(`Searching in branch: ${branch}`);
  try {
    const result = execSync(`git grep "Свадебная" ${branch}`, { encoding: 'utf8' });
    console.log(result);
  } catch (e) {
    console.log(`Not found in ${branch}`);
  }
}
