import { IconSend } from '@tabler/icons-react';
import Card from '@/components/global/Card';
import Input from '@/components/global/Input';
import Select from '@/components/global/Select';
import TextArea from '@/components/global/TextArea';
import Button from '@/components/global/Button';

const categories = [
  { text: 'Support', value: 'support' },
  { text: 'Feedback', value: 'feedback' },
  { text: 'Request', value: 'request' },
];

const SendMessageForm = () => {
  return (
    <>
      <Card className="px-8 py-10 md:px-12 subtle-shadow">
        <h5 className="text-xl font-medium mb-10">Let's start a conversation</h5>
        <div className="space-y-6">
          <Input label="Full name" bordered />
          <Input label="Email address" bordered />
          <Input label="Phone number (Optional)" bordered />
          <Select label="Category" placeholder="Select a category" options={categories} bordered />
          <TextArea label="Your message" bordered />
        </div>
        <Button rightIcon={<IconSend size="20" />} className="mt-10">
          Send
        </Button>
      </Card>
    </>
  );
};

export default SendMessageForm;
