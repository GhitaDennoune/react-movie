
import Jsondata from '../json/Data.json';
import JsonData from '../json/Data.json'
import { Image } from './images';



 const  couress =   JsonData.map(e=>(

        {
            ...e , image : Image[e.image]
        }
        
    ))

export default couress
