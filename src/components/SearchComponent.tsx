import { useEffect } from 'react';
import { fromEvent, of } from 'rxjs';
import { debounceTime, distinctUntilChanged, map, switchMap } from 'rxjs/operators';
import { getReceipe } from '../useFetch/useSearchReceipe';

import { useSearchContext } from '../Context/SearchContext';


const SearchComponent = () => {

    const {handleSearch, InputRef, handleInputValue} = useSearchContext()
     

    useEffect(() => {

        let  subscription : any
       
        if(InputRef.current!== null ){
            const inputObservable$ = fromEvent(InputRef.current, 'input')
            .pipe(
              map(event => (event.target as HTMLInputElement).value),
              debounceTime(300) ,
              distinctUntilChanged(),
              switchMap((value)=> {
                 if (value.trim() !== '') {
                  InputRef.current && (InputRef.current.value = value !== undefined ? value : '');

                  return getReceipe(value);
                } else {
                    return of(null);
                }
              })
            );
      
            subscription = inputObservable$.subscribe(value => {
     
               
            
                handleSearch(value);
          });
        }else{
            handleSearch(null)
        }
       
    
        // Clean up the subscription when the component unmounts
        return () => {
          subscription.unsubscribe();
        };
      }, []);

      useEffect(() => {
        handleInputValue(InputRef?.current?.value || '');
      }, [ InputRef?.current?.value]);

     
       

  return (
    <div style={{margin:'20px auto',  width:'500px', height:40,   }}>
    
    <input
    ref={InputRef}
    placeholder="Search recipe..."
    style={{width:'100%' , height:'100%', 
    border:'1px solid gray',
     borderRadius:'10px', outline:'none' , padding:'0 8px', 
    backgroundColor:'transparent', color:"white"}}
    />
    </div>
  )
}

export default SearchComponent