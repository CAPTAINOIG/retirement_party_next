import React from 'react';
import { IconMessageChatbot } from '@tabler/icons-react';

const ChatWithBambi = ({ setIsChatbotOpen }) => {
  return (
    <div
      className="bg-white  border border-gray-300 flex md:w-1/2 gap-4 lg:hidden items-center  rounded-xl p-4 justify-center cursor-pointer "
      onClick={() => setIsChatbotOpen(true)}
    >
      <div className="p-3 rounded-full bg-primary-600 grid place-items-center">
        <IconMessageChatbot size="38" className="text-white" />
      </div>
      <div>
        <h5 className="font-semibold text-xl">Chat with Bambi</h5>
        <p className="mt-2 max-w-[300px]">
          Our AI data assistant Bambi is readily available to provide you with any macro economic data.
        </p>
      </div>
    </div>
  );
};

export default ChatWithBambi;
