import React from 'react';
import { IconBrandFacebook, IconBrandInstagram, IconBrandX } from '@tabler/icons-react';

const items = [
  {
    content: 'Thank you for the insight, update and statistics you are giving us we love you.',
    name: 'Segun Ayanwale',
    position: '',
    platform: 'twitter',
  },
  {
    content: '@StatiSense Kudos to you guys,so many vital information from this timeline.',
    name: 'SirDee',
    position: '',
    platform: 'twitter',
  },
  {
    content: '@StatiSense We appreciate the good work you and your team are doing, sir.',
    name: 'Khaleel Abba',
    position: '',
    platform: 'twitter',
  },
  {
    content: `
Kudos @StatiSense for creating healthy rivalry between States of Nigeria as regards comparism of developmental data.
It would surely spur the States govt to deliver good governance & Nigerians would be able to probe governors who are lagging behind.
At the end Nigeria wins👌
`,
    name: 'Dayo Jagun💞🇳🇬🔝',
    position: '',
    platform: 'twitter',
  },
  {
    content: '@StatiSense Kudos to you. Data tells the hidden story.',
    name: 'Mystery',
    position: '',
    platform: 'twitter',
  },
  {
    content: `There's a lot of sense in your Statisense... Kudos!!!`,
    name: 'Aknoyi',
    position: '',
    platform: 'instagram',
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials">
      <div className="container sm:px-6 lg:px-8">
        <div className="!xl:mt-0 mx-auto flex max-w-2xl flex-col md:items-center md:text-center">
          <h2 className="text-4xl font-semibold tracking-tighter md:text-7xl">
            Over 500 <br className="block md:hidden" /> million social impressions
          </h2>
          <p className="mt-6 text-lg tracking-tight">Loved by businesses across Africa, our data insights travel far</p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:gap-8 lg:mt-20 lg:max-w-none lg:grid-cols-3"
        >
          <li>
            <ul role="list" className="flex flex-col gap-y-6 sm:gap-y-8">
              {items.slice(0, 2).map((item, i) => (
                <TestimonialItem key={i} item={item} />
              ))}
            </ul>
          </li>
          <li>
            <ul role="list" className="flex flex-col gap-y-6 sm:gap-y-8">
              {items.slice(2, 4).map((item, i) => (
                <TestimonialItem key={i} item={item} />
              ))}
            </ul>
          </li>
          <li>
            <ul role="list" className="flex flex-col gap-y-6 sm:gap-y-8">
              {items.slice(4, 6).map((item, i) => (
                <TestimonialItem key={i} item={item} />
              ))}
            </ul>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Testimonials;

const TestimonialItem = ({ item }) => {
  return (
    <li>
      <figure className="relative rounded-3xl bg-slate-200/50 px-10 py-14">
        {item.platform === 'facebook' && (
          <IconBrandFacebook size="100" className="absolute right-6 bottom-6 text-slate-300/20" />
        )}
        {item.platform === 'twitter' && (
          <IconBrandX size="100" className="absolute right-6 bottom-6 text-slate-300/20" />
        )}
        {item.platform === 'instagram' && (
          <IconBrandInstagram size="100" className="absolute right-6 bottom-6 text-slate-300/20" />
        )}
        <blockquote className="relative">
          <p className="text-lg text-slate-900">{item.content}</p>
        </blockquote>
        <figcaption className="relative mt-6 flex items-center justify-between border-t border-slate-100 pt-6">
          <div>
            <div className="font-display text-base text-slate-900">{item.name}</div>
          </div>
        </figcaption>
      </figure>
    </li>
  );
};
