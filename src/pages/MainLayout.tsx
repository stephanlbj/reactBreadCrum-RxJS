
import Wrapper from "../components/Wrapper"
import ProductList from "../components/Product/ProductList"
import BtnComponent from "../components/BtnComponent"
import HeaderComponent from "../components/HeaderComponent"
import { useskipPageContext } from "../Context/SkipPageContext"
import SearchComponent from "../components/SearchComponent"
import { useSearchContext } from "../Context/SearchContext"
import { useFetchReceipes } from "../useFetch/useFetchReceipes"
 



const MainLayout = () => {

    const {skipPage,addSkipPage,removeSkipPage} =useskipPageContext()
    const {search} = useSearchContext()
    
    const {data,error,isPending} = useFetchReceipes(skipPage)

    

  
  
    if(isPending)
    return <Wrapper label='Loading...'/>
  
  
    if(error)
    return <Wrapper label={`${error.message}`}/>



  return (
    <main>

        <HeaderComponent/>
        <SearchComponent/>
        
        <ProductList data={search!== null ? search : data}/>
       
         {
          search=== null && (
            <div className="Btn">
            {
                skipPage > 0 && (
                <BtnComponent label="Prev" handleClick={removeSkipPage}/>
                )
            }

            {
                data?.skip + data?.limit === data.total ? null :(
                <BtnComponent label="Next" handleClick={addSkipPage}/>
                )
            }
          
           
          </div>
          )
         }
         

     </main>
  )
}

export default MainLayout