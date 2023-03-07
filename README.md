oclif-hello-world
=================

oclif example Hello World CLI

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/oclif-hello-world.svg)](https://npmjs.org/package/oclif-hello-world)
[![CircleCI](https://circleci.com/gh/oclif/hello-world/tree/main.svg?style=shield)](https://circleci.com/gh/oclif/hello-world/tree/main)
[![Downloads/week](https://img.shields.io/npm/dw/oclif-hello-world.svg)](https://npmjs.org/package/oclif-hello-world)
[![License](https://img.shields.io/npm/l/oclif-hello-world.svg)](https://github.com/oclif/hello-world/blob/main/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g cli-gpt
$ cgpt COMMAND
running command...
$ cgpt (--version)
cli-gpt/0.0.0 darwin-arm64 node-v16.17.0
$ cgpt --help [COMMAND]
USAGE
  $ cgpt COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`cgpt hello PERSON`](#cgpt-hello-person)
* [`cgpt hello world`](#cgpt-hello-world)
* [`cgpt help [COMMANDS]`](#cgpt-help-commands)
* [`cgpt plugins`](#cgpt-plugins)
* [`cgpt plugins:install PLUGIN...`](#cgpt-pluginsinstall-plugin)
* [`cgpt plugins:inspect PLUGIN...`](#cgpt-pluginsinspect-plugin)
* [`cgpt plugins:install PLUGIN...`](#cgpt-pluginsinstall-plugin-1)
* [`cgpt plugins:link PLUGIN`](#cgpt-pluginslink-plugin)
* [`cgpt plugins:uninstall PLUGIN...`](#cgpt-pluginsuninstall-plugin)
* [`cgpt plugins:uninstall PLUGIN...`](#cgpt-pluginsuninstall-plugin-1)
* [`cgpt plugins:uninstall PLUGIN...`](#cgpt-pluginsuninstall-plugin-2)
* [`cgpt plugins update`](#cgpt-plugins-update)

## `cgpt hello PERSON`

Say hello

```
USAGE
  $ cgpt hello PERSON -f <value>

ARGUMENTS
  PERSON  Person to say hello to

FLAGS
  -f, --from=<value>  (required) Who is saying hello

DESCRIPTION
  Say hello

EXAMPLES
  $ oex hello friend --from oclif
  hello friend from oclif! (./src/commands/hello/index.ts)
```

_See code: [dist/commands/hello/index.ts](https://github.com/MagicCube/cli-gpt/blob/v0.0.0/dist/commands/hello/index.ts)_

## `cgpt hello world`

Say hello world

```
USAGE
  $ cgpt hello world

DESCRIPTION
  Say hello world

EXAMPLES
  $ cgpt hello world
  hello world! (./src/commands/hello/world.ts)
```

## `cgpt help [COMMANDS]`

Display help for cgpt.

```
USAGE
  $ cgpt help [COMMANDS] [-n]

ARGUMENTS
  COMMANDS  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for cgpt.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v5.2.6/src/commands/help.ts)_

## `cgpt plugins`

List installed plugins.

```
USAGE
  $ cgpt plugins [--core]

FLAGS
  --core  Show core plugins.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ cgpt plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v2.3.2/src/commands/plugins/index.ts)_

## `cgpt plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ cgpt plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.
  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.


ALIASES
  $ cgpt plugins add

EXAMPLES
  $ cgpt plugins:install myplugin

  $ cgpt plugins:install https://github.com/someuser/someplugin

  $ cgpt plugins:install someuser/someplugin
```

## `cgpt plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ cgpt plugins:inspect PLUGIN...

ARGUMENTS
  PLUGIN  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ cgpt plugins:inspect myplugin
```

## `cgpt plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ cgpt plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.
  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.


ALIASES
  $ cgpt plugins add

EXAMPLES
  $ cgpt plugins:install myplugin

  $ cgpt plugins:install https://github.com/someuser/someplugin

  $ cgpt plugins:install someuser/someplugin
```

## `cgpt plugins:link PLUGIN`

Links a plugin into the CLI for development.

```
USAGE
  $ cgpt plugins:link PLUGIN

ARGUMENTS
  PATH  [default: .] path to plugin

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Links a plugin into the CLI for development.
  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello'
  command will override the user-installed or core plugin implementation. This is useful for development work.


EXAMPLES
  $ cgpt plugins:link myplugin
```

## `cgpt plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ cgpt plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ cgpt plugins unlink
  $ cgpt plugins remove
```

## `cgpt plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ cgpt plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ cgpt plugins unlink
  $ cgpt plugins remove
```

## `cgpt plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ cgpt plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ cgpt plugins unlink
  $ cgpt plugins remove
```

## `cgpt plugins update`

Update installed plugins.

```
USAGE
  $ cgpt plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```
<!-- commandsstop -->
