/**
 * @type {import('electron-builder').Configuration}
 * @see https://www.electron.build/configuration/configuration
 */
module.exports = {
  appId: 'com.qier222.yesplaymusic',
  productName: 'YesPlayMusic',
  copyright: 'Copyright © 2022 ${author}',
  asar: false,
  directories: {
    output: 'release/${version}',
    buildResources: 'build',
  },
  npmRebuild: false,
  buildDependenciesFromSource: true,
  files: ['dist'],
  win: {
    target: [
      {
        target: 'nsis',
        arch: ['x64'],
      },
      {
        target: 'nsis',
        arch: ['arm64'],
      },
      {
        target: 'nsis',
        arch: ['ia32'],
      },
    ],
    artifactName: '${productName}-${version}-Setup.${ext}',
  },
  nsis: {
    oneClick: false,
    perMachine: false,
    allowToChangeInstallationDirectory: true,
    deleteAppDataOnUninstall: true,
  },
  mac: {
    target: ['dmg'],
    artifactName: '${productName}-${version}-Installer.${ext}',
  },
  linux: {
    target: ['AppImage'],
    artifactName: '${productName}-${version}-Installer.${ext}',
  },
  files: [
    'dist/main/**/*',
    'dist/renderer/**/*',
    {
      from: 'src/main/migrations',
      to: 'dist/main/migrations',
    },
    '!**/node_modules/*/{*.MD,*.md,README,readme}',
    '!**/node_modules/*/{test,__tests__,tests,powered-test,example,examples}',
    '!**/node_modules/*.d.ts',
    '!**/node_modules/.bin',
    '!**/*.{iml,o,hprof,orig,pyc,pyo,rbc,swp,csproj,sln,xproj}',
    '!.editorconfig',
    '!**/._*',
    '!**/{.DS_Store,.git,.hg,.svn,CVS,RCS,SCCS,.gitignore,.gitattributes}',
    '!**/{__pycache__,thumbs.db,.flowconfig,.idea,.vs,.nyc_output}',
    '!**/{appveyor.yml,.travis.yml,circle.yml}',
    '!**/{npm-debug.log,yarn.lock,.yarn-integrity,.yarn-metadata.json,pnpm-lock.yaml}',
    '!**/*.{map,debug.min.js}',
  ],
}
