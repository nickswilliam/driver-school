import { CoursesPrices } from "@/data/car-courses-prices"
import { CourseListItem } from "./CourseListItem/CourseListItem"

const CoursesCards = ({id, title, price, listItems, btnText}: CoursesPrices) => {
  return (
    <div className='flex flex-col max-w-[370px] items-center justify-between px-6 py-6 gap-2 border border-violet-400 shadow-lg rounded-md bg-violet-200 hover:shadow-violet-500 duration-200 hover:shadow-xl' key={id}>
              <h3 className="text-violet-500 text-[18px]">{title}</h3>
              <span className="mt-8 text-5xl text-pink-600 font-bold px-4 border-b border-violet-400 pb-4">${price}</span>
              
              <ul className="text-violet-700 text-center flex flex-col gap-1 items-center list-disc px-4">
                {listItems.map(vItem=>(
                  <CourseListItem {...vItem} key={vItem.id}/>
                ))}
              </ul>

              <button className="w-full text-2xl px-6 py-2 mt-6 text-violet-500/90 font-semibold border rounded-sm border-violet-500 bg-gray-50/30 hover:bg-violet-300/50 hover:text-violet-600 duration-200">{btnText}</button>
          </div>
  )
}

export default CoursesCards