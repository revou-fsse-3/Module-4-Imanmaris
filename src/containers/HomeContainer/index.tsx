
import { Button, Input, Text, Card, Table } from "../../components"
import {useFormik} from "formik";
import { useState } from "react";
import * as yup from"yup";

interface DataProps {
    name:string;
    email: string;
    dob: string;
    street:string;
    city:string;
    state:string;
    code:string;
    username:string;
    password:string;
}

const HomeContainer = () => {

    const [users, setUsers] = useState<DataProps[]>([]); 


    const forMik = useFormik({
        initialValues: {
            name:"",
            email:"",
            dob:"",
            street:"",
            city:"",
            state:"",
            code:"",
            username:"",
            password:"",
        },
        onSubmit: (values, {resetForm}) => {
            setUsers([...users, values])
            resetForm()
        },
        validationSchema: yup.object({
            name: yup.string().required(),
            email: yup.string().email('Invalid email format, example => agus@example.com').required('Email is required'),
            dob: yup.date().required('Date of Birth is required, example => 11-11-2000'),
            street: yup.string().required(),
            city: yup.string().required(),
            state: yup.string().required(),
            code: yup.string().required(),
            username: yup.string().required(),
            password: yup.string().required(),
            

        })

    });

    return (

        <>
            <Card border className={'flex flex-wrap flex-col items-center'}>
                <Card border={false} className={'flex'}>
                    <Card border>
                        <form onSubmit={forMik.handleSubmit} className=" h-[20rem] my-2 px-8 py-2 rounded-lg border-4 border-indigo-200 border-y-indigo-500 ">
                            <div>
                                <Text>{'Nama'}</Text>
                                <Input className="border-solid border-2 border-sky-500" 
                                name="nama"
                                value={forMik.values.name}
                                onChange={forMik.handleChange("name")}
                                />

                                {
                                    forMik.errors.name && (
                                        <Text>{forMik.errors.name}</Text>
                                    )
                                }
                            </div>
                            <div>
                                <Text>{'Email'}</Text>
                                <Input className="border-solid border-2 border-sky-500" 
                                name="email"
                                value={forMik.values.email}
                                onChange={forMik.handleChange("email")}
                                />

                                {
                                    forMik.errors.email && (
                                        <Text>{forMik.errors.email}</Text>
                                    )
                                }
                            </div>
                            <div>
                                <Text>{'Tanggal Lahir'}</Text>
                                <Input className="border-solid border-2 border-sky-500" 
                                name="dob"
                                value={forMik.values.dob}
                                onChange={forMik.handleChange("dob")}
                                />

                                {
                                    forMik.errors.dob && (
                                        <Text>{forMik.errors.dob}</Text>
                                    )
                                }
                            </div>
                            {/* <Button label={"Submit"} type={"submit"} className="w-full py-1 text-sm bg-green-400 opacity-90 mt-3"/> */}
                        
                        </form >
                        
                    </Card>

                    <Card border>
                        <form onSubmit={forMik.handleSubmit} className=" h-[25rem] my-2 px-8 py-2 rounded-lg border-4 border-indigo-200 border-y-indigo-500 ">
                            <div>
                                <Text>{'Alamat Jalan'}</Text>
                                <Input className="border-solid border-2 border-sky-500" 
                                name="Alamat Jalan"
                                value={forMik.values.street}
                                onChange={forMik.handleChange("street")}
                                />

                                {
                                    forMik.errors.street && (
                                        <Text>{forMik.errors.street}</Text>
                                    )
                                }
                            </div>
                            <div>
                                <Text>{'Kota'}</Text>
                                <Input className="border-solid border-2 border-sky-500" 
                                name="Kota"
                                value={forMik.values.city}
                                onChange={forMik.handleChange("city")}
                                />

                                {
                                    forMik.errors.city && (
                                        <Text>{forMik.errors.city}</Text>
                                    )
                                }
                            </div>
                            <div>
                                <Text>{'Negara'}</Text>
                                <Input className="border-solid border-2 border-sky-500" 
                                name="Negara"
                                value={forMik.values.state}
                                onChange={forMik.handleChange("state")}
                                />

                                {
                                    forMik.errors.state && (
                                        <Text>{forMik.errors.state}</Text>
                                    )
                                }
                            </div>
                            <div>
                                <Text>{'Kode Zip'}</Text>
                                <Input className="border-solid border-2 border-sky-500" 
                                name="Kode Zip"
                                value={forMik.values.code}
                                onChange={forMik.handleChange("code")}
                                />

                                {
                                    forMik.errors.code && (
                                        <Text>{forMik.errors.code}</Text>
                                    )
                                }
                            </div>
                            {/* <Button label={"Submit"} type={"submit"} className="w-full py-1 text-sm bg-green-400 opacity-90 mt-3"/> */}
                        
                        </form >

                    </Card>

                    <Card border>
                        <form onSubmit={forMik.handleSubmit} className=" h-[20rem] my-2 px-8 py-2 rounded-lg border-4 border-indigo-200 border-y-indigo-500 ">
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
                            <Button label={"Submit"} type={"submit"} className="w-full py-1 text-sm bg-green-400 opacity-90 mt-3"/>
                        
                        </form >

                    </Card>
                </Card>
                
                <Card border className="text-sm h-[15rem] px-4 py-4 rounded-lg border-4 border-indigo-200 border-y-indigo-500 ">
                            <Table headers={[
                                {
                                    label:"Nama",
                                    key:"name"
                                },
                                {
                                    label:"Email",
                                    key:"email"
                                },
                                {
                                    label:"Tanggal Lahir",
                                    key:"dob"
                                },
                                {
                                    label:"Alamat Jalan",
                                    key:"street"
                                },
                                {
                                    label:"Kota",
                                    key:"city"
                                },
                                {
                                    label:"Negara",
                                    key:"state"
                                },
                                {
                                    label:"Kode Zip",
                                    key:"code"
                                },
                                {
                                    label:"Username",
                                    key:"username"
                                },
                                {
                                    label:"Password",
                                    key:"password"
                                }


                            ]} data={users}
                            />
                </Card>

            </Card>

        </>
        
        
        
    )
}

export default HomeContainer