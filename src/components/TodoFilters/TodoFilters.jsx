import { FilterButton, FiltersContainer, ItemsLeft , FilterButtonContainer} from "./TodoFilters.components"

const TodoFilters = () => {
  return (
    <FiltersContainer>
        <ItemsLeft />
        <FilterButtonContainer>
            <FilterButton  action ={()=>{}} active="All" filter ='All'/>
            <FilterButton action ={()=>{}} active="All" filter ='Active'/>
            <FilterButton action ={()=>{}} active="All" filter ='Completed'/>
        </FilterButtonContainer>

        <button className="text-gray-400 hover:text-white cursor-pointer transition-all duration-300 ease-in">
            Clear Completed
        </button>
    </FiltersContainer>
  );
}

export { TodoFilters }