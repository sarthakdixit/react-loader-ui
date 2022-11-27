# First Contributions

This project aims to simplify and guide the way beginners make their first contribution. If you are looking to make your first contribution, follow the steps below.

_If you're not comfortable with command line, [here are tutorials using GUI tools.](#tutorials-using-other-tools)_

#### If you don't have git on your machine, [install it](https://docs.github.com/en/get-started/quickstart/set-up-git).

## Fork this repository

Fork this repository by clicking on the fork button on the top of this page.
This will create a copy of this repository in your account.

## Clone the repository

Now clone the forked repository to your machine. Go to your GitHub account, open the forked repository, click on the code button and then click the _copy to clipboard_ icon.

Open a terminal and run the following git command:

```
git clone "url you just copied"
```

where "url you just copied" (without the quotation marks) is the url to this repository (your fork of this project). See the previous steps to obtain the url.

For example:

```
git clone https://github.com/this-is-you/react-loader-ui.git
```

where `this-is-you` is your GitHub username. Here you're copying the contents of the first-contributions repository on GitHub to your computer.

## Pull Data

Before starting contributing, please always pull latest data from git.
To do that -
1) Open your terminal in your project folder
3) Check if you are in main branch, by running command
```
git status
```
4) if you are not in main branch, than switch to main branch, by running command
```
git checkout main
```
5) After you are in main branch, run command
```
git pull
```
This command will pull latest data from git.

## Add/Update Loaders

1) First we need to intall dependencies. Open terminal in your project folder. And run command
```
npm install
```
Now that dependencies hav been installed, lets move to contributing.

2) Create a new branch, open your terminal in your project folder and run command
```
git checkout -b your-new-branch-name
```
For example
```
git checkout -b spinner-ui
```
Please create your new branch name as same as your new loader name but in small letters. And add '-ui' as suffix.

3) If you want to add new loaders than create a new folder with new loader name in ./src/components
Add files, like index.css and [folder_name].js
[folder_name].js should have a syntax like.
```
export const folder_name = () => {}
```
Take a look at other loaders for help.

4) After adding new loader, import that loader in ./src/components/Requirements/Requirements.js
In return function in Requirement.js file type a condition like
```
{type === "folder_name" ? <NewLoaderComponent ...props /> : null}
```
folder_name should be small letters, no spaces, no special characters.
NewLoaderComponent is the component which you just imported.
...props, are all the props needed for NewLoaderComponent.

There are various props already in Requirements.js, but if you want to add new props than feel free to add them.

5) To check your new loader go to ./src/stories/Requirements.stories.js
Update the name of your loader, remember it is in all small letters, no spaces, no special character.
After updating Requirements.stories.js file, open your terminal in your project folder, and run command.
```
npm run storybook
```