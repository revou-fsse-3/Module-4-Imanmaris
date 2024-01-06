

import ListCategory from '../Categories/ListCategory';
import CreateCategory from '../Categories/createCategory';

const CategoryContainer = () => {
  return (
    <div>
      <CreateCategory/>
      <br/>
      <ListCategory />
    </div>
  )
}

export default CategoryContainer