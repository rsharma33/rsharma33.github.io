# Install rimraf globally if not already installed
if (-not (Get-Command rimraf -ErrorAction SilentlyContinue)) {
    npm install -g rimraf
}

# Remove node_modules folder
rimraf node_modules

Write-Host "node_modules folder has been removed."