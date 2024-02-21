import { ListItems } from "@/data/car-courses-prices"

export const CourseListItem = ({id, item}: ListItems) => {
  return (
    <li key={id}>{item}</li>
  )
}
