import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
    const navigate=useNavigate();
    const handleBtn=()=>{
        navigate(-1)
    }
  return (
    <div>
        <h2>page not found </h2>
        <button className="btn btn-primary" onClick={handleBtn}>Primary</button>

    </div>
  )
}

export default ErrorPage