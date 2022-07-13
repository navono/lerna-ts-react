const ncu = require('npm-check-updates');
const simpleGit = require('simple-git');

const upgaradePackageList = ['@appdevkit/*', '@supcon/*'];

const options = {
  baseDir: process.cwd(),
  binary: 'git',
  maxConcurrentProcesses: 6,
};
const git = simpleGit(options);

// 暂存现在所有的更改
console.log('暂存当前所有修改\n');
git.stash();

ncu
  .run({
    // These are set by default:
    // jsonUpgraded: true,
    upgrade: true,
    silent: true,

    // Any command-line option can be specified here.
    packageManager: 'yarn',
    filter: upgaradePackageList,
    packageFile: './package.json',
  })
  .then((upgraded) => {
    console.log(`当前最新版本：`, upgraded);
    gitOperation();
  });

function gitOperation() {
  // 拉取 repo
  const branch = 'standalone-FSV2';
  console.log(`从远端 ${branch} 分支拉取最新代码`);
  git.pull('origin', branch, { '--rebase': 'true' });

  git
    .status()
    .then((result) => {
      if (result.conflicted.length > 0) {
        console.error('请解决冲突文件');
        return;
      }
      if (result.modified.length > 0) {
        console.log('向 git 添加被修改的 package.json');
        git.add(['package.json']);

        console.log('提交修改');
        git.commit('chore: packages upgrade');

        console.log('推送到远端仓库');
        git.push();
      }
    })
    .finally(() => {
      // 恢复之前的更改
      console.log('\n恢复暂存的所有修改');
      git.stash(['pop']);
    });
}
