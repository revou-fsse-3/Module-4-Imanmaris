
import { Button, Input, Text, Card, Table,} from "../../components"
import {useFormik} from "formik";
import { useState } from "react";
import * as yup from"yup";

interface DataProps {

    username:string;
    password:string;
}

const ContactContainer = () => {

    const [users, setUsers] = useState<DataProps[]>([]); 

    const forMik = useFormik({
        initialValues: {
            username:"",
            password:"",
        },
        onSubmit: (values, {resetForm}) => {
            setUsers([...users, values])
            resetForm()
        },
        validationSchema: yup.object({
            username: yup.string().required(),
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
                                <Text>{'Username'}</Text>
                                <Input className="border-solid border-2 border-sky-500" 
                                name="Username"
                                value={forMik.values.username}
                                onChange={forMik.handleChange("username")}
                                />
                                {
                                    forMik.errors.username && (
                                        <Text>{forMik.errors.username}</Text>
                                    )
                                }
                            </div>

                            <div>
                                <Text>{'Password'}</Text>
                                <Input className="border-solid border-2 border-sky-500" 
                                name="Password"
                                value={forMik.values.password}
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
                                        label:"Username",
                                        key:"username"
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