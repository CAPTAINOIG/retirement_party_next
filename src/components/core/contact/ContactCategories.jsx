import { IconDeviceTv, IconDiscount, IconHeadphones, IconHeartHandshake } from '@tabler/icons-react';
import { Button, Card } from '@heroui/react';
import ScrollReveal from '@/components/global/ScrollReveal';

const ContactCategories = () => {
  return (
    <div className="grid gap-6 md:grid-cols-4">
      <ScrollReveal direction="up" delay={0.1}>
        <Card className="bg-default-100 flex h-full flex-col rounded-2xl px-10 py-8" shadow="none">
          <div className="flex items-center space-x-2">
            <IconDiscount size="20" />
            <h5 className="text-lg font-medium">Sales</h5>
          </div>
          <p className="mt-6 mb-6">
            Wondering if Statisense is the right tool for your business? Chat with our team to see if there's a fit.
          </p>
          <a href="mailto:sales@statisense.co" className="mt-auto flex">
            <Button variant="flat" className="w-full" radius="full">
              Get in touch
            </Button>
          </a>
        </Card>
      </ScrollReveal>
      <ScrollReveal direction="up" delay={0.2}>
        <Card className="bg-default-100 flex h-full flex-col rounded-2xl px-10 py-8" shadow="none">
          <div className="flex items-center space-x-2">
            <IconHeadphones size="20" />
            <h5 className="text-lg font-medium">Support</h5>
          </div>
          <p className="mt-6 mb-6">
            Need a hand using Statisense or managing your account? Send us an email and we will get in touch with you
          </p>
          <a href="mailto:support@statisense.co" className="mt-auto flex">
            <Button variant="flat" className="w-full" radius="full">
              Get support
            </Button>
          </a>
        </Card>
      </ScrollReveal>
      <ScrollReveal direction="up" delay={0.3}>
        <Card className="bg-default-100 flex h-full flex-col rounded-2xl px-10 py-8" shadow="none">
          <div className="flex items-center space-x-2">
            <IconDeviceTv size="20" />
            <h5 className="text-lg font-medium">Media</h5>
          </div>
          <p className="mt-6 mb-6">
            We love working with journalists to share compelling stories. Send us a note and our PR and Communications
            Manager will be in touch.
          </p>
          <a href="mailto:info@statisense.co" className="mt-auto flex">
            <Button variant="flat" className="w-full" radius="full">
              Get in touch
            </Button>
          </a>
        </Card>
      </ScrollReveal>
      <ScrollReveal direction="up" delay={0.4}>
        <Card className="bg-default-100 flex h-full flex-col rounded-2xl px-10 py-8" shadow="none">
          <div className="flex items-center space-x-2">
            <IconHeartHandshake />
            <h5 className="text-lg font-medium">Partnerships</h5>
          </div>
          <p className="mt-6 mb-6">
            We're into co-marketing with awesome brands. Send us an email, and our Partnerships Manager will circle
            back.
          </p>
          <a href="mailto:partnerships@statisense.co" className="mt-auto flex">
            <Button variant="flat" className="w-full" radius="full">
              Let's chat
            </Button>
          </a>
        </Card>
      </ScrollReveal>
    </div>
  );
};

export default ContactCategories;
