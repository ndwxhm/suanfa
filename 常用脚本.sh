查看项目中html,js,vue文件行数
find . "(" -name "*.html" -or -name "*.js" -or -name "*.css" -or -name "*.vue" ")" -print | xargs wc -l