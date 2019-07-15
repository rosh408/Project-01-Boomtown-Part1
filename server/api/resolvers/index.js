
const { ApolloError } = require("apollo-server-express");
const { DateScalar } = require("../custom-types");

module.exports = app => {
  return {
    Date: DateScalar,

    Query: {
      viewer() {
        return null;
      },
      async user(parent, { id }, { pgResource }, info) {
        try {
          const user = await pgResource.getUserById(id);
          return user;
        } catch (e) {
          throw new ApolloError(e);
        }
      },
      async items() {
        return [];
      },
      async tags() {
        return [];
      }
    },

    User: {
      // @TODO: Uncomment these lines after you define the User type with these fields
      // items() {
      //   // @TODO: Replace this mock return statement with the correct items from Postgres
      //   return []
      //   // -------------------------------
      // },
      // borrowed() {
      //   // @TODO: Replace this mock return statement with the correct items from Postgres
      //   return []
      //   // -------------------------------
      // }
      // -------------------------------
    },

    Item: {
      /**
       *  @TODO: Advanced resolvers
       *
       *  The Item GraphQL type has two fields that are not present in the
       *  Items table in Postgres: itemowner, tags and borrower.
       *
       * According to our GraphQL schema, the itemowner and borrower should return
       * a User (GraphQL type) and tags should return a list of Tags (GraphQL type)
       *
       */
      // @TODO: Uncomment these lines after you define the Item type with these fields
      async itemowner() {
        return {
          id: 1,
          fullname: "Rosh Canlas",
          email: "rosh_408@hotmail.com",
          bio: "Full Stack Web Developer"
        }
      },
      async tags() {
      //   // @TODO: Replace this mock return statement with the correct tags for the queried Item from Postgres
      //   return []
      //   // -------------------------------
      },
      async borrower() {
      //   /**
      //    * @TODO: Replace this mock return statement with the correct user from Postgres
      //    * or null in the case where the item has not been borrowed.
      //    */
      //   return null
      //   // -------------------------------
      }
    },

    Mutation: {
      // @TODO: Uncomment this later when we add auth
      // ...authMutations(app),
      // -------------------------------

      async addItem(parent, args, context, info) {
        /**
         *  @TODO: Destructuring
         *
         *  The 'args' and 'context' parameters of this resolver can be destructured
         *  to make things more readable and avoid duplication.
         *
         *  When you're finished with this resolver, destructure all necessary
         *  parameters in all of your resolver functions.
         *
         *  Again, you may look at the user resolver for an example of what
         *  destructuring should look like.
         */

        try {
          const user = "Rosh";
          const newItem = await context.pgResource.saveNewItem({
            item: args.item,
            image: undefined,
            user: user
          });
          return newItem;
        } catch (e) {
          throw "Item cant be inserted";
        }
      }
    }
  };
};
