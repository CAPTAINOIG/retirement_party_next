import React from 'react';
import Button from '@/components/global/Button';
import { IconSparkles } from '@tabler/icons-react';
import Card from '@/components/global/Card';

const AddPost = () => {
  return (
    <Card className="w-full focus-within:border-primary-500 px-6 py-6">
      <input className="w-full rounded-2xl px-4 py-4 peer bg-gray-100" placeholder="Ask a question" />
      <div className="flex items-center w-full bg-white mt-4 space-x-4">
        <Button variant="text" size="sm" color="black" leftIcon={<IconSparkles size="20" />}>
          Ask Bambi
        </Button>
      </div>
    </Card>
  );
};

export default AddPost;
