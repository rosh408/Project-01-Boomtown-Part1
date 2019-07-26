const { ApolloError } = require("apollo-server-express");
const { DateScalar } = require("../custom-types");
const authMutations = require("./auth");

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
      // original, uncomment when solution has been found
      // async items(parent, { filter }, { pgResource }, info) {
      //   try {
      //     const items = await pgResource.getItems(filter);
      //     return items;
      //   } catch (e) {
      //     throw "Item can't be found";
      //   }
      // },
      async items(parent, { filter }, { pgResource }, info) {
        try {
          const items = await pgResource.getItems(filter);
          return items;
        } catch (e) {
          console.log(e);
          throw "Items can't be found";
        }
      },
      async tags(parent, args, { pgResource }, info) {
        try {
          const tags = await pgResource.getTags();
          return tags;
        } catch (e) {
          throw "Tags can't be found";
        }
      }
    },

    User: {
      async items({ id }, args, { pgResource }, info) {
        try {
          const getItems = await pgResource.getItemsForUser(id);
          return getItems;
        } catch (e) {}
        throw "Item can't be found";
      },
      async borrowed({ id }, args, { pgResource }, info) {
        try {
          const getBorrowedItems = await pgResource.getBorrowedItemsForUser(id);
          return getBorrowedItems;
        } catch (e) {
          throw "Borrowed Item can't be found";
        }
      }
    },

    Item: {
      async itemowner({ ownerid }, args, { pgResource }, info) {
        try {
          const itemowner = await pgResource.getUserById(ownerid);
          // console.log(ownerid);
          return itemowner;
        } catch (e) {
          throw "Item owner can't be found";
        }
      },
      async tags({ id }, args, { pgResource }, info) {
        try {
          const getTags = await pgResource.getTagsForItem(id);
          return getTags;
        } catch (e) {
          throw "Tags can't be found";
        }
      },
      async borrower({ borrowerid }, args, { pgResource }, info) {
        try {
          const borrowedUser = await pgResource.getUserById(borrowerid);
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
      ...authMutations(app),
      async addItem(parent, { item }, { pgResource }, info) {
        try {
          const user = "Rosh";
          const newItem = await pgResource.saveNewItem({
            item: item,
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
