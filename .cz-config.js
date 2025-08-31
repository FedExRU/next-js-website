module.exports = {
  allowBreakingChanges: ['feat', 'fix'],
  allowCustomScopes: true,
  scopes: ['home', 'ui'],
  skipQuestions: ['body', 'breaking', 'footer'],
  subjectLimit: 100,
  types: [
    { name: 'feat:     A new feature', value: 'feat' },
    { name: 'fix:      A bug fix', value: 'fix' },
    { name: 'docs:     Documentation only changes', value: 'docs' },
    {
      name: 'style:    Changes that do not affect the meaning of the code\n            (white-space, formatting, missing semi-colons, etc)',
      value: 'style',
    },
    {
      name: 'refactor: A code change that neither fixes a bug nor adds a feature',
      value: 'refactor',
    },
    {
      name: 'perf:     A code change that improves performance',
      value: 'perf',
    },
    {
      name: 'test:     Adding missing tests or correcting existing tests',
      value: 'test',
    },
    {
      name: 'chore:    Changes to the build process or auxiliary tools\n            and libraries such as documentation generation',
      value: 'chore',
    },
    { name: 'revert:   Revert to a commit', value: 'revert' },
    { name: 'WIP:      Work in progress', value: 'WIP' },
  ],
}
