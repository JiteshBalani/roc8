import React from 'react'
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import generateCategories from '../utils/categories';

const Protected = () => {

  const [page, setPage] = React.useState(1);
  const categories = generateCategories(100);

  const pageCount = Math.ceil(categories.length / 6);
  return (
    <div className='flex justify-center h-[100vh] mt-10 '>

      <div className=' border-2 rounded-lg px-[50px] pt-10 h-[658px] w-[576px] '>
        <div className='space-y-5'>

          <div className='text-center text-3xl font-black'>Please mark your interests!</div>
          <div className='text-center text-lg'>We will keep you notified.</div>
          <div className='text-left text-lg font-semibold pt-10'>My saved interests!</div>

        </div>

        <div className='flex-col pt-5'>

          {categories.slice((page - 1) * 6, page * 6).map(category => (
            <div key={category.id} className='flex space-x-4 items-center'>
              <input type='checkbox' className='peer relative appearance-auto shrink-0 w-6 h-5 border-2 border-black rounded-sm mt-1 bg-black
        focus:outline-none 
        checked:bg-black checked:text-white
        disabled:border-steel-400 disabled:bg-steel-400'/>
              <label className='text-lg '>{category.name}</label>
            </div>
          )
          )}

        </div>

        <div className='pt-8 flex justify-center'>

          <Stack spacing={2}>
            <Pagination showFirstButton showLastButton
              count={pageCount}
              onChange={(_, value) => {
                setPage(value);
              }}
             />
          </Stack>

        </div>

      </div>
    </div>
  )
}

export default Protected