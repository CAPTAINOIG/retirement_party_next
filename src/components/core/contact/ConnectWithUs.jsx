import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandThreads,
  IconBrandWhatsapp,
  IconBrandX,
  IconMail,
} from '@tabler/icons-react';

const ConnectWithUs = () => {
  return (
    <div>
      <div className="mt-8 grid grid-cols-1 gap-8">
        <div className="flex items-center space-x-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full border">
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
      <div className="mt-10">
        <div className="grid grid-cols-5 gap-3 sm:grid-cols-7 sm:gap-4">
          <a
            href="https://twitter.com/statisense"
            target="_blank"
            className="flex cursor-pointer items-center justify-center rounded-3xl border border-slate-300/70 px-6 py-4 hover:bg-slate-100"
          >
            <div>
              <IconBrandX size="28" />
            </div>
          </a>
          <a
            href="https://facebook.com/statisense"
            target="_blank"
            className="flex cursor-pointer items-center justify-center rounded-3xl border border-slate-300/70 px-6 py-4 hover:bg-slate-100"
          >
            <div>
              <IconBrandFacebook size="28" />
            </div>
          </a>
          <a
            href="https://www.instagram.com/statisense/"
            target="_blank"
            className="flex cursor-pointer items-center justify-center rounded-3xl border border-slate-300/70 px-6 py-4 hover:bg-slate-100"
          >
            <div>
              <IconBrandInstagram size="28" />
            </div>
          </a>
          <a
            href="https://www.threads.net/@statisense"
            target="_blank"
            className="flex cursor-pointer items-center justify-center rounded-3xl border border-slate-300/70 px-6 py-4 hover:bg-slate-100"
          >
            <div>
              <IconBrandThreads size="28" />
            </div>
          </a>
          <a
            href="https://www.linkedin.com/company/statisense/"
            target="_blank"
            className="flex cursor-pointer items-center justify-center rounded-3xl border border-slate-300/70 px-6 py-4 hover:bg-slate-100"
          >
            <div>
              <IconBrandLinkedin size="28" />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ConnectWithUs;
