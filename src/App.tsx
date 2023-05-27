
import { useState } from 'react'
import { type Todo } from './types'

function App (): JSX.Element {
  const [todos, setTodos] = useState<Todo[]>([])
  return (
    <main className='bg-slate-700 h-screen'>
      <h1 className='text-center font-bold text-4xl bg-slate-800 text-slate-100 p-4'>Task's app</h1>
      <div className='todo-container p-4 flex flex-col gap-6 max-w-[1200px] mx-auto bg-slate-600 shadow-md text-slate-100'>
        <form className='flex rounded-xl overflow-hidden' action="">
          <input type="text" placeholder='Comprar herramientas, Hacer la cena' className='w-full border p-4 bg-slate-50' />
          <button className='min-w-[200px]  py-4 px-6 bg-slate-700 text-slate-50 text-lg'>Agregar Tarea</button>

        </form>
        <table width={'100%'} className=''>
          <thead className=''>
            <tr className='border-b border-slate-500'>
              <th className='p-2 w-[100px] '>Status</th>
              <th className='p-2 '>Tarea</th>
              <th className='p-2  w-[250px]'>Tiempo restante</th>
              <th className='p-2 w-[100px] '>Modificar</th>
            </tr>
          </thead>
          <tbody>

            <tr>
              <td className='p-2'> <button>COMPLETADA</button> </td>
              <td className='p-2'>comprar la cena</td>
              <td className='p-2'>Vence en: 2 horas y 20 minutos</td>
              <td className='p-2 flex gap-2 '>
                <button className='border p-2 rounded-lg'>Update</button>
                <button className='border p-2 rounded-lg'>Delete</button>

              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </main>
  )
}

export default App
