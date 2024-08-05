#!/bin/bash

# Ensure the script stops if any command fails
set -e

# Navigate to your project directory
cd "$HOME/Documents/2024 ventures/lovely-real-estate-photography"

# Add an exception for the safe directory warning
git config --global --add safe.directory "$(pwd)"


# Configure the Git user
git config user.email "singhjeetpal001@gmail.com"
git config user.name "Jeetpal Singh"

# Add all changes to the staging area
git add .

# Commit the changes with a message
git commit -m "added new functionality"

# Push the changes to the remote repository
git push

# Inform the user of the successful deployment
echo "Changes have been committed and pushed to GitHub."
