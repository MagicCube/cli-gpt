# cli-gpt

Translate human language to command line using ChatGPT.

## Usage

```sh-session
$ npm install -g magiccube-cli-gpt

$ cgpt clone react from github and switch to a new branch named feature/gpt
Translating your words into command line...... done

git clone https://github.com/facebook/react.git && cd react && git checkout -b feature/gpt

$ cgpt delete all the docker untitled images
Translating your words into command line...... done

docker rmi $(docker images -f "dangling=true" -q)

CAUTION: This command is dangerous!

$ cgpt 删除所有文件和文件夹
Translating your words into command line...... done

rm -rf *

CAUTION: This command is dangerous!
```

## Documents

请参考[中文文档](docs/index.md)
