#! /bin/bash

INKSCAPE="/usr/bin/inkscape"
OPTIPNG="/usr/bin/optipng"

SRC_FILE="assets.svg"
ASSETS_DIR="assets"
INDEX="assets.txt"

for i in `cat $INDEX`
do 
  echo
  echo Rendering $ASSETS_DIR/$i.png
  $INKSCAPE --export-id=$i \
            --export-id-only \
            --export-type=png \
            -o $ASSETS_DIR/$i.png $SRC_FILE >/dev/null \
  && $OPTIPNG -o7 --quiet $ASSETS_DIR/$i.png 
done
exit 0
