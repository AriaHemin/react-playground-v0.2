import './index.css';
import TodoApp from "./pages/todoApp";
import Home from "./pages/home"
import Appiwwyw from './pages/iwwywApp';
import {BrowserRouter , Routes , Route } from "react-router-dom";
import ThriftingOnline from './pages/thriftingOnline';
import CrazyBgChange from './pages/crazyBgChange';
import ClickDog from './pages/clickDog';
import SearchYo from './pages/searchYo';
import ShopItemsDetail from './pages/shopItemsDetail';



function App() {
        
        return(
            <div className="App">
                <BrowserRouter>
                    <Routes>
                        <Route exact path='/react-playground' element={<Home/>} />
                        <Route exact path='/todoApp' element={<TodoApp/>} />
                        <Route exact path='/iwwywApp' element={<Appiwwyw/>}/>
                        <Route exact path='/thriftingOnline' element={<ThriftingOnline/>}/>
                        <Route exact path='/crazyBgChange' element={<CrazyBgChange/>}/>
                        <Route exact path='/clickDog' element={<ClickDog/>}/>
                        <Route exact path='/searchYo' element={<SearchYo/>}/>
                        <Route exact path='/shopItemsDetail' element={<ShopItemsDetail/>}/>
                        <Route exact path='/shopItemsDetail/:id' element={<ShopItemsDetail/>}/>
                    </Routes>
                </BrowserRouter>
            </div>
    )
}       

export default App;
