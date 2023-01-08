function Home (){
    return(
        <div className="flex flex-col items-center bg-gray-100 w-[100%] h-[100vh] ">
            <h1 className="text-4xl font-bold " >welcome to my website</h1>
            <p className="text-xl">check out my apps: </p>
            <ul>
                <li  className="text-blue-500" >
                    <a href="/todoApp">
                        1. todoApp
                    </a>
                </li>
                <li className="text-blue-500">
                    <a href="/iwwywApp">
                        2. i write what you write app
                    </a>
                </li>
                <li className="text-blue-500">
                    <a href="/thriftingOnline">
                        3. thriftingOnline
                    </a>
                </li>
                <li className="text-blue-500">
                    <a href="/crazyBgChange">
                        4. crazy background change
                    </a>
                </li>
                <li className="text-blue-500">
                    <a href="/clickDog">
                        5. click da dog
                    </a>
                </li>
                <li className="text-blue-500">
                    <a href="/searchYo">
                        6. search Yo
                    </a>
                </li>
            </ul>

        </div>


    )
}

export default Home;
