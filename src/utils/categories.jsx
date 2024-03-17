import {faker} from '@faker-js/faker'

const generateCategories = (numCategories) => {
  const categories = [];
  
  for (let i = 0; i < numCategories; i++) {
    const category = {
      id: faker.string.uuid(),
      name: faker.commerce.department()
    };
    
    categories.push(category);
  }
  
  return categories;
};

export default generateCategories;