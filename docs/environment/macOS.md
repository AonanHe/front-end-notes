# macOS

## 安装 macOS

### U 盘烧录 macOS Catalina

```bash
$ sudo /Applications/Install\ macOS\ Catalina.app/Contents/Resources/createinstallmedia --volume /Volumes/macOS /Applications/Install\ macOS\ Catalina.app --nointeraction
```

其它版本路径参数 [参考链接](https://support.apple.com/en-us/HT201372)

## Command Line Tools for Xcode

```bash
$ xcode-select --install
```

## [Homebrew](https://brew.sh)

### 安装 Homebrew

```bash
$ /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

## [Oh My Zsh](http://ohmyz.sh)

### 安装 Oh My Zsh

```bash
$ sh -c "$(curl -fsSL https://raw.github.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
```

## SSH

### Generating a new SSH key

```bash
$ ssh-keygen -t rsa -b 4096 -C "your_email@example.com"
```

### Adding your SSH key to the ssh-agent

```bash
Host *
  AddKeysToAgent yes
  UseKeychain yes
  IdentityFile ~/.ssh/id_rsa
```

### Start the ssh-agent in the background.

```bash
$ eval "$(ssh-agent -s)"
> Agent pid 59566
```

### Add your SSH private key to the ssh-agent and store your passphrase in the keychain.

```bash
$ ssh-add -K ~/.ssh/id_rsa
```

### Testing your SSH connection

```bash
$ ssh -T git@github.com
```

## [iTerm](https://iterm2.com/)

### 配置 ZSH

```bash
# 编辑
$ vim ~/.zshrc
# 生效
$ source ~/.zshrc
```

### 美化

[Settings to emojify and prettify your terminal (iTerm2 & ZSH)](https://www.stefanjudis.com/blog/declutter-emojify-and-prettify-your-iterm2-terminal/)

#### 主题

[Snazzy](https://github.com/sindresorhus/iterm2-snazzy)

#### 插件

[zsh-syntax-highlighting](https://github.com/zsh-users/zsh-syntax-highlighting)

[zsh-autosuggestions](https://github.com/zsh-users/zsh-autosuggestions)

```
# .zshrc
plugins=(git zsh-syntax-highlighting zsh-autosuggestions)
```

### 自定义别名

```bash
alias dev='cd ~/Documents/Developer/'
alias gl='cd ~/Documents/Developer/GitLab/'
alias gb='cd ~/Documents/Developer/GitHub/'
alias ogl='cd ~/Documents/Developer/GitLab/ && open .'
alias ogb='cd ~/Documents/Developer/GitHub/ && open .'
$ source ~/.zshrc
```

### 使用 Proxy

```bash
alias goproxy='export http_proxy=http://127.0.0.1:6152 https_proxy=http://127.0.0.1:6152'
alias disproxy='unset http_proxy https_proxy'
```

## [VSCode](https://code.visualstudio.com/)

### Launching from the command line

- Launch VS Code.
- Open the Command Palette (`⇧⌘P`) and type `'shell command'` to find the `Shell Command: Install 'code' command in PATH` command.
- Restart the terminal for the new \$PATH value to take effect. You'll be able to type 'code .' in any folder to start editing files in that folder.

## Node

### 使用 Homebrew 安装 Node

```bash
# 安装 Node
$ brew install node
# 查看可用版本
$ brew search node
# 卸载 Node
$ brew uninstall [--force] node
# 取消当前版本
$ brew unlink node
# 切换到需要的版本
$ brew link node@8 [--force]
# 查看当前版本
$ node -v
# 查看 Node PATH
$ which node
# 添加到 PATH
$ echo 'export PATH="/usr/local/opt/node@8/bin:$PATH"' >> ~/.zshrc
```

## Yarn

### 使用 Homebrew 安装 Yarn

```bash
# 安装 Yarn
$ brew install yarn
# 升级 Yarn
$ brew update yarn
# 查看版本
$ yarn --version
# 初始化新项目
$ yarn init
# 添加依赖包
$ yarn add [package]
$ yarn add [package]@[version]
$ yarn add [package]@[tag]
# 将依赖项添加到不同依赖项类别中
$ yarn add [package] --dev
$ yarn add [package] --peer
$ yarn add [package] --optional
# 升级依赖包
$ yarn upgrade [package]
$ yarn upgrade [package]@[version]
$ yarn upgrade [package]@[tag]
# 移除依赖包
$ yarn remove [package]
# 安装项目的依赖
$ yarn
$ yarn install
```

### 切换镜像源

```bash
# 使用淘宝镜像源
$ npm config set registry https://registry.npm.taobao.org/
# 临时使用淘宝镜像源安装 npm 包
$ npm --registry https://registry.npm.taobao.org install express
# 查看当前镜像源
$ npm config get registry
```

[npm-config](https://docs.npmjs.com/cli/v7/commands/npm-config)

## [Vue.js](https://cn.vuejs.org/)

```bash
# 全局安装 vue-cli
$ npm install --global vue-cli
# 创建一个基于 webpack 模板的新项目
$ vue init webpack my-project
# 安装依赖
$ cd my-project
$ npm install
$ npm run dev
```

## Python

### 使用 Homebrew 安装 Python

```bash
$ brew install python3
$ pip install -r requirements.txt
$ python -V
```

### Python 虚拟环境

```bash
$ pip3 install virtualenv
$ virtualenv --version
$ cd ~/Developer
$ mkdir venv
$ virtualenv -p python3 venv
$ source venv/bin/activate
$ deactivate
```

## MySQL

### 使用 Homebrew 安装 MySQL

```bash
$ brew install mysql

We've installed your MySQL database without a root password. To secure it run:
    mysql_secure_installation

MySQL is configured to only allow connections from localhost by default

To connect run:
    mysql -uroot

To have launchd start mysql now and restart at login:
  brew services start mysql
Or, if you don't want/need a background service you can just run:
  mysql.server start
```

## MongoDB

### 使用 Homebrew 安装 MongoDB

```bash
$ brew install mongodb
$ brew services start mongodb
$ brew services stop mongodb

To have launchd start mongodb now and restart at login:
  brew services start mongodb
Or, if you don't want/need a background service you can just run:
  mongod --config /usr/local/etc/mongod.conf
```

## [Django](https://www.djangoproject.com/)

```bash
$ pip install django
$ python -m django --version
$ django-admin startproject mysite
```
