import { SearchCartegoryModel } from "../../app/model/searchCartegory.model"

 const searchCartegory: SearchCartegoryModel[] =  [
  { id: Math.random().toString(), title: "Shopping", icon: "shop", 
  background: "amber.600", foreground: "amber.300" },
  { id: Math.random().toString(), title: "Travel info", icon: "help-with-circle", 
  background: "orange.600", foreground: "orange.300" },
  { id: Math.random().toString(), title: "Restaurant", icon: "bowl", 
  background: "emerald.600", foreground: "emerald.300" },
  { id: Math.random().toString(), title: "Book Hotel", icon: "flower", 
  background: "violet.600", foreground: "violet.300" },
  { id: Math.random().toString(), title: "Rent a car", icon: "traffic-cone", 
  background: "lime.600", foreground: "lime.300" },
  { id: Math.random().toString(), title: "Hospital", icon: "heart", 
  background: "rose.600", foreground: "rose.300" },
] 

export default {
  data : searchCartegory
}
