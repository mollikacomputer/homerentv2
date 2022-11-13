import About from "../components/About";
import Contact from "../components/Contact";
import Home from "../components/Home/Home";
import Login from "../components/Login";
import Notfound from "../components/Notfound";
import Registration from "../components/Registration";
import Service from "../components/Services/Service";
import Services from "../components/Services/Services";

export const PublicRoute =[
{path:'/', name:Home, Component:Home},
{path:'/about', name:About, Component:About},
{path:'/contact', name:Contact, Component:Contact},
{path:'/login', name:Login, Component:Login},
{path:'/registration', name:Registration, Component:Registration},
{path:'/services', name:Services, Component:Services},
{path:'/service', name:Service, Component:Service},
{path:'*', name:Notfound, Component:Notfound}
]