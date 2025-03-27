// import { format } from 'date-fns'

// export const formatDate = (dateString: string) => {
//     if(!dateString){
//         return ''
//     }
//     const date = new Date(dateString);
//     return format(date, 'dd/mm/yyyy')
// }





// jeito nativo
export const DateFormat = (dateString: string) => {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };
  