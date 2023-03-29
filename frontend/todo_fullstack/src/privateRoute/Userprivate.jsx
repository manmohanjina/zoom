
import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom"


export default function UserPrivate({children}){

    const success=useSelector((store)=>store.authreducer.success)
    if(!success){
        
        return <Navigate to='/login' />
    }
    else{
        return children
    }
}