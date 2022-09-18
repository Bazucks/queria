import React from 'react';

const FaqLayout = ({ title, children, index, activeIndex, setActiveIndex }) => {
  const handleSetIndex = (index) => (activeIndex !== index) && setActiveIndex(index);

  return (
    <>
      <div onClick={() => handleSetIndex(index)} className='flex w-3/4 justify-between p-4 mt-6 rounded-t-md border-1 border-violet-900 bg-violet-100 dark:bg-slate-800 dark:hover:bg-violet-500 duration-300 transition-all cursor-pointer border-y-2 '>
        <div className='flex'>
          <div className='text-slate-700 dark:text-slate-100 font-bold text-xl smd:text-3xl xl:text-4xl'>{title}</div>
        </div>
        <div className="flex items-center justify-center">
          {
            (activeIndex === index)
              ? <svg className='cursor-pointer dark:invert' width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M11.0001 0.916504C5.43133 0.916504 0.916748 5.43109 0.916748 10.9998C0.916748 16.5686 5.43133 21.0832 11.0001 21.0832C16.5688 21.0832 21.0834 16.5686 21.0834 10.9998C21.0834 5.43109 16.5688 0.916504 11.0001 0.916504ZM7.9815 8.97675C7.80861 8.80978 7.57706 8.71738 7.33671 8.71947C7.09637 8.72156 6.86646 8.81796 6.6965 8.98792C6.52654 9.15788 6.43013 9.38779 6.42805 9.62814C6.42596 9.86848 6.51835 10.1 6.68533 10.2729L10.352 13.9396C10.5239 14.1114 10.757 14.208 11.0001 14.208C11.2431 14.208 11.4763 14.1114 11.6482 13.9396L15.3148 10.2729C15.4818 10.1 15.5742 9.86848 15.5721 9.62814C15.57 9.38779 15.4736 9.15788 15.3037 8.98792C15.1337 8.81796 14.9038 8.72156 14.6634 8.71947C14.4231 8.71738 14.1915 8.80978 14.0187 8.97675L11.0001 11.9953L7.9815 8.97675Z" fill="#131316" />
              </svg>

              : <svg className='cursor-pointer dark:invert  hover:-rotate-[90deg] duration-150 transition' width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M10.9998 21.0833C5.43109 21.0833 0.916504 16.5687 0.916504 10.9999C0.916504 5.43117 5.43109 0.916586 10.9998 0.916586C16.5686 0.916586 21.0832 5.43117 21.0832 10.9999C21.0832 16.5687 16.5686 21.0833 10.9998 21.0833ZM7.98125 13.023C7.80837 13.19 7.57682 13.2824 7.33647 13.2803C7.09612 13.2782 6.86621 13.1818 6.69625 13.0118C6.5263 12.8419 6.42989 12.612 6.4278 12.3716C6.42571 12.1313 6.51811 11.8997 6.68509 11.7268L10.3518 8.06017C10.5237 7.88832 10.7568 7.79178 10.9998 7.79178C11.2429 7.79178 11.476 7.88832 11.6479 8.06017L15.3146 11.7268C15.4816 11.8997 15.574 12.1313 15.5719 12.3716C15.5698 12.612 15.4734 12.8419 15.3034 13.0118C15.1335 13.1818 14.9036 13.2782 14.6632 13.2803C14.4229 13.2824 14.1913 13.19 14.0184 13.023L10.9998 10.0044L7.98125 13.023Z" fill="#131316" />
              </svg>

          }
        </div>
      </div>

      {(activeIndex === index) && (
        <div className="w-3/4 bg-slate-100 text-black dark:bg-slate-100 dark:text-black rounded-b-md p-4 mb-6">
          {children}
        </div>
      )}
    </>
  );
};

export default FaqLayout;