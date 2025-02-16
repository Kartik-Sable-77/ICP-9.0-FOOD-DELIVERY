import { BiFoodMenu } from "react-icons/bi";
import { LuSoup } from "react-icons/lu";
import { MdOutlineFreeBreakfast } from "react-icons/md";
import { CiBowlNoodles } from "react-icons/ci";
import { RiRestaurant2Line } from "react-icons/ri";
import { GiFullPizza } from "react-icons/gi";
import { LiaHamburgerSolid } from "react-icons/lia";

export const Categories=[
    {
        id:1,
        name:'All',
        icon:<BiFoodMenu className="w-[45px] h-[45px] text-orange-500"/>
    },
    {
        id:2,
        name:'Breakfast',
        icon:<MdOutlineFreeBreakfast className="w-[45px] h-[45px] text-orange-500"/>
    },
    {
        id:3,
        name:'Soups',
        icon:<LuSoup className="w-[45px] h-[45px] text-orange-500"/>
    },
    {
        id:4,
        name:'Pasta',
        icon:<CiBowlNoodles className="w-[45px] h-[45px] text-orange-500"/>
    },
    {
        id:5,
        name:'M_Course',
        icon:<RiRestaurant2Line className="w-[45px] h-[45px] text-orange-500"/>
    },
    {
        id:6,
        name:'Pizza',
        icon:<GiFullPizza className="w-[45px] h-[45px] text-orange-500"/>
    },
    {
        id:7,
        name:'Burger',
        icon:<LiaHamburgerSolid className="w-[45px] h-[45px] text-orange-500"/>
    },
]

export default Categories