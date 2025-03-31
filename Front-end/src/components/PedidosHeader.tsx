import { DateFormat } from "../util/util";
import { MagnifyingGlass, Funnel, StackPlus } from "@phosphor-icons/react";
import styles from "../app/MainStyles.module.css"
import { ButtonColorEnum, HeaderButton } from "./HeaderButton";


export const PedidosHeader = () => {
    return(
        <div className="h-[20hv] relative flex-col gap-4 flex p-4 justify-evenly items-center">
          <div className={`relative w-full sm:w-[500px] shadow-lg dark:shadow-gray-800  
          justify-between items-center text-xs text-gray-900 rounded-lg bg-gray-700 ${styles.searchHeader}`}>
            
            <div className={`${styles.alignSearchContent}`}>
              
              <MagnifyingGlass size={25} weight="bold" color="#94A3B8" className=""/>
              

                
          
              <input
                className="block sm:w-90 w-full rounded-lg p-4 ps-4 text-sm sm:text-lg text-gray-300 bg-gray-700 focus:outline-none 
              "
                placeholder="O que está procurando?"
              />

            </div>
              
          

            <button
              type="submit"
              className={`shadow-lg dark:shadow-gray-700 text-white bg-gradient-to-r from-blue-500 via-blue-600
                to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none 
                focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-4 py-2 ${styles.buscar}`}
            >
              Buscar
            </button>


          </div>

          <div className={`${styles.alignButtonsFilterAndAdd} flex 
          items-center justify-center gap-2 flex-col-reverse w-full sm:w-[500px]`}>
           

            <HeaderButton value={"Filtrar"} color={ButtonColorEnum.PURPLE}> 
                <Funnel size={18} weight="fill" /> 
            </HeaderButton>

            <HeaderButton value={"Adicionar"} color={ButtonColorEnum.GREEN}> 
                <StackPlus size={18} weight="fill" /> 
            </HeaderButton>

       
          </div>

        </div>
    )
}