function inventoryList() {
  // write your code here
  let items = [];
  const methods = {
    add: (name) => {
      const indx = items.findIndex((items) => items === name);
      console.log(indx);
      if (indx === -1) {
        items.push(name);
        console.log(items);
      }
    },
    remove: (name) => {
      const indx = items.findIndex((items) => items === name);
      if (indx != -1) {
        items.splice(indx, 1);
      }
    },
    getList: () => {
      console.log(items);
      return items;
    },
  };
  return methods;
}

const obj = inventoryList();
obj.add("Trousers");
obj.getList();
