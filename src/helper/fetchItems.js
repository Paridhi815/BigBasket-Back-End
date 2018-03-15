const rp = require('request-promise');

const fetchItems = () => {
  const url = 'https://5gj1qvkc5h.execute-api.us-east-1.amazonaws.com/dev/inventory';
  const requestPromise = rp(url).then((result1) => {
    const items = JSON.parse(result1);
    const itemsArray = [];
    items.inventory.forEach((item) => {
      let itemObj = {};
      itemObj = item;
      //   itemObj.jo table me column name chaiye=item.jo api ki hai;
      itemObj.itemId = item.id;
      itemsArray.push(itemObj);
    });
    return itemsArray;
  });
  return requestPromise;
};

module.exports = {
  fetchItems,
};

