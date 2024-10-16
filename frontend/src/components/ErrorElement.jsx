import Sidebar from "./Sidebar";


const ErrorElement = () => {
    return (

        <>

<div className="flex">
      <Sidebar/> {/* Sidebar component */}
      <div className="flex-1 p-4"> {/* Main content area */}
         <div className="pt-32 font-bold text-5xl text-center">404 Not Found</div>
      </div>
    </div>


        </>
    );
};

export default ErrorElement;