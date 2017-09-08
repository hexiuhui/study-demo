---
title: 一步一步教你在阿里云服务器上用Tomcat发布你的HTML网站
date: 2017-09-07 11:17:45
tags: ["建站","前端"]
bgimage: http://ovnev1k2d.bkt.clouddn.com/tomcat.jpg
---
> 人生如寄，似水流年
> 如河驶流，往而不返
> 最惧无常，独遭斯疾

<!--more-->
## 安装JDK和Tomcat
1 安装JDK：直接运行jdk-7-windows-i586.exe可执行程序，默认安装即可。

备注：路径可以其他盘符，不建议路径包含中文名及特殊符号。

2 安装Tomcat：直接解压缩下载文件“apache-tomcat-7.0.33-windows-x86.zip”到C盘下。安装路径建议修改为：c:\tomcat。
 
备注：如下载的是可执行文件，双击运行，默认安装即可。

## 配置JDK环境变量（在步骤查看如何配置环境变量）

1，新建变量名：JAVA_HOME，变量值：C:\Program Files\Java\jdk1.7.0（你的jdk目录）
2，打开PATH，添加变量值：%JAVA_HOME%\bin;%JAVA_HOME%\jre\bin

3，新建变量名：CLASSPATH，变量值：.;%JAVA_HOME%\lib\dt.jar;%JAVA_HOME%\lib\tools.jar

备注：

1，.表示当前路径，%JAVA_HOME%就是引用前面指定的JAVA_HOME；

2，JAVA_HOME指明JDK安装路径，此路径下包括lib，bin，jre等文件夹，tomcat，eclipse等的运行都需要依靠此变量。

3，PATH使得系统可以在任何路径下识别java命令。

4，CLASSPATH为java加载类(class or lib)路径，只有类在classpath中，java命令才能识别。

## 测试JDK

在CMD命令下输入javac
## 配置Tomcat环境变量

1，新建变量名：CATALINA_BASE，变量值：C:\tomcat

2，新建变量名：CATALINA_HOME，变量值：C:\tomcat

3，打开PATH，添加变量值：%CATALINA_HOME%\lib;%CATALINA_HOME%\bin

## 启动Tomcat服务

方法两种：

1，方法一：在CMD命令下输入命令：startup，出现如下对话框，表明服务启动成功。

## 测试Tomcat

打开浏览器，在地址栏中输入http://localhost:8080回车，如果看到Tomcat自带的一个JSP页面，说明你的JDK和Tomcat已搭建成功。
