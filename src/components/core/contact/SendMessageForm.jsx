import { IconSend } from '@tabler/icons-react';
import { Button, Card, Input, Select, SelectItem, Textarea } from '@heroui/react';
import ScrollReveal from '@/components/global/ScrollReveal';

const categories = [
  { key: 'support', label: 'Support' },
  { key: 'feedback', label: 'Feedback' },
  { key: 'request', label: 'Request' },
];

const SendMessageForm = () => {
  return (
    <ScrollReveal direction="up" delay={0.1}>
      <Card className="bg-default-100 rounded-2xl px-8 py-10 md:px-12" shadow="none">
        <h5 className="mb-10 text-xl font-medium">Let's start a conversation</h5>
        <div className="space-y-6">
          <Input
            labelPlacement="outside-top"
            label="Full name"
            variant="bordered"
            size="lg"
            classNames={{ input: 'text-base' }}
          />
          <Input
            labelPlacement="outside-top"
            label="Email address"
            type="email"
            variant="bordered"
            size="lg"
            classNames={{ input: 'text-base' }}
          />
          <Input
            labelPlacement="outside-top"
            label="Phone number (Optional)"
            type="tel"
            variant="bordered"
            size="lg"
            classNames={{ input: 'text-base' }}
          />
          <div className="flex flex-col">
            <Select
              labelPlacement="outside"
              label="Category"
              placeholder="Select a category"
              variant="bordered"
              size="lg"
              classNames={{ trigger: 'text-base' }}
            >
              {categories.map((category) => (
                <SelectItem key={category.key} value={category.key}>
                  {category.label}
                </SelectItem>
              ))}
            </Select>
          </div>
          <Textarea
            labelPlacement="outside-top"
            label="Your message"
            variant="bordered"
            size="lg"
            minRows={4}
            classNames={{ input: 'text-base' }}
          />
        </div>
        <div>
          <Button color="primary" endContent={<IconSend size="20" />} className="mt-10" size="lg" radius="full">
            Send
          </Button>
        </div>
      </Card>
    </ScrollReveal>
  );
};

export default SendMessageForm;
