# Challenge 13: Internet Retail Back End

## Description
Online purchasing services such as Amazon are more prevalent than ever before. However, this raises the question of how an e-commerce site works behind the scenes. This project explores how an online store would organize its categories, products, and tags and connects them with each other. Once you start source the schema, seed the data, and start the server (it has to be in that order), you can open Insomnia on your computer and test various routes. For all three types of data, you can get all items, create a new item, and get/update/delete an item based on its ID. This project taught me how to start up an application using MySQL commands, create models and associations that relate to each other, and write CRUD (Create, Read, Update, Delete) routes to retrieve or manipulate data.

## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [Contributing](#contributing)
- [Tests](#tests)
- [License](#license)
- [Questions](#questions)

## Installation
No installation is required for this project; however, it is recommended to create a .env file in this repository on your own computer where you can store information such as the database name, your mysql username, and your mysql password,  as shown here:

![env file template](Assets/env_file.png)

**Important:** This is necessary because the .env on my computer is included in the .gitignore file and thus it is not a part of my repository. Without creating your own .env file, you could experience trouble connecting to the MySQL database.

**Note:** these directions assume that your MySQL login credentials are already set up. If this is not the case, you would have to create an account prior to creating a `.env` file.

## Usage
The normal functionality of the application is demonstrated by [this walkthrough video](https://www.youtube.com/watch?v=aFXkU_Sb8r4).

**Special cases to consider:**

1. The only difference between `Get All Categories` and `Get Category By ID` is that the latter route ends with an id and the former does not. If you remove the id from the Get Category By ID route, it will function the same as `Get All Categories`.

![Get Category by ID with no ID](Assets/get_category_by_id_without_id.png)

2. Any category names that contain a backslash `\` or a double quote `"` **must** be escaped by a backslash. Otherwise, Insomnia will be unable to parse the JSON because of invalid syntax, as shown in the following four images:

**BACKSLASH \\**

**Incorrect:**
![Unescaped backslash error](Assets/unescaped_backslash_error.png)

**Correct:**
![Escaped backslash](Assets/escaped_backslash.png)

**DOUBLE QUOTE "**

**Incorrect:**
![Unescaped double quote error](Assets/unescaped_double_quote_error.png)

**Correct:**
![Escaped double quote](Assets/escaped_double_quote.png)

3. When you are creating a new product, make sure to format it like this:
![How to create a new product](Assets/how_to_create_new_product.png)

The fields that cannot be null will cause Sequelize errors if they are left null:
**Leaving out the product name:**
![Null product name error](Assets/null_product_name_error.png)

**Leaving out the price:**
![Null price error](Assets/null_price_error.png)

## Credits
Received assistance from AskBCS assistant Keegan and in the *#02-ask-the-class* Slack channel from instructor Robbert Wijtman. The following web resources helped me write the code for this project:

1. [How to build models using autoIncrement](https://sequelize.org/docs/v6/core-concepts/model-basics/)
2. [Naming strategies for models](https://sequelize.org/docs/v7/models/naming-strategies/)
3. [Building associations and assigning foreign keys](https://openclassrooms.com/en/courses/2071486-retrieve-data-using-sql/5758019-create-an-association-table)
4. [Parsing errors in JSON](https://udn.realityripple.com/docs/Web/JavaScript/Reference/Errors/JSON_bad_parse)
5. [Model synchronization in Sequelize](https://sequelize.org/docs/v7/models/model-synchronization/)

## Contributing
I intended to write custom error messages for certain types of faulty user input, but I was unable to figure out how to do that without causing the error `Cannot set headers after they are sent to the client`. If someone can help me figure out how to write specific error messages, that would be greatly appreciated.

## Tests
No tests have been written for this application.

## License
No license is attached to this repository.

## Questions
If you have any questions for me, you can [follow me on GitHub](https://github.com/GimmeKitties711) or email me at eric20wang.wang@gmail.com.
