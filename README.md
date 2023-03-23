## Intro to Web Development - Class Examples

This repository contains the code snippets from the slides as well as the starter files and solutions to the exercises we will go over in class.


### Topics Covered

- HTML
- Accessibility
- CSS
- Bootstrap
- JavaScript
- jQuery
- Node

Each of the topics above will be organized in a folder that contains the following:
- `examples/` - This folder will include the code snippets from the slides
- `exercises/` - These are the starter files for exercises you should complete prior to attempting the homework. Instructions and screenshots for the exercises are available in the `_<topic>.md` file.
- `solutions/` - All the solutions to the exercises above are in this folder. Additionally, there are video walk-throughs of each solution on MediaLab.

### Setting Up This Repo

1. Fork the repository in GitHub.

2. Clone the forked repository.

```console
$ git clone https://github.com/student/webdev-examples webdev-examples
```

2. Navigate into the newly created `webdev-examples` folder and add another remote

```console
$ git remote -v
origin	  https://github.com/student/webdev-examples.git (fetch)
origin	  https://github.com/student/webdev-examples.git  (push)

$ git remote add examples https://github.com/caterinasworld/webdev-examples.git

$ git remote -v
origin	  https://github.com/student/webdev-examples.git (fetch)
origin	  https://github.com/student/webdev-examples.git  (push)
examples	hhttps://github.com/caterinasworld/webdev-examples.git (fetch)
examples	https://github.com/caterinasworld/webdev-examples.git (push)
```

3. If you want to update any files in your remote, push those files to the origin remote. 

```console
$ git push -u origin main
```

4. If there are any new examples to download, pull those files from the 'examples' remote. 

```console
$ git pull examples main
```
