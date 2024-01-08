
import { Navigate } from "react-router-dom";
import ListCategory from '../Categories/ListCategory';
import CreateCategory from '../Categories/CreateCategory';

const CategoryContainer = () => {

  const token = localStorage.getItem("token");
  if (token) {

      return (
        <div>
          <CreateCategory/>
          <br/>
          <ListCategory />
        </div>
      )
  }

  return <Navigate to="/Product-specification" />
  // return (
  //   <div>
  //     <CreateCategory/>
  //     <br/>
  //     <ListCategory />
  //   </div>
  // )
}

export default CategoryContainer