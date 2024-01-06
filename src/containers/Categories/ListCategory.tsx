
import React, { useEffect, useState } from 'react';
import { deleteCategory, getCategories } from '../../api/categoryApi';
import { CategoryData } from '../../Interfaces/category';
import { Button, Card} from "../../components";

const ListCategory: React.FC = () => {
  const token = localStorage.getItem('token') ?? '';
  const [categories, setCategories] = useState<CategoryData[]>([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await getCategories(token);
        setCategories(response.data.data);
        
        console.log('Dapet bang !')
      } catch (error) {
        console.error(error)
      }
    };
    fetchCategories();
  },[token]);

  const handleEdit = (categoryId: string, categoryName: string, categoryStatus: boolean) => {
    console.log(`edit category with ID: ${categoryId}`);
    console.log(categoryName);
    console.log(categoryStatus);
  };

  const handleDelete = async (categoryId: string) => {
    try {
      await deleteCategory(categoryId, token);
      const updatedCategories = categories.filter((category) => category.id !== categoryId);
      setCategories(updatedCategories);
    } catch (error) {
      console.error(error)
    }
  }

  return (

      <Card border className={'flex flex-wrap flex-col items-center'}>
      <h2 className="w-full text-xl bg-sky-400/[.9] text-white flex justify-center rounded-md">List Category</h2>
        <Card border={false}>
                
                <div>
                  <table>
                    <thead>
                      <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Status</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {categories.map((category) => (
                        <tr key={category.id}>
                          <td>{category.id}</td>
                          <td>{category.name}</td>
                          <td>{category.is_active ? 'Active' : 'Deactive'}</td>
                          <td>
                            <Button label={"Edit"} type={"submit"} className="w-full py-1 text-sm bg-green-400 opacity-90 mt-3" onClick={() => handleEdit(category.id, category.name, category.is_active)}/>
                            <Button label={"Delete"} type={"submit"} className="w-full py-1 text-sm bg-red-400 opacity-90 mt-3" onClick={() => handleDelete(category.id)}/>
                          </td>
                        </tr>
                      ))}
                      <td></td>
                    </tbody>
                  </table>
                </div>

          </Card>
      </Card>

  )
}

export default ListCategory;