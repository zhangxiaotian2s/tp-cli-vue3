export NPM_USERNAME=jenkins
export NPM_PASSWORD=Tiens_123
export NPM_EMAIL=jenkins@tiens.com

# 递增版本号
one=`cat package.json |grep '"version"'|awk '{print $2}'|awk '{print substr($0,2,length($0)-3)}'|awk -F '.' '{print $1}'`
two=`cat package.json |grep '"version"'|awk '{print $2}'|awk '{print substr($0,2,length($0)-3)}'|awk -F '.' '{print $2}'`
three=`cat package.json |grep '"version"'|awk '{print $2}'|awk '{print substr($0,2,length($0)-3)}'|awk -F '.' '{print $3}'`
new_three=$(($three+1))
new_version=${one}.${two}.${new_three}
echo ${new_version}
sed -i "" 's#\("version": "\).*#\1'${new_version}'",#g' package.json


# npm run build

# git add .

# git commit -m "更新组件库 ${new_version}"

# git push origin develop-dc1-1.0.0

/usr/bin/expect <<EOD

spawn npm adduser --registry=http://nexus.tiens.com/repository/npm-hosted/ 
expect {
  "Username:" {send "$NPM_USERNAME\r"; exp_continue}
  "Password:" {send "$NPM_PASSWORD\r"; exp_continue}
  "Email: (this IS public)" {send "$NPM_EMAIL\r"; exp_continue}
}
EOD

npm publish --registry=http://nexus.tiens.com/repository/npm-hosted/