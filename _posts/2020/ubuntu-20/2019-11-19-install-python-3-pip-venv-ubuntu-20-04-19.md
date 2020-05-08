---
layout: post
title: "Ubuntu 20.04/19.04: Install Python 3.9/3.8/3.7/3.6, Pip and Venv"
image: "images/content/ubuntu.png"
excerpt: "Throughout this tutorial, you’ll learn to install Python 3.8 — the latest major version of Python— on Ubuntu 20.04 — the latest version of Ubuntu"
categories: ubuntu
date: 2020-04-30
tags : [ubuntu, python]
---

Throughout this tutorial, you’ll learn to install Python 3.8 — the latest major version of Python — on Ubuntu 20.04 LTS — the latest version of Ubuntu and you’ll install `pip` — the official tool for installing Python packages from PyPI (**Python Package Index**)— then you’ll create a virtual environment using `venv`.

For installing Python 3.9 version, check out the next section.

## Introducing Python and PIP 

Python is a general purpose programming language that’s used nowadays in various areas such as server-side web applications, data science and scientific calculations etc.
 
Python 3.8 was released on [October 14th, 2019](https://www.python.org/dev/peps/pep-0569/) and comes with many new features:

- The Walrus operator for assignment expressions
- Positional-only arguments
- More Precise Types such as Literal types, Typed dictionaries, Final objects and Protocols
- Simpler debugging with f-Strings
- The Python steering council, etc.

Pip is a utility that allows you to install Python packages. Thanks to pip, you can search, download, and install packages from Python Package Index (PyPI) and other package indexes.

In this post, we'll see how to install pip for Python 3 and Python 2 on Ubuntu 20.04. We will also show the basic concepts for installing and managing Python packages with pip.


## How to Install Python 3.9 on Ubuntu 20.04

You can install Python 3.9 using the following instructions.

```bash
$ sudo apt update
$ sudo apt install software-properties-common
```

Next, add the `ppa:deadsnakes/ppa` PPA to your sources list using: 

```bash
$ sudo add-apt-repository ppa:deadsnakes/ppa
```

Press enter when asked.

Next, install Python 3.9 version using the following command:

```bash
$ sudo apt install python3.9
```

## How to Install Python 3.8 on Ubuntu 20.04

Python has two major versions which are Python 2 and Python 3. In Ubuntu 20.04, Python 3 is included in the base system installation, and Python 2 is available for installation from the Universe repository. Python 2 is dead so it's recommended to use Python 3.

When installing a Python package globally, make sure to install the package’s deb package with the apt utility because they are designed to work properly on Ubuntu systems. Python 3 packages are prefixed with `python3-` and Python 2 packages are prefixed with `python2-`.

You can also utilize pip to install packages globally but ensure that first there is no deb package for the desired module.

It's recommended to use pip inside a virtual environment only. Python Virtual Environments allow you to install Python modules inside an isolated location from your system-wide packages to avoid any conflicts between packages. 

Ubuntu 20.04 and other versions of Debian Linux has Python 3 installed by default. In order to ensure that the installed versions are up-to-date, we can simply update and upgrade the system with the apt command as follows:

```bash
$ sudo apt update
$ sudo apt -y upgrade
```


Once the process is complete, we can check the version of Python 3 that is installed in the system by running the following command:

```bash
$ python3 -V
```
You’ll get the following output displayed in your terminal window that shows the version number of the installed Python 3 binary:

```bash
Output
Python 3.8.2
```

## How to Install pip for Python 3.8 on Ubuntu 20.04?

You can install pip for Python 3 on Ubuntu 20.04 by using the following commands in your terminal as a sudo user:

```bash
$ sudo apt update
$ sudo apt install python3-pip
```

This will also install all the required dependencies for building Python modules.

You can check that the installation is successful by running the following command:

```bash
pip3 --version
The version number may vary, but it will look something like this:
pip 20.0.2 from /usr/lib/python3/dist-packages/pip (python 3.8)
```

## How to Install Python 3.8 on Ubuntu 19.04

Python 3.8 is not available in the official Ubuntu 19.04 default repositories. 

You have two ways to install Python 3.8 on Ubuntu 19.04:

- Installing Python 3.8 via the deb package from the [deadsnakes](https://launchpad.net/~deadsnakes/+archive/ubuntu/ppa) PPA, 
- Building Python 3.8 from the source code.

First run the following commands to update the packages list and install the prerequisites:

```bash
$ sudo apt update
$ sudo apt install software-properties-common
```

Next, add the `deadsnakes` PPA to your system’s sources list using the following command:

```bash
$ sudo add-apt-repository ppa:deadsnakes/ppa
```

You'll be prompted to press Enter to continue.

Next, you can install Python 3.8 using the following command:

```bash
$ sudo apt install python3.8
```

Next, you can check if Python 3.8 is installed using the following command:

```bash
$ python3.8 --version
```

## Install the `venv` Tool

`venv` lets you create virtual environments for your Python 3 projects. A virtual environment is an isolated environment for packages  
`**venv**` is a module that belongs to the standard Python 3 SDK. If it’s not bundled with your Python 3 installation, it can be installed using the following command:


    $ sudo apt install python3-venv


## Creating your Python 3.8 Virtual Environment

You can create a virtual environment using the `venv` module. In your terminal, run the following command:


    $ python3 -m venv env
    
## Activating your Python 3 Virtual Environment

Before, you can be able to install packages inside your virtual environment, you first need to activate it using the `source` command:


    $ source env/bin/activate

You can now install packages in your virtual environment using `pip`.

You can deactivate the virtual environment using the following command in your terminal:


    $ deactivate


The section below is for Python 3.7.

## Updating & Upgrading your Ubuntu Packages


In order to install Python 3.6 on your Ubuntu 18.04 system, you first need to update and upgrade your system to pull the latest available version of Python 3. In your terminal, run the following commands:


    $ sudo apt update
    $ sudo apt -y upgrade

Your system will download the latest versions of packages and ask you if you want to upgrade your current packages.

You can now, check for the installed version of Python 3 using the following command from your terminal:


    $ python3 -V
    Python 3.6.5



## How to Install `pip` on Ubuntu 18.04

`pip` is the official tool that allows you to install Python packages from PyPI. So after installing Python, you next need to install it using the following command:


    $ sudo apt install -y python3-pip

You can now install your Python 3 packages using the following command:


    $ pip3 install flask

`flask` is the name of a package that’s available from PyPI.


> **Note:** Please note that if you don’t have Python 2 installed on your system, you can use `pip` instead of `pip3`.


## Installing Python 3.7 

In order to install Python 3.7 in your Ubuntu 18.04 system, you need to follow a different procedure— You need to install from the source.

In your terminal, run the following command to update your system and upgrade your existing packages:
 


    $ sudo apt update  
    $ sudo apt upgrade -y

Next, install the build tools and Python 3.7 dependencies using the following command:


    $ sudo apt install build-essential libssl-dev zlib1g-dev libncurses5-dev libncursesw5-dev libreadline-dev libsqlite3-dev libgdbm-dev libdb5.3-dev libbz2-dev libexpat1-dev liblzma-dev tk-dev libffi-dev


Next, you need to download the source code of Python 3.7 using the `wget` tool:


    $ wget https://www.python.org/ftp/python/3.7.0/Python-3.7.0.tar.xz


Next, you need to decompress the tar file using:


    $ tar xf Python-3.7.0.tar.xz

Next, navigate inside your decompressed `Python-3.7.0` folder:


    $ cd Python-3.7.0

Now, you need to build your Python 3.7 code using the `configure` and `make` tools:


    $ ./configure --enable-optimizations
    $ sudo make -j 8


Next, run the following command to install the Python 3.7:


    $ sudo make altinstall


You can now run your Python 3.7 program using:



    $ python3.7


If you want to point `python3` to `python3.7` you can use different ways. Run the following command:


    $ sudo update-alternatives --config python3

And choose `python3.7` from the list of the available alternatives.


## Conclusion

In this tutorial, you have seen how to install Python 3.6 and Python 3.7 in your Ubuntu 18.04 system. You have also seen how to install `pip` and `venv` and how to create a virtual environment for isolating your Python 3 packages.
