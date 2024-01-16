import CenterCards from '@/components/CenterCards/CenterCards';
import { fetchData } from '@/helpers/graphql';
import { getCategoryPosts, getLoadMoreCategoryPageData } from '@/queries/getPagePosts';


const Category = async ({ params }: { params: { category: string } }) => {

  // const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // const toggleMobileMenu = () => {
  //   setMobileMenuOpen(!mobileMenuOpen);
  // }
  // console.log(params.category)
 
  
  // Call the async function
 const data= await fetchData(getCategoryPosts,params.category);



  return (

    <>
     <div className="w-full md:w-1/2 lg:w-6/12 lg:px-4 lg:mt-4 p-0 bg-white">
    <CenterCards data={data} query={getLoadMoreCategoryPageData}  slug={params.category}/>
    </div>
    </>

  )
}

export default Category
