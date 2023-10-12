import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandThreads,
  IconBrandWhatsapp,
  IconBrandX,
  IconMail
} from "@tabler/icons-react";

const ConnectWithUs = () => {
  return (
    <div>
      <div>
        <h5 className="text-xl font-medium mb-8">Visit Statisense</h5>
        <p>
          Our office is located at No. 7, Samuel Adedoyin street, Victoria Island, Lagos. We are open Monday through
          Friday from 9:00am to 5:00pm
        </p>
      </div>
      <div className="grid grid-cols-1 gap-8 mt-8">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-full flex items-center justify-center border">
            <IconMail size="20"/>
          </div>
          <div>
            <p>Email address</p>
            <a href="mailto:info@statisense.com.ng" target="_blank" className="flex font-medium">
              info@statisense.com.ng
            </a>
          </div>
        </div>
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-full flex items-center justify-center border">
            <IconBrandWhatsapp size="20"/>
          </div>
          <div>
            <p>Whatsapp</p>
            <a href="https://wa.me/+2349055550090" target="_blank" className="flex font-medium">
              +2349055550090
            </a>
          </div>
        </div>
      </div>
      <div className="mt-10">
        <div className="grid grid-cols-5 sm:grid-cols-7 gap-3 sm:gap-4">
          <a
            href="https://twitter.com/statisense" target="_blank"
            className="border border-slate-300/70 hover:bg-slate-100 cursor-pointer rounded-3xl flex items-center justify-center py-4 px-6"
          >
            <div><IconBrandX size="28"/></div>
          </a>
          <a
            href="https://facebook.com/statisense" target="_blank"
            className="border border-slate-300/70 hover:bg-slate-100 cursor-pointer rounded-3xl flex items-center justify-center py-4 px-6"
          >
            <div><IconBrandFacebook size="28"/></div>
          </a>
          <a
            href="https://www.instagram.com/statisense/" target="_blank"
            className="border border-slate-300/70 hover:bg-slate-100 cursor-pointer rounded-3xl flex items-center justify-center py-4 px-6"
          >
            <div><IconBrandInstagram size="28"/></div>
          </a>
          <a
            href="https://www.threads.net/@statisense" target="_blank"
            className="border border-slate-300/70 hover:bg-slate-100 cursor-pointer rounded-3xl flex items-center justify-center py-4 px-6"
          >
            <div><IconBrandThreads size="28"/></div>
          </a>
          <a
            href="https://www.linkedin.com/company/statisense/" target="_blank"
            className="border border-slate-300/70 hover:bg-slate-100 cursor-pointer rounded-3xl flex items-center justify-center py-4 px-6"
          >
            <div><IconBrandLinkedin size="28"/></div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ConnectWithUs;
