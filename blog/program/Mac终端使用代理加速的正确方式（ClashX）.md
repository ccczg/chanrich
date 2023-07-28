---
slug: mac-terminal-proxy-by-clashx
title: Mac终端使用代理加速的正确方式（ClashX）
date: 2023-07-28
authors: chanrich
tags: [ClashX, Clash,Terminal,Proxy]
keywords: [ClashX, Clash, Proxy,terminal]
description: Mac终端开启代理加速
image: /img/blog/clashx.png
sticky: 1
---
![clashx](/img/blog/clashx.png)
## 环境
macOS 13.4.1，使用 ClashX 1.115.1，ClashX 正常代理，使用自带终端。
## 前提
已经有Clash代理节点并能正常访问代理
## 前言
我们在终端使用 Homebrew、git、npm 等命令时，总会因为网络问题而安装失败。
尤其是安装 Homebrew，据我了解很多朋友是花了很长时间来解决，心里不知道吐槽该死的网络多少遍了。
## 设置方式

### 临时生效
通过设置 `http_proxy、https_proxy`，可以让终端走指定的代理。
配置脚本如下，在终端直接执行，只会临时生效：

```sh
export http_proxy=http://127.0.0.1:7890
export https_proxy=$http_proxy
```
7890 是 http 代理对应的端口，请不要照抄作业，根据你的实际情况修改。

你可以在 Clash 的设置界面中查找代理端口信息。

### 永久生效

```sh
function proxy_on() {
    export http_proxy=http://127.0.0.1:7890
    export https_proxy=\$http_proxy
    echo -e "终端代理已开启。"
}

function proxy_off(){
    unset http_proxy https_proxy
    echo -e "终端代理已关闭。"
}
```

通过 `proxy_on` 启动代理，`proxy_off` 关闭代理。

接下来需要把脚本写入```.bash_profile```或```.zprofile```，这样就可以永久生效。

至于你应该写入哪个文件，请根据命令 ```echo $SHELL``` 返回结果判断：

```
/bin/bash => .bash_profile
/bin/zsh => .zprofile
```

### 打开代理
`proxy_on`
### 关闭代理
`proxy_off`

参考文章：[终端使用代理加速的正确方式（Clash）](https://weilining.github.io/294.html)
