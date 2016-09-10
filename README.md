# utilities


## Development Workflow
### Repository setup
- Fork this repository.
- Clone the fork to your local machine
- Add the main repository as your upstream: 
    
    ```
    git remote add upstream git@github.com:getrailway/utilities.git
    ```
- Install the project dependencies:

    ```
    npm install
    bower install -f
    
    ```   
  ##  Caution 
  Do not nun app locally without stopping it in production, or the algolia indexes will be out of sync.
  
  
