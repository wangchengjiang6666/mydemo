# git flow

git 的一个工作流程。 这是一个思想。 主要是告诉我们如何操作项目的分支。
目前的 git 下载安装完成之后，默认就提供了 git flow 这个工具。 通过这个工具，能够更好的让我们去操作项目仓库的管理。

## 一些常见分支的介绍

- master 主干分支，线上代码是怎么，这个分支里面就是怎样，不要在这个分支去写代码
- develop 主干分支，项目下一个版本迭代的分支，我们版本的代码都是基于这个 develop 去开发的。 同样不要直接在这个分支上写代码
- feature 分支，功能分支，我们写代码，都是基于 develop 创建 相应的 feature 分支。然后在这个分支上来写代码
- release 分支，版本准备上线前的一个分支，
- hotfix 分支，解决线上 bug 的分支

## 操作流程

- 组长创建好项目，并将组员添加为开发者
- 组员 clone 项目到本地，做一个 git flow init 的操作（git flow 的初始化）。注意需要在 master 分支上面做。

- 组员的日常工作

1. 更新 develop. 在 develop 分支上 做 git pull
2. 基于 develop 分支，切出 一个 功能分支。 git flow feature start xxx
3. 写代码。写完一个小的功能点，就做一次 add commit
4. 准备下班之前，需求做完了，git flow feature finish xxx
5. 先做 git pull ，如果没有冲突，就直接 git push。如果有冲突，就先解决冲突，再 git push
6. 组长组织大家一起对项目做一个测试。没问题的话，大家就下班，有问题解决问题之后再下班。

## 准备上线

1. 确保这一次的版本需求，都完成了，并且做好了测试，的工作
2. git flow release start 版本号
3. git flow release finish 版本号

## bug 的解决

1. 当前正在开发版本中的 bug.
2. 线上的 bug （非常紧急的 bug）
   ? 能否在现在的 2.0.0 的版本中去修改 ？ 不行

   1. 先停止你手上的代码 add commit
   2. 创建一个分支用来修改线上的 bug 。这个分支应该基于那个分支来创建？只能是 master
   3. git flow hotfix start 1.0.1
   4. 修改代码，解决 bug
   5. git flow hotfix finish 1.0.1
