"use client"

import {ApiConnection} from "@/API/ApiConnection";
import { useEffect, useState } from "react";
import { DateFormat } from "../util/util";



type pedidosType = {id: number, dataPedido: string, marca: string, status: string, valorPedido: number, valorBonificacao: number}










export default function Home() {

  


  const [pedidos, setPedidos] = useState<pedidosType[]>([])




  const rowStyle = "w-1/2 text-s text-gray-700 bg-gray-50";
  const columnStyle = "py-1 w-1/2 text-gray-600 bg-gray-50";




  





  useEffect(() => {
    getDados()
  }, []) 
  
 
  const getDados = async () => {
    try{
      const data = await ApiConnection(window.location.href).get("/pedidos")
      console.log('Data = ', data.data)
      setPedidos(data.data)

    }catch(e){
      console.log('Erro: ', e)
    }
  }



  






















  return (

    

    
  

    <div style={{fontFamily:"Montserrat"}} className="items-center h-screen w-full relative shadow-md sm:rounded-lg md:p-0">

    
      <div className="relative flex-col gap-4 flex p-4 justify-evenly items-center">
     
      {/* <div className="pr-2">
        <button type="button" className="md:hidden text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-xs px-5 py-2 text-center">Adicionar</button>
      </div> */}
    
      <div className="relative w-full sm:w-100 shadow-lg dark:shadow-gray-800 ">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                {/* <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/> */}
            </svg>
          </div>
        <input type="search" id="default-search" maxLength={35} className="block w-full p-4 ps-10 text-xs text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="O que está procurando?"/>
      <button type="submit" className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xs px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Buscar</button>
      </div>



      <div className="flex w-full sm:w-100 sm:flex-row items-center justify-center gap-2 flex-col-reverse">

      <div className="w-full">
        <button type="button" className="w-full text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-xs px-5 py-2 text-center">Filtrar</button>
      </div>

      <div className="w-full">
        <button type="button" className="w-full text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-xs px-5 py-2 text-center">Adicionar</button>
      </div>

      </div>

   
        
      
        
        
          
          
        

          {/* <button type="button" className="bg-amber-300 rounded h-10 flex ">Buscar</button> */}

      </div>


      {/* Tabela - Visível apenas em telas >= 640px (sm) */}
      <div className="pb-6 md:pl-2 md:pr-2 hidden md:block relative overflow-x-auto w-full justify-items-center  xl:shadow-none">
        <table className=" w-full 2xl:w-1/2 lg:w-2/3 rounded-lg overflow-hidden text-sm text-center  text-gray-500 shadow-lg dark:shadow-gray-800">
          <thead className="text-xs text-gray-700 dark:bg-gray-700 dark:text-gray-300">
            <tr>
              <th className="px-6 py-3 font-normal">Marca</th>
              <th className="px-6 py-3 font-normal">Data</th>
              <th className="px-6 py-3 font-normal">Valor</th>
              <th className="px-6 py-3 font-normal">Bonificação</th>
              <th className="px-6 py-3 font-normal">Status</th>
              <th className="px-6 py-3 font-normal">Opções</th>
            </tr>
          </thead>
          <tbody>
            {pedidos.map((row) => (
              <tr key={row.id} className="bg-white hover:bg-gray-50 text-xs odd:dark:bg-gray-800 odd:text-gray-400 even:dark:bg-gray-900 even:text-gray-400 transition-transform duration-200 ease-in-out hover:shadow-xl hover:scale-101">
                <td className="px-6 py-4">{row.marca}</td>
                <td className="px-6 py-4">{DateFormat(row.dataPedido)}</td>
                <td className="px-6 py-4">{row.valorPedido}</td>
                <td className="px-6 py-4">{row.valorBonificacao}</td>
                <td className="px-6 py-4">{row.status}</td>
                <td className="px-6 py-4">
                  <a href="#" className="text-blue-600 hover:underline">Editar</a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Versão Mobile - Visível apenas em telas menores que 640px */}
      <div className="md:hidden space-y-4 w-full p-2">
        {pedidos.map((row, index) => (
          <div key={index} className="p-1 rounded-lg shadow bg-gray-50 w-full">
            <table className="w-full text-sm text-gray-500 ">
              
              <tbody className="text-center">

              <tr>
                <td className={columnStyle}>Marca</td>
                <td className={rowStyle}>{row.marca}</td>
              </tr>
              <tr>
                <td className={columnStyle}>Data de Pedido</td>
                <td className={rowStyle}>{DateFormat(row.dataPedido)}</td>
              </tr>
              <tr>
                <td className={columnStyle}>Valor de Pedido</td>
                <td className={rowStyle}>{row.valorPedido}</td>
              </tr>
              <tr>
                <td className={columnStyle}>Valor de Bonificação</td>
                <td className={rowStyle}>{row.valorBonificacao}</td>
              </tr>
              <tr>
                <td className={columnStyle}>Status</td>
                <td className={rowStyle}>{row.status}</td>
              </tr>
              <tr></tr>

              </tbody>
              
              


            </table>



            {/* <p className="text-gray-900 font-semibold text-lg">{row.marca}</p> */}
            
          </div>
        ))}
      </div>

    </div>





    

  );
};

