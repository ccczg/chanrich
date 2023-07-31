---
slug: mac-intall-homebrew
title: Homebrew国内如何自动安装(Mac & Linux)
date: 2023-07-31
authors: chanrich
tags: [Homebrew, Mac]
keywords: [Homebrew, Mac]
description: Homebrew国内如何自动安装(Mac & Linux)
image: /img/blog/homebrew.jpg
sticky: 1
---
> 原文链接：https://zhuanlan.zhihu.com/p/111014448

### 自动脚本(全部国内地址)（复制下面一句脚本到终端中粘贴回车)
#### Mac 常规安装脚本（推荐 完全体 几分钟安装完成）：
```sh
/bin/zsh -c "$(curl -fsSL https://gitee.com/cunkai/HomebrewCN/raw/master/Homebrew.sh)"
```
#### Mac 极速安装脚本（精简版 几秒钟安装完成）：
```sh
/bin/zsh -c "$(curl -fsSL https://gitee.com/cunkai/HomebrewCN/raw/master/Homebrew.sh)" speed
```
#### Mac 卸载脚本
```sh
/bin/zsh -c "$(curl -fsSL https://gitee.com/cunkai/HomebrewCN/raw/master/HomebrewUninstall.sh)"
```
#### 常见错误去下方地址查看
> https://gitee.com/cunkai/HomebrewCN/blob/master/error.md

#### Linux 安装脚本：
```sh
rm Homebrew.sh ; wget https://gitee.com/cunkai/HomebrewCN/raw/master/Homebrew.sh ; bash Homebrew.sh
```
#### Linux 卸载脚本：
```sh
rm HomebrewUninstall.sh ; wget https://gitee.com/cunkai/HomebrewCN/raw/master/HomebrewUninstall.sh ; bash HomebrewUninstall.sh
```