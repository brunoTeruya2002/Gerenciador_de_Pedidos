'use client'
import { ApiConnection } from "@/API/ApiConnection";
import { useEffect, useState } from "react";
import { DateFormat } from "../util/util";
import { pedidosType } from "@/types/pedidosTypes";
import changeScrollBar from '../components/styles/Table.module.css'
import { DotsThreeOutline } from "@phosphor-icons/react";


export const PedidosTable = () => {
    const [pedidos, setPedidos] = useState<pedidosType[]>([]);

    const [a, setA] = useState<pedidosType|null>(null);

    const rowStyle = "w-1/2 text-s text-gray-700 bg-gray-50";
    const columnStyle = "py-1 w-1/2 text-gray-600 bg-gray-50";

    useEffect(() => {
      getDados();
    }, []);
  
    const getDados = async () => {
      try {
        const data = await ApiConnection(window.location.href).get("/pedidos");
        console.log("Data = ", data.data);
        setPedidos(data.data);
      } catch (e) {
        console.log("Erro: ", e);
      }
    };
    return (
         <>
          <div className="h-[80hv] xs:px-4 flex rounded-lg overflow-hidden w-full justify-center md-table:px-0">
                
                <div className={` h-[50vh] lg:h-[70vh] xxs-table:w-full  overflow-y-auto overflow-x-hidden 
                  scrollbar-hide rounded-lg md-table:w-full ${changeScrollBar.sidebarItemsContainer}`}>


                    
                  <table className="xxs-table:w-full md-table:w-full border-collapse rounded-lg">
                  <thead className="text-xs text-gray-700 dark:bg-gray-700 dark:text-gray-300 sticky top-0 z-10">
                      <tr className="w-full">
                        <th className="xxs-table:px-0 xxs-table:w-1/2 px-6 py-3 font-normal table-cell">Marca</th>
                        <th className="xxs-table:px-0 xxs-table:w-1/2 px-6 py-3 font-normal  table-cell">Data</th>
                        <th className={`px-6 py-3 font-normal hidden sm-table:table-cell`}>Valor</th>
                        <th className={`px-6 py-3 font-normal hidden md-table:table-cell`}>Bonificação</th>
                        <th className={`px-6 py-3 font-normal hidden xs-table:table-cell`}>Status</th>
                        <th className="px-6 py-3 font-normal hidden xs-table:table-cell">Opções</th>
                      </tr>
                    </thead>
                  <tbody className="">
                    {pedidos.map((row) => (
                      <tr
                        onClick={() => setA(row)}
                        key={row.id}
                        className="bg-white hover:bg-gray-50 text-xs odd:dark:bg-gray-800 odd:text-gray-400
                         even:dark:bg-gray-900 even:text-gray-400 transition-transform duration-200 ease-in-out 
                         text-center hover:shadow-xl hover:scale-101"
                      >
                        <td className="xxs-table:px-auto xxs-table:w-1/2 px-6 py-4 justify-items-center">
                          {row.marca}
                          <span className={`py-2 xs-table:hidden table-cell`}>{row.status}</span>
                        </td>
                        <td className="xxs-table:px-auto xxs-table:w-1/2 px-6 py-4 justify-items-center  align-center">
                          {DateFormat(row.dataPedido)}
                          <span className="py-0 xs-table:hidden table-cell">
                            <a href="#" className="text-gray-600 hover:underline">
                              <DotsThreeOutline size={24} className=""/>
                            </a>
                          </span>
                          
                        </td>
                        <td className={`px-6 py-4 font-normal hidden sm-table:table-cell`}>{row.valorPedido}</td>
                        <td className={`px-6 py-4 font-normal hidden md-table:table-cell`}>{row.valorBonificacao}</td>
                        {/* <td className={`px-6 py-4 ${changeScrollBar.showStatus}`}>{row.status}</td> */}
                        <td className={`px-6 py-4 hidden xs-table:table-cell`}>{row.status}</td>
                        <td className="px-6 py-4 hidden xs-table:table-cell text-center justify-items-center item-center">
                          <a href="#" className="text-gray-600 hover:underline inline-flex">
                            <DotsThreeOutline size={24} />
                          </a>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* <div>
              <input value={a?.dataPedido}/>
            </div> */}
         </>
        
    )
}