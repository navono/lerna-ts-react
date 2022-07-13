# App

## 特性

- ESLint

- 提交规范

- 发布规范

- CI 脚本

## 新工程修改点

- package.json

  name, repository,url, publishConfig.registry

- jenkins.sh

  L10: 升级指定包的 scopeName，例如 `@appdevkit`；

  L27: 在 `Jenkins` 中增加 nexus 登录密码环境变量 `NEXUS_PASSWD`；

  L30,31: 指定要发布的分支
