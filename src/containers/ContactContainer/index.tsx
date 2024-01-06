
import { Button, Input, Text, Card, Table,} from "../../components"
import {useFormik} from "formik";
import { useState } from "react";
import { userLogin } from './../../api/authApi';
import * as yup from"yup";

interface DataProps {

    email: string;
    password:string;
}

const ContactContainer = () => {

    const [users, setUsers] = useState<DataProps[]>([]); 

    const forMik = useFormik({
        initialValues: {
            email:"",
            password:"",
        },
        onSubmit: async (values, {resetForm}) => {
            setUsers([...users, values])
            resetForm()
            try {
                const response = await userLogin(values);
                const token = response.data.data.token;
                localStorage.setItem('token', token);        
                
                // const handleInsertToken = () => {}
        
                console.log('Silahkan anda sudah login');
              } catch (error) {
                console.error(error);
              }
        },
        validationSchema: yup.object({
            email: yup.string().email('invalid email format, example => agus@example.com').required('Email is required'),
            password: yup.string().required(),            
        })
    });

    return (

        <>           
            <Card border className={'flex flex-wrap flex-col items-center'}>
                
                <Card border={false}>
                    <Card border>
                        <h2 className="w-full text-xl bg-sky-400/[.9] text-white flex justify-center rounded-md">Login Akun</h2>
                        <form onSubmit={forMik.handleSubmit} className=" h-[20rem] my-5 px-8 py-2 rounded-lg border-4 border-indigo-200 border-y-indigo-500 ">
                            <div>
                                <Text>{'email'}</Text>
                                <Input className="border-solid border-2 border-sky-500" 
                                name="email"
                                value={forMik.values.email}
                                onBlur={forMik.handleBlur("email")}
                                onChange={forMik.handleChange("email")}
                                />
                                {
                                    forMik.errors.email && (
                                        <Text>{forMik.errors.email}</Text>
                                    )
                                }
                            </div>

                            <div>
                                <Text>{'Password'}</Text>
                                <Input type="password" className="border-solid border-2 border-sky-500" 
                                name="Password"
                                value={forMik.values.password}
                                onBlur={forMik.handleBlur("password")}
                                onChange={forMik.handleChange("password")}
                                />

                                {
                                    forMik.errors.password && (
                                        <Text>{forMik.errors.password}</Text>
                                    )
                                }
                            </div>
                            <Button label={"Login"} type={"submit"} className="w-full py-1 text-sm bg-green-400 opacity-90 mt-3"/>
                                
                        </form >
                    </Card>
 
                </Card>                                     
                    
                <Card border className="w-[16rem] text-sm h-[10rem] px-4 py-7 rounded-lg border-4 border-indigo-200 border-y-indigo-500 ">
                    <Table 
                        headers={[
                                    {
                                        label:"email",
                                        key:"email"
                                    },
                                    {
                                        label:"Password",
                                        key:"password"
                                    }
                                ]} 
                        data={users}
                    />
                </Card>

            </Card>

        </>
              
    )


    // return (
    //     <div>
    //         Halaman Kontak Info
    //     </div>
    // )
}

export default ContactContainer