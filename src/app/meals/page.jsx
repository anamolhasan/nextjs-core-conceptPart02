import MealSearchInput from "./components/MealSearchInput"


const MealsPage = async({searchParams}) => {
    const query = await searchParams

    const fetchMeals = async() => {
       try {
         const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query.search}`)
        const data = await res.json()
        // setMeals(data?.meals || [])
        return data.meals
       } catch (error) {
         console.log(error)
         return []
       }
    }

const meals = await fetchMeals()
  return (
    <div>
        <div className="flex justify-center">
            <MealSearchInput />
        </div>
        <div className='grid grid-cols-4 gap-4'>
        {
            meals?.map((singleMeal) =>{
                return(
                    <div>
                        <p>{singleMeal?.strMeal}</p>
                        <p>{singleMeal?.strInstructions}</p>
                    </div>
                )
            })
        }
    </div>
    </div>
  )
}

export default MealsPage