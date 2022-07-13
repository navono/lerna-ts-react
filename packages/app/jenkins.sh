export LANG="en_US.UTF-8"

yarn

# 与上一次发布对比的提交次数
commitCount=$(git rev-list $(git describe --tags --abbrev=0)..HEAD --count)
echo "距离上次发布有 ${commitCount} 次提交"

# 与当前的依赖包相比，是否存在升级
firstPkg=$(./node_modules/.bin/ncu -f "@appdevkit/*,@supcon/*" | awk 'NR==4')
echo "依赖包：""${firstPkg}"

if [ "${commitCount}" = "0" ] && [ "${firstPkg}" = "All dependencies match the latest package versions :)" -o "${firstPkg}" = "No dependencies." ]; then
  echo "没有提交或者依赖包升级，退出发布"
  exit 0;
else
  npm config set registry http://192.168.25.57:8081/repository/npm-group/
  yarn config set registry http://192.168.25.57:8081/repository/npm-group/

  yarn config set SASS_BINART_SITE http://10.10.21.34:6007/node-sass/
  yarn config set PYTHON_MIRROR http://10.10.21.34:6007/python
  yarn config set disturl http://10.10.21.34:6007/node/
  yarn config set ELECTRON_MIRROR http://10.10.21.34:6007/electron/
  yarn config set CHROMEDRIVER_CDNURL http://10.10.21.34:6007/chromedriver/

  # 需要在 Jenkins 上指定 Nexus 仓库的登陆密码 NEXUS_PASSWD
  ./node_modules/.bin/npm-cli-login -r http://192.168.25.57:8081/repository/npm-private -u admin-private -p "${NEXUS_PASSWD}" -e admin-private@sipcon.com
  
  # 分支切换已经在 Jenkins 中处理，这里需要设置仓库上游分支名
  git push --set-upstream origin master
  yarn release --git.requireBranch=master --ci
fi;
