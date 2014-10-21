Learn Pre-Commit
================

Pre-commit hooks let you **run checks** ***before*** allowing a **commit**
(e.g. JSLint or Test Coverage).

![Checklist](http://i.imgur.com/4RXCUyP.jpg)

Think of **pre-commit** as an automatic
[checklist](http://en.wikipedia.org/wiki/Checklist)
for your code. The checks prevents people from committing code
that does not meet the required standards, saving *everyone* time.
Imagine never having to read sloppy code in again...!

## What Types of Checks?

- Code **Consistency** (Lint)
- Code **Style** (e.g. )
- All Unit **Tests Pass**
- **Code Coverage** standards met (**100%**)
- **Performance tests** / benchmarks met.
- **Security** Checks pass.


## What are Git Hooks?

Git Hooks are a a way to fire off custom scripts when
certain important actions occur.
There are two groups of these hooks: **client side** and **server side**.
The client-side hooks are for client operations such as committing and merging.
The server-side hooks are for Git server operations such as automatically
starting the build/test server or notifying team-mates of changes.

You can use these hooks for all sorts of reasons, we are going to focus
on **client-side** pre-commit hooks (checks that are run ***before***
  code is allowed to be committed).

## Node.js

In node-land there are two popular modules we can use to run pre-commit checks:

- **precommit-hook**: https://www.npmjs.org/package/precommit-hook
- **pre-commit**: https://www.npmjs.org/package/pre-commit


## Java

**Why** are you still writing Java...?


## Background Reading

### Git Hooks

- *Way* more than you will *ever* need to know about Git Hooks:
http://git-scm.com/book/en/Customizing-Git-Git-Hooks


### Code Style

- Addy Osmani on Code Style:
http://addyosmani.com/blog/javascript-style-guides-and-beautifiers


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
