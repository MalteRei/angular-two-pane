# How to contribute

We are happy about contributions to our project, because we need volunteer developers, artists or cooperation partners to help bring this idea to life.

The master branch is protected. We have a GitHub Action in place to deploy changes made to master.

Feel free to create new issues. When doing so please start with the templates to give you a guideline and have uniform looking issues. Of course you can add more details or ommit a section in the template if you see fit. Just be sure that everyone can understand your proposal.


Here are some important resources:

  * [Microsoft Dual Screen](https://docs.microsoft.com/en-us/dual-screen/introduction) has all the information on dual screen development,
  * Have a look at our Kanban Board [for the angular duo pane library](https://github.com/MalteRei/angular-two-pane/projects/1) to work on the library or
  * if you want to help working on usecases of duo pane library have a look at the Kanban Board [for the examples](https://github.com/MalteRei/angular-two-pane/projects/2).


## Submitting changes 📮

Please send a [GitHub Pull Request to angular-two-pane](https://github.com/MalteRei/angular-two-pane/pull/new/master) with a clear list of what you've done (read more about [pull requests](http://help.github.com/pull-requests/)). When you send a pull request, we will love you forever if you include tests examples. We can always use more test coverage. Please follow our coding conventions (below) and make sure all of your commits are atomic (one feature per commit).

If you have never worked with GitHub you can learn the [GitHub flow](https://guides.github.com/introduction/flow/)

Always write a clear log message for your commits. One-line messages are fine for small changes, but bigger changes should look like this:

    $ git commit -m "A brief summary of the commit
    > 
    > A paragraph describing what changed and its impact."
    
## Working on angular duo pane library

Feel free to add suggestions or complaints as issues to the [Kanban Board](https://github.com/MalteRei/angular-two-pane/projects/1) and let's discuss them.
You are also welcome to implement issues or add new functionality.
Please have a look at [semantic versioning](https://docs.npmjs.com/about-semantic-versioning).

1. Once you think you have a new release change the version in the duo pane library [package.json](https://github.com/MalteRei/angular-two-pane/blob/master/duo-pane-workspace/projects/duo-pane-library/package.json) file.
2. Add the new version as a tag `$ git tag -a v[MAJOR.MINOR.PATCH] -m "[version description]"` according to the version from the first step and push it.
3. Now a GitHub action will create a release draft.
4. Let's discuss the release draft.
5. Once everyone is happy with the release we will publish it and another GitHub action will make it available on [npm](https://www.npmjs.com/package/angular-duo-pane). 🤗

## Working on examples

Feel free to add suggestions, questions or complaints as issues to the [Kanban Board](https://github.com/MalteRei/angular-two-pane/projects/2) and let's discuss them.
You are welcome to develop your own usecase as a new angular application under the examples folder or you can continue working on the existing examples.

### Working on example-overview

This angular application is a list of two pane patterns.

For contributing:
1. Create a pull request.
2. Once the pull request is approved the application will be build and deployed to the [example overview site](https://malterei.github.io/angular-two-pane/).


## Coding conventions ✍🏼

Start reading our code and you'll get the hang of it. We optimize for readability:

  * When writing TypeScript please check your code based on [tslint](https://github.com/MalteRei/wirvsvirus-hackathon-spendensport/blob/master/frontend/spendensport/tslint.json)
  * For the Angular frontend project please have a look at [Angular coding style guide](https://angular.io/guide/styleguide)
  * Please document your code so others (and you) can understand later on.
  * Quick [guide](https://dev.to/danialmalik/a-beginner-s-guide-to-clean-code-part1-naming-conventions-139l) to clean code.
  

Thanks and happy coding.
