# Install Git (if not already installed)
# For Windows: Download from https://git-scm.com/
# For Mac: brew install git
# For Linux: sudo apt-get install git

# Set your name and email
git config --global user.name "Sai Charan Amudala"
git config --global user.email "saicharan@example.com"

# Set your preferred text editor
git config --global core.editor "code --wait"

# Enable color output
git config --global color.ui auto

# Save credentials
git config --global credential.helper store

# Verify the configuration
git config --list

----------------------------

# Navigate to your project directory
cd path/to/your/project

# Initialize a new Git repository
git init

# Check the status of your files
git status

# Add all files to the staging area
git add .

# Commit the changes with a message
git commit -m "Initial commit"

# Check the status again to see the changes
git status
--------------------

## Key Areas in Git
----------------

# Working Directory:
`git init`: to initiate version control on the file
1. This is where you actually work on your project. It contains all the files and folders of your project.
2. Any changes you make to files (edit, delete, or create new files) happen here.
3. Think of it as your working area.
4. Apply git add <--file name--> to move changes(changed files) to Staging Area

# Staging Area (Index) : 

1. Also known as the staging area or index, this is a place where you stage changes before committing them.
2. When you use git add, you move changes from your working directory to the staging area.
3. The staging area holds the changes you are ready to commit. It’s like a holding area for your next commit.
4. You can review and modify the staged changes before making a commit.
5. Apply git commit -m "--msg--" to move changes(changed files) to Local Repository

`Repository`: stores info about what changes are done, who did those changes and when did they update those changes.

# Local Repository:

1. changes are saved in `.git` folder in local system.


# Git Repository:

1. This is where Git permanently stores all your committed changes.
2. After you commit changes from the staging area, they are saved in the repository.
3. The repository is stored in a hidden .git directory within your project folder.


Workflow Overview:
-----------------
Here’s how these areas interact in a typical Git workflow:

# Make Changes in the Working Directory:
-----------------------------------------
You edit, create, or delete files in your working directory.

# Stage Changes:
-----------------
Use git add to move changes from the working directory to the staging area.
Example: git add filename or git add . to stage all changes.

# Commit Changes:
----------------
Use git commit to save the staged changes to the repository.
Example: git commit -m "Your commit message".

# Review Changes:
----------------
1. Use git status to see the status of your working directory and staging area.
2. Use git diff to see the differences between the working directory and the staging area or the last commit.

## Visual Representation
-------------------------
+---------------------+ | Working Directory | +---------------------+ | | git add v +---------------------+ | Staging Area | +---------------------+ | | git commit v +---------------------+ | Repository | +---------------------+