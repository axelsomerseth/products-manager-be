# Products Manager Backend

## How to run this project

Pre-requisites

- Have Node.js installed version (+18.x.x recommended).
- Install SQLite with this [Tutorial](https://www.tutorialspoint.com/sqlite/sqlite_installation.htm) or another one you like.

1. Clone this repository into your computer

   ```bash
   git clone git@github.com:axelsomerseth/products-manager-be.git
   ```

2. Install Dependencies

   ```bash
   npm install
   ```

3. Run Migrations

   ```bash
   npm run migrations:up
   ```

4. Run the SQLite Command Line Shell by typing `sqlite3` in the terminal. Then, follow theses steps to import the data successfully from the CSV file.

   ```bash
    sqlite> .open products-manager-db # Open the DB File
    sqlite> .mode csv # Set CSV mode
    sqlite> .separator , # Set separator
    sqlite> .import ./source/db/data.csv product_tmp # Import into a temporary table
    sqlite> select count(handle) from product_tmp; # View how many rows were imported
    sqlite> insert into product(handle, title, description, sku, grams, stock, price, comparePrice, barcode) select * from product_tmp; # Insert into the actual product table
    sqlite> drop table product_tmp; # Delete temporary table
    sqlite> update product set userId = 1; # Update the User ID to the Test User
   ```

5. Run the server in dev mode

   ```bash
   npm run dev
   ```

## Test User Credentials

- Username: johndoe@example.com
- Password: password
