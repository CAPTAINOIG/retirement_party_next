import { IconSend, IconCheck, IconMail, IconArrowLeft } from '@tabler/icons-react';
import { Button, Card, Input, Select, SelectItem, Textarea } from '@heroui/react';
import ScrollReveal from '@/components/global/ScrollReveal';
import { useForm, Controller } from 'react-hook-form';
import { useAddContactUs } from '@/api/other';
import { addToast } from '@heroui/react';

const categories = [
  { key: 'support', label: 'Support' },
  { key: 'feedback', label: 'Feedback' },
  { key: 'request', label: 'Request' },
];

const ContactSuccessComponent = ({ onSendAnother }) => {
  return (
    <ScrollReveal direction="up" delay={0.1}>
      <Card className="bg-default-100 rounded-2xl px-8 py-10 md:px-12 text-center" shadow="none">
        <div className="mb-8">
          <div className="mx-auto w-20 h-20 bg-success-100 rounded-full flex items-center justify-center mb-6">
            <div className="w-16 h-16 bg-success-500 rounded-full flex items-center justify-center animate-pulse">
              <IconCheck size={32} className="text-white" stroke={3} />
            </div>
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-foreground mb-4">
            Message Sent Successfully! 🎉
          </h2>
          <p className="text-default-600 text-lg leading-relaxed max-w-md mx-auto">
            Thank you for reaching out to us. We've received your message and our team will get back to you within 24 hours.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            color="primary"
            variant="solid"
            size="lg"
            radius="full"
            className="min-w-40"
            startContent={<IconArrowLeft size={18} />}
            onPress={onSendAnother}
          >
            Send Another Message
          </Button>
          
          <Button
            color="default"
            variant="bordered"
            size="lg"
            radius="full"
            className="min-w-40"
            onPress={() => window.history.back()}
          >
            Back to Website
          </Button>
        </div>
      </Card>
    </ScrollReveal>
  );
};

const SendMessageForm = () => {
  const { mutateAsync: addContactUs, isPending, isSuccess } = useAddContactUs();
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      fullname: '',
      email: '',
      phonenumber: '',
      category: '',
      message: '',
    },
  });

  const onSubmit = async (data) => {
    try {
      await addContactUs(data);
      if (isSuccess)
        addToast({
          title: 'Message sent successfully!',
          description: 'Your message has been sent successfully.',
          color: 'success',
        });
      reset();
    } catch (error) {
      addToast({
        title: 'Error sending message!',
        description: error?.response?.data?.message || 'Something went wrong, please try again',
        color: 'danger',
      });
    }
  };

  const handleSendAnother = () => {
    reset();
    window.location.reload();
  };

  if (isSuccess) {
    return <ContactSuccessComponent onSendAnother={handleSendAnother} />;
  }

  return (
    <ScrollReveal direction="up" delay={0.1}>
      <Card className="bg-default-100 rounded-2xl px-8 py-10 md:px-12" shadow="none">
        <h5 className="mb-10 text-xl font-medium">Let's start a conversation</h5>
        <div className="space-y-6">
          <Controller
            name="fullname"
            control={control}
            rules={{
              required: 'Full name is required',
              minLength: {
                value: 2,
                message: 'Full name must be at least 2 characters',
              },
            }}
            render={({ field }) => (
              <Input
                {...field}
                labelPlacement="outside-top"
                label="Full name"
                variant="bordered"
                size="lg"
                classNames={{ input: 'text-base' }}
                isInvalid={!!errors.fullname}
                errorMessage={errors.fullname?.message}
              />
            )}
          />

          <Controller
            name="email"
            control={control}
            rules={{
              required: 'Email address is required',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Invalid email address',
              },
            }}
            render={({ field }) => (
              <Input
                {...field}
                labelPlacement="outside-top"
                label="Email address"
                type="email"
                variant="bordered"
                size="lg"
                classNames={{ input: 'text-base' }}
                isInvalid={!!errors.email}
                errorMessage={errors.email?.message}
              />
            )}
          />

          <Controller
            name="phonenumber"
            control={control}
            rules={{
              pattern: {
                value: /^[\+]?[\d\s\-\(\)]+$/,
                message: 'Invalid phone number format',
              },
            }}
            render={({ field }) => (
              <Input
                {...field}
                labelPlacement="outside-top"
                label="Phone number (Optional)"
                type="tel"
                variant="bordered"
                size="lg"
                classNames={{ input: 'text-base' }}
                isInvalid={!!errors.phonenumber}
                errorMessage={errors.phonenumber?.message}
              />
            )}
          />

          <div className="flex flex-col">
            <Controller
              name="category"
              control={control}
              rules={{
                required: 'Please select a category',
              }}
              render={({ field: { onChange, value } }) => (
                <Select
                  selectedKeys={value ? [value] : []}
                  onSelectionChange={(keys) => {
                    const selectedValue = Array.from(keys)[0];
                    onChange(selectedValue);
                  }}
                  labelPlacement="outside"
                  label="Category"
                  placeholder="Select a category"
                  variant="bordered"
                  size="lg"
                  classNames={{ trigger: 'text-base' }}
                  isInvalid={!!errors.category}
                  errorMessage={errors.category?.message}
                >
                  {categories.map((category) => (
                    <SelectItem key={category.key} value={category.key}>
                      {category.label}
                    </SelectItem>
                  ))}
                </Select>
              )}
            />
          </div>

          <Controller
            name="message"
            control={control}
            rules={{
              required: 'Message is required',
              minLength: {
                value: 10,
                message: 'Message must be at least 10 characters',
              },
            }}
            render={({ field }) => (
              <Textarea
                {...field}
                labelPlacement="outside-top"
                label="Your message"
                variant="bordered"
                size="lg"
                minRows={4}
                classNames={{ input: 'text-base' }}
                isInvalid={!!errors.message}
                errorMessage={errors.message?.message}
              />
            )}
          />
        </div>
        <div>
          <Button
            onClick={handleSubmit(onSubmit)}
            color="primary"
            endContent={<IconSend size="20" />}
            className="mt-10"
            size="lg"
            radius="full"
            isLoading={isPending}
            disabled={isPending}
          >
            {isPending ? 'Sending...' : 'Send'}
          </Button>
        </div>
      </Card>
    </ScrollReveal>
  );
};

export default SendMessageForm;