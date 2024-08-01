#!/usr/bin/env bash

SOURCE=${BASH_SOURCE[0]}
while [ -L "$SOURCE" ]; do
  DIR=$( cd -P "$( dirname "$SOURCE" )" >/dev/null 2>&1 && pwd )
  SOURCE=$(readlink "$SOURCE")
  [[ $SOURCE != /* ]] && SOURCE=$DIR/$SOURCE
done
DIR=$( cd -P "$( dirname "$SOURCE" )" >/dev/null 2>&1 && pwd )
DIR_NAME=${DIR##*/}

LAST_DIR=$PWD
[ -f $DIR_NAME.zip ] && rm $DIR_NAME.zip
zip $DIR_NAME.zip -T -1  *.html "LICENSE.txt" "styles"/* "scripts"/*

cd $LAST_DIR