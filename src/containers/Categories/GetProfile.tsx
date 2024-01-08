
import { Card } from "../../components";
import { useEffect, useState } from "react";
import { userProfile } from './../../api/authApi';
import { GetProfileData } from '../../Interfaces/auth';


const GetProfile : React.FC = () => {

    const token = localStorage.getItem('token') ?? '';
    const [users, setCategories] = useState<GetProfileData[]>([]);
  
    useEffect(() => {
      const fetchCategories = async () => {
        try {
          const response = await userProfile(token);
          setCategories(response.data.data);
          
          console.log('Data diri anda terdata disini !')
        } catch (error) {
          console.error(error)
        }
      };
      fetchCategories();
    },[token]);
  
  
    return (
      <Card border= {false} className={'flex flex-wrap flex-col items-center'}>
        
        <h2>Data diri yang tersimpan</h2>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Password</th>
            </tr>
          </thead>

          <tbody>
            {users.map((profile) => (
              <tr key={profile.id}>
                <td>{profile.id}</td>
                <td>{profile.name}</td>
                <td>{profile.password}</td>
              </tr>
            ))}

            <td></td>
            
          </tbody>
        </table>
      </Card>
    )
}
export default GetProfile