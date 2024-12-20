import React from 'react';
import { User, Eye, PencilLine, Trash2 } from 'lucide-react';

const ModalMenu = ({ isDeleteMode = false }) => {
  return (
    <div className="w-[285px] rounded-2xl bg-white shadow-sm">
      <div className="flex items-center px-4 py-3 cursor-pointer group hover:bg-blue-light rounded-t-2xl">
        <User size={20} className="text-[#81889C] group-hover:text-black" strokeWidth={1.5} />
        <span className="ml-3 subtitle-regular text-[#81889C] group-hover:text-black">Перейти к профилю</span>
      </div>

      <div className="flex items-center px-4 py-3 cursor-pointer group hover:bg-blue-light">
        <Eye size={20} className="text-[#81889C] group-hover:text-black" strokeWidth={1.5} />
        <span className="ml-3 subtitle-regular text-[#81889C] group-hover:text-black">Раскрыть сотрудника</span>
      </div>

      <div className="flex items-center px-4 py-3 cursor-pointer group hover:bg-blue-light">
        <PencilLine size={20} className="text-[#81889C] group-hover:text-black" strokeWidth={1.5} />
        <span className="ml-3 subtitle-regular text-[#81889C] group-hover:text-black">Редактировать</span>
      </div>

      <div className={`flex items-center px-4 py-3 cursor-pointer rounded-b-2xl ${isDeleteMode ? 'bg-error-light' : ''}`}>
        <Trash2 size={20} className={isDeleteMode ? 'text-error' : 'text-[#81889C]'} strokeWidth={1.5} />
        <span className={`ml-3 subtitle-regular ${isDeleteMode ? 'text-error' : 'text-[#81889C]'}`}>
          Удалить рабочее место
        </span>
      </div>
    </div>
  );
};

export default ModalMenu;