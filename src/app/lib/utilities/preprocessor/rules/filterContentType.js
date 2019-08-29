import pathOr from 'ramda/src/pathOr';

const whitelist = ['STY', 'MAP', 'PGL', 'LIV', 'PRO'];
const contentTypes = ['Text']; // For now we are just supporting standard link promos

const filterUnknownContentTypes = data => {
  const groups = pathOr(null, ['content', 'groups'], data);

  if (!groups) {
    return data;
  }

  const newGroups = groups.map(group => {
    // avoid eslint complaints about 'no-param-reassign'
    const newGroup = group;

    if (Array.isArray(group.items)) {
      newGroup.items = group.items.filter(item => {
        const itemType = item.assetTypeCode || item.cpsType;
        const validItemType = whitelist.includes(
          item.cpsType || item.assetTypeCode,
        );
        const validContentType =
          item.assetTypeCode !== 'PRO' ||
          contentTypes.includes(item.contentType);

        return itemType && validItemType && validContentType;
      });
    }

    return newGroup;
  });

  const newData = data;
  newData.content.groups = newGroups;
  return newData;
};

export default filterUnknownContentTypes;
