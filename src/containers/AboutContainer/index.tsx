
// import { useSearchParams } from "react-router-dom";
import { Button, Input, Text, Card, Table,} from "../../components"
import {useFormik} from "formik";
import { useState } from "react";
import * as yup from"yup";

interface DataProps {

    street:string;
    city:string;
    state:string;
    code:string;
}

const AboutContainer = () => {

    const [users, setUsers] = useState<DataProps[]>([]); 

    const forMik = useFormik({
        initialValues: {
            street:"",
            city:"",
            state:"",
            code:"",
        },
        onSubmit: (values, {resetForm}) => {
            setUsers([...users, values])
            resetForm()
        },
        validationSchema: yup.object({
            street: yup.string().required(),
            city: yup.string().required(),
            state: yup.string().required(),
            code: yup.number().required(),
        })

    });

    return (

        <>
            
            <Card border className={'flex flex-wrap flex-col items-center'}>
                
                <Card border={false}>
                    
                    <Card border>
                        <h2 className="w-full text-xl bg-sky-400/[.9] text-white flex justify-center rounded-md">Registrasi Akun</h2>
                        <form onSubmit={forMik.handleSubmit} className=" h-[25rem] my-5 px-8 py-2 rounded-lg border-4 border-indigo-200 border-y-indigo-500 ">
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
                            <Button label={"Submit"} type={"submit"} className="w-full py-1 text-sm bg-green-400 opacity-90 mt-3"/>
                                
                        </form >

                    </Card>

                </Card>                                    
                    
                <Card border className="text-sm h-[15rem] px-4 py-4 rounded-lg border-4 border-indigo-200 border-y-indigo-500 ">
                    <Table 
                        headers={[
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
                                    }

                                ]} 
                    data={users}
                    />
                </Card>
   


            </Card>

        </>
        
        
        
    )

}

// const AboutContainer = () => {
//     const [searchParams] = useSearchParams();
//     console.log(searchParams.get('querykey'))

//     return (
//         <div>
//             Halaman About
//         </div>
//     )
// }

export default AboutContainer