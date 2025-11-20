export const builderTemplate = `appId: com.company.myapp
productName: MyApp
artifactName: MyApp-1.0.0-win-x64.exe

directories:
  output: release
  buildResources: resources

files:
  - dist/**/*
  - "!**/*.map"
  - "!**/node_modules/*"

asar: true

win:
  target: nsis
  icon: resources/icon.ico

mac:
  target: dmg
  icon: resources/icon.icns

linux:
  target: AppImage
  icon: resources/icons/
  category: Utility

nsis:
  oneClick: false
  perMachine: true
  allowToChangeInstallationDirectory: true
  createDesktopShortcut: true
  createStartMenuShortcut: true`;
