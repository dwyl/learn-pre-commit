**Want *consistent* code in your team**...?
====
Learn how to use *Pre-Commit Today*
================

Pre-commit hooks let you **run checks** ***before*** allowing a **commit**
(e.g. JSLint or Test Coverage).

![Checklist](http://i.imgur.com/4RXCUyP.jpg)

Think of **pre-commit** as an automatic
[checklist](http://en.wikipedia.org/wiki/Checklist)
for your code. The checks prevents people from committing code
that does not meet the required standards, saving *everyone* time.
Imagine *never* having to read sloppy code again...!

## What are Git Hooks?

Git Hooks are a a way to fire off custom scripts when
certain important actions occur. e.g:  commit, push, and merge.
There are two groups of these hooks: **client side** and **server side**.
The client-side hooks are for client operations such as committing and merging.
The server-side hooks are for Git server operations such as automatically
starting the build/test server or notifying team-mates of changes.

You can use these hooks for all sorts of reasons, we are going to focus
on **client-side** pre-commit hooks (checks that are run ***before***
  code is allowed to be committed).

## What *types* of checks can we run?

- Code **Consistency** (Lint)
- Code **Style** (e.g. )
- All Unit **Tests Pass**
- **Code Coverage** standards met (**100%**)
- **Performance tests** / benchmarks met.
- **Security** Checks pass.


## How ?

### Node.js

In node-land there are two popular modules we can use to run pre-commit checks:

- **precommit-hook**: https://www.npmjs.org/package/precommit-hook
- **pre-commit**: https://www.npmjs.org/package/pre-commit

Both are *functionally* equivalent so take your pick.  
I'm covering [pre-commit](https://github.com/observing/pre-commit)
because has more *concise* documentation.

#### Install

Install the node module and save it as a
**development dependency** for your project:

```
npm install pre-commit --save-dev
```

#### Define the Scripts we want to Run

Example **package.json** file:

```json
{
  "name": "learn-pre-commit",
  "version": "1.0.0",
  "description": "Node.js pre-commit tutorial",
  "repository": {
    "type": "git",
    "url": "https://github.com/nelsonic/learn-pre-commit"
  },
  "devDependencies": {
    "istanbul": "^0.3.2",
    "pre-commit": "0.0.9",
    "tape": "^3.0.1"
  },
  "scripts": {
    "test": "tape ./test/*.js",
    "coverage": "istanbul cover tape ./test/*.js && istanbul check-coverage --statements 100 --functions 100 --lines 100 --branches 100",
    "jshint": "jshint -c .jshintrc --exclude-path .gitignore .",
  },
  "pre-commit": [
    "jshint",
    "coverage"
  ]
}
```

#### Explanation

The interesting bits here are:

a) **scripts** - a list tasks that can be run.
Each script can be run by issuing the command:
`npm run script-name` (e.g: `npm run coverage` to check the test coverage).

b) **pre-commit** - an array of the scripts we want to run (in order)
*before* we allow a commit. In this case **jshint** ensures
our code is consistent according to the rules for the project and
**coverage** ensures that our desired level of code/test coverage
(**100%**) is met.

#### Example

See /**example** for a ***Hello World*** example.

[![Build Status](https://travis-ci.org/nelsonic/ac.png?branch=master)](https://travis-ci.org/nelsonic/ac)
[![Coverage Status](https://coveralls.io/repos/nelsonic/ac/badge.png)](https://coveralls.io/r/nelsonic/ac)
[![Code Climate](https://codeclimate.com/github/nelsonic/ac.png)](https://codeclimate.com/github/nelsonic/ac)
[![Dependencies](https://david-dm.org/nelsonic/ac.png?theme=shields.io)](https://david-dm.org/nelsonic/ac)
[![devDependency Status](https://david-dm.org/nelsonic/ac/dev-status.svg)](https://david-dm.org/nelsonic/ac#info=devDependencies)

***Try it*** in your own porjects! If you have any *questions*,
submit an issue on GitHub or tweet me [@nelsonic](https://twitter.com/nelsonic)

## Advanced How?

### Problems in Node Land
While using [pre-commit](https://github.com/observing/pre-commit), we found this [issue](https://github.com/dwyl/learn-pre-commit/issues/4).

On installation pre-commit uses [symlink](https://nodejs.org/api/fs.html#fs_fs_symlink_target_path_type_callback) to copy a pre-commit hook into your `.git/hooks` folder. Symlink is useful as it allows you to repeatedly change your hook script without having to copy it into your private `.git/` folder.

This script will then use the package.json to find other scripts to call. But this sometimes causes a problem as in some cases Windows' default security policy will only allow administrators to create symbolic links. Solution...

### Do it yourself!

If you inspect the `.git/hooks` folder you will find you can add/remove hooks easily.

**Hooks can be written in most scripting languages** so you can find any online to use or write your own with your favourite language.

Modify your hooks directly by copy and pasting manually or with a script. The latter is better as it enables all developers in a team to do so easily but...

 ** You will need to find a mechanism to make sure developers first install them and second keep them up to date**

An example of custom hooks written with node and a script to copy them into `.git` folder can be found [here](https://github.com/jrans/Node-Git-Hooks).

Would it have been easier to just adjust the security policy? Probably, but it turns out writing git hooks is easy too! See below for more information on types of hooks.


## Background Reading

### Git Hooks

- Gentle introduction to Git Hooks: http://githooks.com
- *Way* more than you will *ever* need to know about Git Hooks:
http://git-scm.com/book/en/Customizing-Git-Git-Hooks
(the official Git guide to Hooks)


### Code Style

- Addy Osmani on Code Style:
http://addyosmani.com/blog/javascript-style-guides-and-beautifiers
- JavaScript Code Style checker (NPM) module:
https://www.npmjs.org/package/jscs

### Code Quality

- How do we define **Code Quality**?
http://stackoverflow.com/questions/405243/how-do-we-define-code-quality
(interesting discussion. mostly *opinion* - I want an *objective* measure!)
- Software Quality (in depth):
http://en.wikipedia.org/wiki/Software_quality
- ISO/IEC 9126 Software engineering — Product quality:
http://en.wikipedia.org/wiki/ISO/IEC_9126 (*old* but human-readable!)
- Full ISO/IEC 25010 Software Quality Standard (*current*):
https://www.iso.org/obp/ui/#iso:std:iso-iec:25010:ed-1:v1:en
(***tldr;***)

### Java, Ruby, Python, etc.

If you don't want to write your own pre-commit hooks:

- Ruby & Python - checkout pre-commit.com (its multi-language).

- Java - We haven't found a good tool (yet). Our Java Team are using sonar to run code quality checks. (sadly, this is not pre-commit!)

If you find a better pre-commit tools for any language, please inform me or send a PR!
