import { Card } from "../../components"


const ApiContainer = () => {

    return (

        <>            
            <Card border className={'flex flex-wrap flex-col items-center'}>
                
                <Card border={false}>
                    <h2 className="w-full text-xl p-4 bg-sky-400/[.9] text-white flex justify-center rounded-md">Connect to API</h2> 

                </Card>
 
            </Card>

        </> 
        
    )
}

export default ApiContainer