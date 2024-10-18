import Sidebar from "./Sidebar";


const ErrorElement = () => {
    return (

        <>

            <div className="flex">
                <Sidebar /> {/* Sidebar component */}
                <div className=" flex-1 p-4"> {/* Main content area */}
                    <div className="flex items-center md:flex-col lg:flex-col flex-row">


                        <video className="absolute -top-1/4 " src="/src/assets/404-men.mp4" width="auto" autoPlay loop> </video>
                        <div className="text-dark-purple font-bold text-5xl text-center absolute top-3/4">Please Try Again With Correct Link</div>
                    </div>

                </div>
            </div>


        </>
    );
};

export default ErrorElement;