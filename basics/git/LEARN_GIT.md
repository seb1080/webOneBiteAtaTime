# Git Command

`$ git init` // init local Git repo

`$ git config --global user.name 'Seb'` // define the username

`$ git config --global user.email 'Seb@email.com'` // define the email

`$ touch .gitignore` // to ignore files

`$ git add <file>`  // add file to index

`$ git status` // check status of the working tree

`$ git commit` // Commit Changes to the index
git commit -m "commentaire" -> Add comment after a change in the file.

`$ git push` // Push to Remote repo

`$ git pull` // Pull from Remote repo

`$ git clone` // Clone from Remote repo

`$ git rm --cached <file>` // To unstrack a file

`$ git log` // display the log of the previous commit

`$ git merge <branch>` // merge the into the ongoing branch

`$ git remote -v` // To display origin

`$ git remote set-url origin https://seb1080...` // To change remote repo


# Vim editor in Git bash

`i` // to go in edit mode
`Esc` // to get out of the edit mode
`:wq` // to save and exit


git log -> Give the information about the git file and this list of the commit .

git log --author="name of the author" -> will give you the change make by the author


git diff -> Show you the difference between commits, commit and working tree

git diff --staged -> git-diff-Show changes between commits, commit and working tree.

git --help -> Allow to open the help panel for more information

git mv |name of file| |other file name| -> to rename file.

git mv |name of file| |name of the forlder| -> to move file in a folder.

git checkout -- |name of file| -> This allow you to inspect a specific file.

git reset HEAD |name of the file| ->

git remote add |nick name for the repository| URL -> To connect with a service like gitHub or bitbucket

git push -> Sending your version to the server

git fetch ->


*/ ---------To push a file-------------*/

git status

git add .

git commit -m"commentaire"

git log

git remote -v   <!-- To see the origin available(bithub or bitbucket)----->

git push -u origin


*/ --------To push file to a newBranch---------------*/


git status -> To kow the status of the code

git commit  ->  To add a comment

git checkout -b |name of the new file| -> To creat a new branch for the project

git checkout |name of the new branch| -> To switch branch

git push origin master -> to push the local to the server to the master branch

git push origin |newBranch| -> to push the local repo to the new branch "newBranch"

git branch -> to see all the branch in the project

git branch -> to see all branchs in the project

git branch -d |name of the file| -> to delete a branch



*/ ------------- To clone a repo ---------------------------*/

git clone |name of the file|  --> to clone a repo

EX: https://github.com/sylvainnicole/hh2015.git

git commit -a -> pour commenter un fichier .txt


*/ ---------------- To pull request  ------------------------*/

git pull --> to pull

git status

git status


*/ ---------------- To pull request  ------------------------*/

node server/app.js  --> Pour activer le serveur en local

*/ ---------------- git stash  ------------------------*/




git stash   // to stash the actual change

git branch <name-branch> // to change branch

git stash apply // to apply stash change to the local branch



***** git command *******

git reset --hard HEAD : dangerous command to go back at the previous commit.

Permanently authenticating with Git repositories

$ git config credential.helper store
$ git push http://example.com/repo.git
Username: <type your username>
Password: <type your password>

git config --global credential.helper 'cache --timeout 7200'

To rebase a branch on master

$ git checkout <branchName>
$ git rebase master


To create a branch from the local machine

$ git checkout -b [name_of_your_new_branch]
$ git push origin [name_of_your_new_branch]
$ git branch

To merge a second branch into the master in the git CLI

git checkout master
git pull origin master
git merge [name_of_your_new_branch]
git push origin master

To merge the master in a second branch

git checkout master
git pull
git checkout secondBranch
git merge master


To merge git add . & commit -m ' '

git config --global alias.add-commit '!git add -A && git commit'
or 
git commit -a -m "message"
or 
git add -A && git commit -m "comment" 

OR 
git commit -am "comment"

## Git rebase worflow

`git rebase --continue`: to go to the next step of the rebasing

`git rebase --abort`: to abort the rebasing

`git rebase --skip`; to skip the step


## .gitignore file

**References**

[gitignore menerator](https://gitignore.io/)