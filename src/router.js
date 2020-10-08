import Showblog from "@/components/Showblog";
import addBlog from "@/components/addBlog";
import Slogblog from "@/components/Slogblog";

export default [
    {path:"/",component:Showblog},
    {path:"/add",component: addBlog},
    {path:"/blog/:id",component:Slogblog}
]

