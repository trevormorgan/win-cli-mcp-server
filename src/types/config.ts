export interface SecurityConfig {
  maxCommandLength: number;
  blockedCommands: string[];
  allowedPaths: string[];
  restrictWorkingDirectory: boolean;
  logCommands: boolean;
  maxHistorySize: number;
}

export interface ShellConfig {
  enabled: boolean;
  command: string;
  args: string[];
  validatePath?: (dir: string) => boolean;
}

export interface ServerConfig {
  security: SecurityConfig;
  shells: {
    powershell: ShellConfig;
    cmd: ShellConfig;
    gitbash: ShellConfig;
  };
}