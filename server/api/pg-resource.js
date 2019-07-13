// this file is responsible for firing sql queries

function tagsQueryString(tags, itemid, result) {
  /**
   * Challenge:
   * This function is more than a little complicated.
   *  - Can you refactor it to be simpler / more readable?
   */
  const length = tags.length;
  return length === 0
    ? `${result};`
    : tags.shift() &&
        tagsQueryString(
          tags,
          itemid,
          `${result}($${tags.length + 1}, ${itemid})${length === 1 ? "" : ","}`
        );
}



const result = tagsQueryString([5, 6, 7], 1, "");
console.log(result);

module.exports = postgres => {
  return {
    async createUser({ fullname, email, password }) {
      const newUserInsert = {
        text: "", // @TODO: Authentication - Server
        values: [fullname, email, password]
      };
      try {
        const user = await postgres.query(newUserInsert);
        return user.rows[0];
      } catch (e) {
        switch (true) {
          case /users_fullname_key/.test(e.message):
            throw "An account with this username already exists.";
          case /users_email_key/.test(e.message):
            throw "An account with this email already exists.";
          default:
            throw "There was a problem creating your account.";
        }
      }
    },
    async getUserAndPasswordForVerification(email) {
      const findUserQuery = {
        text: "", // @TODO: Authentication - Server
        values: [email]
      };
      try {
        const user = await postgres.query(findUserQuery);
        if (!user) throw "User was not found.";
        return user.rows[0];
      } catch (e) {
        throw "User was not found.";
      }
    },
    async getUserById(id) {
      /**
       *  @TODO: Handling Server Errors
       *
       *  Inside of our resource methods we get to determine when and how errors are returned
       *  to our resolvers using try / catch / throw semantics.
       *
       *  Ideally, the errors that we'll throw from our resource should be able to be used by the client
       *  to display user feedback. This means we'll be catching errors and throwing new ones.
       *
       *  Errors thrown from our resource will be captured and returned from our resolvers.
       *
       *  This will be the basic logic for this resource method:
       *  1) Query for the user using the given id. If no user is found throw an error.
       *  2) If there is an error with the query (500) throw an error.
       *  3) If the user is found and there are no errors, return only the id, email, fullname, bio fields.
       *     -- this is important, don't return the password!
       *
       *  You'll need to complete the query first before attempting this exercise.
       */

      const findUserQuery = {
        // this id is coming from index.js
        text: "SELECT * FROM users WHERE id = $1 LIMIT 1;", // @TODO: Basic queries
        // 1st value of the array will represent $1 and 2nd value will represent $2. etc
        values: [id]
      };

      /**
       *  Refactor the following code using the error handling logic described above.
       *  When you're done here, ensure all of the resource methods in this file
       *  include a try catch, and throw appropriate errors.
       *
       *  Ex: If the user is not found from the DB throw 'User is not found'
       *  If the password is incorrect throw 'User or Password incorrect'
       */
      try {
        const user = await postgres.query(findUserQuery);
        return user.rows[0];
        // console log user to find out what user is
      } catch (e) {
        throw "User cant be found";
      }
    },
    async getItems(idToOmit) {
      const items = await postgres.query({
        /**
         *  @TODO:
         *
         *  idToOmit = ownerId
         *
         *  Get all Items. If the idToOmit parameter has a value,
         *  the query should only return Items were the ownerid !== idToOmit
         *
         *  Hint: You'll need to use a conditional AND and WHERE clause
         *  to your query text using string interpolation
         */

        // Get all items where idToOmit = ownerId, if that idToOmit has a value return items
        // only where the ownerId does not equal to idToOmit
        // this refers to the front page where you want to only see other people's items
        text: `SELECT * FROM items WHERE ownerId = $1`,
        values: idToOmit ? [idToOmit] : []
      });
      return items.rows;
    },
    async getItemsForUser(id) {
      const items = await postgres.query({
        /**
         *  @TODO:
         *  Get all Items for user using their id
         */

        // this refers to your profile page where you wanna see all your items only
        text: `SELECT * FROM items WHERE ownerId = $1;`,
        values: [id]
      });
      return items.rows;
    },
    async getBorrowedItemsForUser(id) {
      const items = await postgres.query({
        /**
         *  @TODO:
         *  Get all Items borrowed by user using their id
         */
        text: `SELECT * FROM items WHERE (borrowerid = $1);`,
        values: [id]
      });
      return items.rows;
    },
    async getTags() {
      const tags = await postgres.query({
        /* @TODO: Basic queries */
        text: `SELECT * FROM tags`,
        values: [id]
      });
      return tags.rows;
    },
    async getTagsForItem(id) {
      const tagsQuery = {
        // @TODO: Advanced query Hint: use INNER JOIN

        // get all tags id for a particular item id
        text: `SELECT * FROM a.items, b.tags INNER JOIN a ON b;`,
        values: [id]
      };

      const tags = await postgres.query(tagsQuery);
      return tags.rows;
    },
    async saveNewItem({ item, image, user }) {
      /**
       *  @TODO: Adding a New Item
       *
       *  Adding a new Item to Posgtres is the most advanced query.
       *  It requires 3 separate INSERT statements.
       *
       *  All of the INSERT statements must:
       *  1) Proceed in a specific order.
       *  2) Succeed for the new Item to be considered added
       *  3) If any of the INSERT queries fail, any successful INSERT
       *     queries should be 'rolled back' to avoid 'orphan' data in the database.
       *
       *  To achieve #3 we'll use something called a Postgres Transaction!
       *  The code for the transaction has been provided for you, along with
       *  helpful comments to help you get started.
       *
       *  Read the method and the comments carefully before you begin.
       */

      return new Promise((resolve, reject) => {
        /**
         * Begin transaction by opening a long-lived connection
         * to a client from the client pool.
         * - Read about transactions here: https://node-postgres.com/features/transactions
         */
        postgres.connect((err, client, done) => {
          try {
            // Begin postgres transaction
            client.query("BEGIN", async err => {
              const { title, description, tags } = item;
              console.log(tags);

              const tagVal = tags.map(tag => tag.id);
              // console.log(tagVal);

              // Generate new Item query
              // @TODO
              // -------------------------------

              // Insert new Item
              // @TODO
              // -------------------------------

              // Generate tag relationships query (use the'tagsQueryString' helper function provided)
              // @TODO
              // -------------------------------

              // Insert tags
              // @TODO
              // -------------------------------

              const newItem = await client.query({
                // 1st query: saving items in items table
                text: `INSERT INTO items (title, description, ownerId) VALUES ($1, $2, 1) RETURNING *`,
                values: [title, description]
              });
             
              const newItemId = newItem.rows[0];
              const idInsert = newItemId.id;
              console.log(idInsert);

              const newItemsTags = await client.query({
                text: `INSERT INTO items_tags (tagsid, itemsid) VALUES ${ tagsQueryString(tags, newItem.rows[0].id, '')}`,
                values:  tagVal
              });

             
              


              // const itemVal = newItem.rows[0];

              // console.log(itemVal);

              // const insertItems = await postgres.query({
              //   // 2nd query: inserting in to tag relations table, to define relationships in the tags
              //   text: `INSERT INTO items_tags (itemsid, tagsid) VALUES ($1, $2)`,
              //   values: []
              // });

              //console.log(saveItems);
              // console.log(insertItems);
              // await client.query(insertItems);

              // Commit the entire transaction!
              client.query("COMMIT", err => {
                if (err) {
                  throw err;
                }
                // release the client back to the pool
                done();
                // Uncomment this resolve statement when you're ready!
                resolve(newItem.rows[0]);
                // -------------------------------
              });
            });
          } catch (e) {
            // Something went wrong
            client.query("ROLLBACK", err => {
              if (err) {
                throw err;
              }
              // release the client back to the pool
              done();
            });
            switch (true) {
              default:
                throw e;
            }
          }
        });
      });
    }
  };
};
