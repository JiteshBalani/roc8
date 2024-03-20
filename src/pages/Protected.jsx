import { useState, useEffect, useCallback } from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import generateCategories from '../utils/categories';

const Protected = () => {
  const [page, setPage] = useState(1);
  const [checkedCategories, setCheckedCategories] = useState([]);
  const categories = generateCategories(100);

  const pageCount = Math.ceil(categories.length / 6);

  useEffect(() => {
    const storedCheckedCategories = JSON.parse(localStorage.getItem('checkedCategories')) || [];
    setCheckedCategories(storedCheckedCategories);
  }, []);

  const handleCheckboxChange = useCallback(
    (e, categoryId) => {
      const isChecked = e.target.checked;
      setCheckedCategories(prevCheckedCategories => {
        const updatedCheckedCategories = isChecked
          ? [...prevCheckedCategories, categoryId]
          : prevCheckedCategories.filter(id => id !== categoryId);

        localStorage.setItem('checkedCategories', JSON.stringify(updatedCheckedCategories));
        return updatedCheckedCategories;
      });
    },
    [checkedCategories] // Include checkedCategories in the dependency array
  );

  return (
    <div className='flex justify-center h-[100vh] mt-10'>
      <div className='border-2 rounded-lg px-[50px] pt-10 h-[658px] w-[576px]'>
        <div className='space-y-5'>
          <div className='text-center text-3xl font-black'>Please mark your interests!</div>
          <div className='text-center text-lg'>We will keep you notified.</div>
          <div className='text-left text-lg font-semibold pt-10'>My saved interests!</div>
        </div>

        <div className='flex-col pt-5 space-y-4'>
          {categories.slice((page - 1) * 6, page * 6).map((category) => (
            <div key={category.id} className='flex space-x-4 items-center'>
              <input
                type='checkbox'
                className='peer relative appearance-auto checked:bg-black shrink-0 w-6 h-5 border-2 border-black rounded-sm mt-1 focus:outline-none checked:text-white disabled:border-steel-400 disabled:bg-steel-400'
                // checked={checkedCategories.includes(category.id)}
                // onChange={(e) => handleCheckboxChange(e, category.id)}
              />
              <label className='text-lg'>{category.name}</label>
            </div>
          ))}
        </div>

        <div className='pt-8 flex justify-center'>
          <Stack spacing={2}>
            <Pagination
              showFirstButton
              showLastButton
              count={pageCount}
              onChange={(_, value) => {
                setPage(value);
              }}
            />
          </Stack>
        </div>
      </div>
    </div>
  );
};

export default Protected;