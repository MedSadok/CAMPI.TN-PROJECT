import React,{Component} from 'react';
import AdminHeader from "./AdminHeader";
import SideBar from "./SideBar";
import Content from "./Content";

class Admin extends Component {
    render(){
        return (
            <div>
                <AdminHeader/>
                <SideBar/>
                <Content/>
            </div>
        );
    }
}

export default Admin;