
import moment from "moment"

export default function( v ){
    return moment( v ).format('YY年MM月DD日 HH：mm')
}