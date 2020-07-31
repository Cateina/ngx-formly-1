import { execSync, ExecSyncOptions } from 'child_process';

export const PACKAGES = [
  'core',
  'schematics',

  // UI
  'bootstrap',
  'material',
  'ionic',
  'primeng',
  'kendo',
  'nativescript',
  'ng-zorro-antd',
  'carbon',
];

export function exec(cmd: string, options: ExecSyncOptions = { stdio: 'inherit' }) {
  return execSync(cmd, options);
}
