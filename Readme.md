# BeMaster Lambdas

# Project Description
This collection of Lambda functions is developed using Node.js. It includes functions for array manipulation and database connection. The functions are designed to be efficient and easy to use in any project that requires cloud data processing or database management.


## Features
- **Node.js:** All Lambda functions are written in JavaScript using Node.js.
- **Array Manipulation:** Functions to perform various operations on arrays, such as filtering, mapping, and ordering.
- **Database Connection:** Functions to connect to and perform operations on SQL databases.
- **AWS Secrets Manager:** Functions to securely manage and retrieve secrets, such as database credentials, API keys, and other sensitive information.
- **Easy Local Testing:** Designed to easily testing in local enviroment.


## Requirements
- Node.js version v21.7.1 or higher.
- An AWS account with permissions to deploy Lambda functions and access AWS Secrets Manager.


## Installation
1. Clone this repository to your local machine.  
    ```bash
    git clone git@github.com:Brekkaz/test-bemaster-lambdas.git
    ```

2. Navigate to the project directory and to one of the folder tasks that are Lambdas (task1, task2, task4).
    ```bash
    cd test-bemaster-lambdas/[task]
    ```

3. Install the dependencies. (Task 4 only)  
    ```bash
    npm install 
    ```

4. Configure AWS SDK. (Task 4 only)  
    Set up the AWS SDK by exporting the following variables in your console session.
    ```bash
    export AWS_REGION=[zone]
    export AWS_ACCESS_KEY_ID=[secret_access_key]
    export AWS_SECRET_ACCESS_KEY=[access_key]
    ```
    For further alternatives and more information, you can refer to [AWS docs](https://docs.aws.amazon.com/sdk-for-javascript/v2/developer-guide/configuring-the-jssdk.html)

5. Configuring environment variables. (Task 4 only)  
    Set environment variables according to the values ​​of your secrets in AWS Secrets Manager.

6. Execution.  
    Run the lambda functions using the command.
    ```bash
    npm run test
    ```

Note: Task 3 is an SQL script. This should be executed on a database instance. After its first execution, this script can become idempotent by uncommenting lines 12 and 14. 


### Deployment Using ZIP File
1. Navigate to the directory of the Lambda function you want to deploy. Ensure all dependencies are installed.
    ```bash
    cd test-bemaster-lambdas/[task]
    ```

2. Next, create a ZIP file containing the Lambda function code and its dependencies; exclude the test file, It's not needed on the production enviroment. 
    ```bash
    zip -r function-name.zip . -x test.js
    ```

3. Deploy the zip file as the code origin in the AWS Lambda function on your AWS console.


## Contributors
- Breyner Mola \<breyner.mola.9@gmail.com\>


## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.