import React from 'react';

const Avatar = ({ className, imgClassName, ...props }) => {
  return (
    <div className={'rounded-full ' + className}>
      <img
        className={'w-full h-full object-cover rounded-full ' + imgClassName}
        src='https://thegioidienanh.vn/stores/news_dataimages/hoangtuan/122016/16/03/1353_bai_do_nhan_1.jpg'
        alt='avt'
        {...props}
      />
    </div>
  );
};

export default Avatar;
