
import { Button, Input, Text } from "../../components"
import {useFormik} from "formik";
import * as yup from"yup";


const HomeContainer = () => {

    const forMik = useFormik({
        initialValues: {
            name:"",
            email:"",
            dob:"",
        },
        onSubmit: (values) => console.log(values),
        validationSchema: yup.object({
            name: yup.string().required(),
            email: yup.string().email('Invalid email format, example => agus@example.com').required('Email is required'),
            dob: yup.date().required('Date of Birth is required, example => 11-11-2000'),

        })

    });

    return (
        <>
            <form onSubmit={forMik.handleSubmit} className="m-8 px-8 py-4 rounded-lg border-4 border-indigo-200 border-y-indigo-500 ">
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
                <Button label={"Submit"} type={"submit"} className="bg-green-400 opacity-90 mt-3"/>
            </form>

        </>
    )
}

export default HomeContainer