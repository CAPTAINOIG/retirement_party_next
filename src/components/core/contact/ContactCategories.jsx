import { IconDeviceTv, IconDiscount, IconHeadphones, IconHeartHandshake } from "@tabler/icons-react";
import Card from "@/components/global/Card";
import Button from "@/components/global/Button";

const ContactCategories = () => {
  return (
    <div className="grid md:grid-cols-4 gap-6">
      <Card className="flex flex-col subtle-shadow px-10 py-8">
        <div className="flex items-center space-x-2">
          <IconDiscount size="20"/>
          <h5 className="font-medium text-lg">Sales</h5>
        </div>
        <p className="mt-6 mb-6">
          Wondering if Statisense is the right tool for your business? Chat with our team to see if there’s a fit.
        </p>
        <a href="mailto:sales@statisense.com.ng" className="flex mt-auto">
          <Button variant="outlined" className="w-full">
            Get in touch
          </Button>
        </a>
      </Card>
      <Card className="flex flex-col subtle-shadow px-10 py-8">
        <div className="flex items-center space-x-2">
          <IconHeadphones size="20"/>
          <h5 className="font-medium text-lg">Support</h5>
        </div>
        <p className="mt-6 mb-6">
          Need a hand using Statisense or managing your account? Send us an email and we will get in touch with you
        </p>
        <a href="mailto:support@statisense.com.ng" className="flex mt-auto">
          <Button variant="outlined" className="w-full">
            Get support
          </Button>
        </a>
      </Card>
      <Card className="flex flex-col subtle-shadow px-10 py-8">
        <div className="flex items-center space-x-2">
          <IconDeviceTv size="20"/>
          <h5 className="font-medium text-lg">Media</h5>
        </div>
        <p className="mt-6 mb-6">
          We love working with journalists to share compelling stories. Send us a note and our PR and
          Communications Manager will be in touch.
        </p>
        <a href="mailto:media@statisense.com.ng" className="flex mt-auto">
          <Button variant="outlined" className="w-full">
            Get in touch
          </Button>
        </a>
      </Card>
      <Card className="flex flex-col subtle-shadow px-10 py-8">
        <div className="flex items-center space-x-2">
          <IconHeartHandshake/>
          <h5 className="font-medium text-lg">Partnerships</h5>
        </div>
        <p className="mt-6 mb-6">
          We’re into co-marketing with awesome brands. Fill out the form here, and our Partnerships Manager will
          circle back.
        </p>
        <a href="mailto:partnership@statisense.com.ng" className="flex mt-auto">
          <Button variant="outlined" className="w-full">
            Let's chat
          </Button>
        </a>
      </Card>
    </div>
  );
};

export default ContactCategories;
