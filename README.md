# ⚛️⚛️⚛️ Atom Multi ⚛️⚛️⚛️

A nice, light little helper to help you open multiple projects in one Atom window.

    npm i -g atom-multi
    atom-multi <project dir> <glob pattern>

For example:

```Shell
atom-multi ~/Documents/work/ "facebook-*"
```

The double quotes are really important! Without the double quotes, bash transforms the glob pattern into a list of applicable file names 🤨

Would open a new Atom window with all the directories inside of `~/Documents/work/`, and beginning with `facebook-`.
