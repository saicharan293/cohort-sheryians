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