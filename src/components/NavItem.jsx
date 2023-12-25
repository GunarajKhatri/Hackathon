import { Link } from "react-router-dom";

export default function NavItem(props) {
  return (
    <>
      <div className="flex  text-gray-600 active:bg-black active:rounded-lg active:shadow-2xl active:text-white hover:text-gray-950 cursor-pointer mt-6">
        <props.data.icon className="text-xl cursor-pointer mr-2 my-3  ml-4 " />
        {props.data.isActive ? (
         <Link className="py-3 text-blue-800 hover:text-blue-700 font-semibold" to={props.data.path}>{props.data.label} </Link>
      ) : (
        <Link className="py-3 text-black-500 hover:text-blue-800 font-semibold"  to={props.data.path} onClick={()=>props.update(props.data.id)}>{props.data.label} </Link>
      )}  
      </div>
    </>
  );
}
