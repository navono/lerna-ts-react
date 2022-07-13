module.exports = {
  extends: [
    '@commitlint/config-conventional',
  ],
  // rule 由 name 和配置数组组成，如：'name:[0, 'always', 72]'，
  // 数组第一位：level，可选 0(disable), 1(warning), 2(error)
  // 数组第二位：应用与否，可选 always | nerver
  // 数组第三位：具体配置值
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'build', // 构建系统或者外部依赖的修改
        'update', // 更新某功能（不是 feat，也不是 fix）
        'feat', // 新功能（feature）
        'fix', // 修复 bug
        'refactor', // 重构（不是新增功能，也不是修复 bug）
        'docs', // 文档
        'chore', // 构建过程或者辅助工具的修改
        'style', // 不影响代码含义的修改（空格，格式化，分号等）
        'revert', // 代码回退
        'ci', // CI 配置文件修改
        'perf', // 提升性能导致的修改
        'test', // 测试代码修改
      ],
    ],
    'body-leading-blank': [2, 'always'],
    'type-case': [0],
    'type-empty': [0],
  },
};
