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
      async items(parent, { id }, { pgResource }, info) {
        try {
          const items = await pgResource.getItems({
            id,
            title,
            description
          });
          return items;
        } catch (e) {
          throw "Item can't be found";
        }
      },
      async tags(parent, { id }, { pgResource }, info) {
        try {
          const tags = await pgResource.getTags({
            id,
            title
          });
          return tags;
        } catch (e) {
          throw "Tags can't be found";
        }
      }
    },

    User: {
      async items(parent, { id }, { pgResource }, info) {
        try {
          const getItems = await pgResource.getItemsForUser({
            id,
            title,
            description
          });
          return getItems;
        } catch (e) {}
        throw "Item can't be found";
      },
      async borrowed({ id }, args, { pgResource }, info) {
        try {
          const getBorrowedItems = await pgResource.getBorrowedItemsForUser({
            id,
            title,
            description
          });
          return getBorrowedItems;
        } catch (e) {
          throw "Borrowed Item can't be found";
        }
      }
    },

    Item: {
      async itemowner(parent, { id }, { pgResource }, info) {
        try {
          const itemowner = await pgResource.getItemsForUser({
            id,
            fullname,
            email,
            bio
          });
          return itemowner;
        } catch (e) {
          throw "Item owner can't be found";
        }
      },
      async tags() {
        try {
          const getTags = await pgResource.getTagsForItem({
            id,
            title
          });
          return getTags;
        } catch (e) {
          throw "Tags can't be found";
        }
      },
      async borrower() {
        try {
          const borrowedUser = await pgResource.getBorrowedItemsForUser({
            id,
            title,
            description
          });
          if (!borrowedUser) {
            return null;
          } else {
            return borrowedUser;
          }
        } catch (e) {
          throw "Borrowed Item can't be found";
        }
      }
    },

    Mutation: {
      // @TODO: Uncomment this later when we add auth
      // ...authMutations(app),
      // -------------------------------
      async addItem(parent, args, context, info) {
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
