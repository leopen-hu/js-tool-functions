import { forEach } from 'lodash';

export const isMatchIdentifier = (item, identifier) => {
  let matched = true;
  forEach(identifier, (value, key) => {
    if (item[key] !== value) {
      matched = false;
    }
  });
  return matched;
};

export const findItemInLoopList = (list, identifier, loopPropName = 'children') => {
  let result;
  for (let i = 0; i < list.length; i++) {
    const item = list[i];
    if (isMatchIdentifier(item, identifier)) {
      result = item;
    } else if (item[loopPropName] && item[loopPropName].length) {
      result = findItemInLoopList(item[loopPropName], identifier);
    }

    // 查询到第一个符合的结果就跳出循环
    if (result) {
      break;
    }
  }

  return result;
};
