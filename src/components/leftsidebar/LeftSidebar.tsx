
import Link from "next/link";
import Image from "next/image";
import {Fragment} from 'react'


const LeftSidebar = ({ categories }) => {

    return (

        <>
            <div className="lg:p-4 xl:p-4 whitespace-nowrap hidden md:hidden xl:block h-full" id="leftSide"
            style={{'position': 'webkitl-sticky',
                'position': 'sticky',
                'top': 30}}>
                <ul className="block m-0 py-2 px-4 list-none leftSideBar">
                    {categories.length && categories.map((category)=>  
                    <Fragment key={category.databaseId}>
                            <li className="flex capitalize h-14 text-lg md:text-md font-medium" >
                            <Link href={`/${category.slug}`}>
                                <a className="flex leading-6 py-2 px-2 w-full items-center hover:bg-gray-50 hover:rounded-md" title={category.name}>
                                    <div className="iconFill">
                                        <Image
                                            layout="fill"
                                            alt="टॉप न्यूज़|Top News"
                                            className="block"
                                            src={``}
                                            style={{ margin: "0px 12px" }}
                                        />
                                    </div>
                                    <span className="px-4 text-md">{category.name}</span>
                                </a>
                            </Link>
                        </li>
                        {category.children?.nodes?.length ?  category.children?.nodes.map((item)=>
                            <li className="flex h-14 text-lg md:text-md font-medium" key={item.databaseId}>
                            <Link href={`/${item.slug}`}>
                            <a className="flex leading-6 py-2 px-2 w-full items-center hover:bg-gray-50 hover:rounded-md" title={item.name}>
                            <div className="iconFill">
                                        <Image
                                            layout="fill"
                                            alt="टॉप न्यूज़|Top News"
                                            className="block"
                                            src={``}
                                            style={{ margin: "0px 12px" }}
                                        />
                                    </div>
                                <span className="px-4">{item.name}</span>
                            </a>
                            </Link>

                                </li>
                            ) : ""}
                        </Fragment>
                    )}
                </ul>

            </div>
        </>
    )
}
export default LeftSidebar;