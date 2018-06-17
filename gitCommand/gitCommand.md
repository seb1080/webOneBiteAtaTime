Command for Git

pwd  -> Indication of the repertor

cd ~  ->  change directory 

cd ..  -> Move back 

ls ->  List all the file in your project

cd "name of the file" ex: cd desktop -> Allow you to move up filegit 

git add . -> "Ajoute les fichiers au git"

git commit -m "commentaire" -> cela permet d'ajouter un commentaire

git log -> Give the information about the git file and this list of the commit .

git log --author="name of the author" -> will give you the change make by the author

git status -> This compare your local repositery again your working directory

git add "name of the file" ->  Add a file to the repository

git commit -m "commentaire" -> Add comment after a change in the file.

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


