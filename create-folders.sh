#!/bin/bash

# Define the folder names
folders=("easy" "medium" "hard" "super-hard")
files=("classObject.ts" "encapsulation.ts" "inheritance.ts" "abstraction.ts" "polymorphism.ts")

# Create the folder structure and files
for folder in "${folders[@]}"; do
  mkdir -p "$folder"
  for file in "${files[@]}"; do
    touch "$folder/$file"
  done
done

# Create tsconfig.json and package.json at root level
touch tsconfig.json
touch package.json

echo "Folders and files created successfully."
