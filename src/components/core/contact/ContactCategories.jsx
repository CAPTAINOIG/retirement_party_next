import { IconDeviceTv, IconDiscount, IconHeadphones, IconHeartHandshake } from '@tabler/icons-react';
import Card from '@/components/global/Card';
import Button from '@/components/global/Button';

const ContactCategories = () => {
  return (
    <div className="grid gap-6 md:grid-cols-4">
      <Card className="subtle-shadow flex flex-col px-10 py-8">
        <div className="flex items-center space-x-2">
          <IconDiscount size="20" />
          <h5 className="text-lg font-medium">Sales</h5>
        </div>
        <p className="mb-6 mt-6">
          Wondering if Statisense is the right tool for your business? Chat with our team to see if there’s a fit.
        </p>
        <a href="mailto:sales@statisense.com.ng" className="mt-auto flex">
          <Button color="black" variant="outlined" className="w-full">
            Get in touch
          </Button>
        </a>
      </Card>
      <Card className="subtle-shadow flex flex-col px-10 py-8">
        <div className="flex items-center space-x-2">
          <IconHeadphones size="20" />
          <h5 className="text-lg font-medium">Support</h5>
        </div>
        <p className="mb-6 mt-6">
          Need a hand using Statisense or managing your account? Send us an email and we will get in touch with you
        </p>
        <a href="mailto:support@statisense.com.ng" className="mt-auto flex">
          <Button color="black" variant="outlined" className="w-full">
            Get support
          </Button>
        </a>
      </Card>
      <Card className="subtle-shadow flex flex-col px-10 py-8">
        <div className="flex items-center space-x-2">
          <IconDeviceTv size="20" />
          <h5 className="text-lg font-medium">Media</h5>
        </div>
        <p className="mb-6 mt-6">
          We love working with journalists to share compelling stories. Send us a note and our PR and Communications
          Manager will be in touch.
        </p>
        <a href="mailto:media@statisense.com.ng" className="mt-auto flex">
          <Button color="black" variant="outlined" className="w-full">
            Get in touch
          </Button>
        </a>
      </Card>
      <Card className="subtle-shadow flex flex-col px-10 py-8">
        <div className="flex items-center space-x-2">
          <IconHeartHandshake />
          <h5 className="text-lg font-medium">Partnerships</h5>
        </div>
        <p className="mb-6 mt-6">
          We’re into co-marketing with awesome brands. Send us an email, and our Partnerships Manager will circle back.
        </p>
        <a href="mailto:partnership@statisense.com.ng" className="mt-auto flex">
          <Button color="black" variant="outlined" className="w-full">
            Let's chat
          </Button>
        </a>
      </Card>
    </div>
  );
};

export default ContactCategories;
