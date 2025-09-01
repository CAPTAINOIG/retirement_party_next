import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandThreads,
  IconBrandX,
  IconMail,
} from '@tabler/icons-react';
import ScrollReveal from '@/components/global/ScrollReveal';

const ConnectWithUs = () => {
  return (
    <div className='sticky top-20'>
      <ScrollReveal direction="left" delay={0.1}>
        <div className="mt-8 grid grid-cols-1 gap-8">
          <div className="flex items-center space-x-3">
            <div className="flex h-14 w-14 items-center justify-center rounded-full border">
              <IconMail size="32" />
            </div>
            <div>
              <p>Email address</p>
              <a href="mailto:info@statisense.co" target="_blank" className="flex font-medium">
                info@statisense.co
              </a>
            </div>
          </div>
        </div>
      </ScrollReveal>
      <ScrollReveal direction="left" delay={0.2}>
        <div className="mt-10">
          <div className="grid grid-cols-5 gap-3 sm:grid-cols-7 sm:gap-4">
            <a
              href="https://twitter.com/statisense"
              target="_blank"
              className="border-default-300/70 hover:bg-default-100 flex cursor-pointer items-center justify-center rounded-3xl border px-6 py-4"
            >
              <div>
                <IconBrandX size="28" />
              </div>
            </a>
            <a
              href="https://facebook.com/statisense"
              target="_blank"
              className="border-default-300/70 hover:bg-default-100 flex cursor-pointer items-center justify-center rounded-3xl border px-6 py-4"
            >
              <div>
                <IconBrandFacebook size="28" />
              </div>
            </a>
            <a
              href="https://www.instagram.com/statisense/"
              target="_blank"
              className="border-default-300/70 hover:bg-default-100 flex cursor-pointer items-center justify-center rounded-3xl border px-6 py-4"
            >
              <div>
                <IconBrandInstagram size="28" />
              </div>
            </a>
            <a
              href="https://www.threads.net/@statisense"
              target="_blank"
              className="border-default-300/70 hover:bg-default-100 flex cursor-pointer items-center justify-center rounded-3xl border px-6 py-4"
            >
              <div>
                <IconBrandThreads size="28" />
              </div>
            </a>
            <a
              href="https://www.linkedin.com/company/statisense/"
              target="_blank"
              className="border-default-300/70 hover:bg-default-100 flex cursor-pointer items-center justify-center rounded-3xl border px-6 py-4"
            >
              <div>
                <IconBrandLinkedin size="28" />
              </div>
            </a>
          </div>
        </div>
      </ScrollReveal>
    </div>
  );
};

export default ConnectWithUs;