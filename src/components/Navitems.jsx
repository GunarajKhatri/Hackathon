export default function NavItem(props) {
  return (
    <>
      <div className="flex text-gray-600 w-26 active:bg-black active:rounded-lg active:shadow-2xl active:text-white hover:text-gray-950 cursor-pointer mt-6">
        <props.data.icon className="text-lg cursor-pointer mr-1 my-3  ml-4 " />
        <h1 className=" text-md py-2">{props.data.label}</h1>
      </div>
    </>
  );
}
