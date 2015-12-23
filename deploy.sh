#!/bin/bash

ERRORSTRING="Error. Please make sure you've indicated correct parameters"
if [ $# -eq 0 ]
    then
        echo $ERRORSTRING;
elif [ $1 == "live" ]
    then
        if [[ -z $2 ]]
            then
                echo "Performing dry-run..."
                rsync --dry-run -az --force --delete --progress --exclude-from=.rsyncignore -e "ssh -p22" ./dist/ mark@rosebud:/var/www/markhudnall
        elif [ $2 == "go" ]
            then
                echo "Deploying..."
                rsync -az --force --delete --progress --exclude-from=.rsyncignore -e "ssh -p22" ./dist/ mark@rosebud:/var/www/markhudnall
        else
            echo $ERRORSTRING;
        fi
fi
