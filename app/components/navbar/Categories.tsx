'use client';

import Container from "../Container"
import { TbBeach, TbMountain, TbPool } from 'react-icons/tb';
import { GiBarn, GiBoatFishing, GiCactus, GiCastle, GiCaveEntrance, GiForestCamp, GiIsland, GiWindmill } from 'react-icons/gi';
import { FaSkiing } from 'react-icons/fa';
import { BsSnow } from 'react-icons/bs';
import { IoDiamond } from 'react-icons/io5';
import CategoryBox from './CategoryBox';
import { usePathname, useSearchParams } from "next/navigation";

export const categories = [
    {
        label: 'Beach',
        icon: TbBeach,
        description: 'This property is close to the beach!'
    },
    {
        label: 'Island',
        icon: GiIsland,
        description: 'Explore the beauty of island adventures!'
    },
    {
        label: 'Fishing',
        icon: GiBoatFishing,
        description: 'Enjoy fishing in the serene waters!'
    },
    {
        label: 'Camping',
        icon: GiForestCamp,
        description: 'Experience camping in nature!'
    },
    {
        label: 'Views',
        icon: GiWindmill,
        description: 'Enjoy stunning views of windmills!'
    }
]


const Categories = () => {
    const params = useSearchParams();
    const category = params?.get('category');
    const pathname = usePathname();

    const isMainPage = pathname === '/';

    if (!isMainPage) {
        return null;
    }
    return (
        <Container>
            <div>
                <div className="pt-4 flex flex-row items-center justify-between overflow-x-auto"    >
                    {categories.map(item => (
                        <CategoryBox
                            key={item.label}
                            label={item.label}
                            selected={category === item.label}
                            icon={item.icon}
                            color="#17458f" 
                        />
                    ))}
                </div>
            </div>
        </Container>
    )
}

export default Categories;