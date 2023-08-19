import React from 'react';
import { IconBrandFacebook, IconBrandInstagram, IconBrandTwitter } from "@tabler/icons-react";

const Testimonials = () => {
  return (
    <section id="testimonials">
      <div className="container sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl flex flex-col md:items-center md:text-center !xl:mt-0">
          <h2 className="text-4xl md:text-6xl font-medium text-slate-900">
            Over 200 million social impressions
          </h2>
          <p className="mt-6 text-lg tracking-tight text-slate-700">
            Loved by businesses across Africa, our data insights travel far
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:gap-8 lg:mt-20 lg:max-w-none lg:grid-cols-3"
        >
          <li>
            <ul role="list" className="flex flex-col gap-y-6 sm:gap-y-8">
              <li>
                <figure className="relative rounded-3xl bg-slate-200/50 px-10 py-14">
                  <IconBrandFacebook size="100" className="animate-bounceTwo absolute bottom-6 right-6 text-slate-300/20"/>
                  <blockquote className="relative">
                    <p className="text-lg text-slate-900">
                      Statisense is so easy to use I can’t help but wonder if it’s really doing the things the
                      government
                      expects me to do.
                    </p>
                  </blockquote>
                  <figcaption
                    className="relative mt-6 flex items-center justify-between border-t border-slate-100 pt-6"
                  >
                    <div>
                      <div className="font-display text-base text-slate-900">Sheryl Berge</div>
                      <div className="mt-1 text-sm text-slate-500">CEO</div>
                    </div>
                    <div className="overflow-hidden rounded-full bg-slate-50">
                      <img src="" alt=""/>
                    </div>
                  </figcaption>
                </figure>
              </li>
              <li>
                <figure className="relative rounded-3xl bg-slate-200/50 px-10 py-14">
                  <IconBrandTwitter size="100" className="animate-bounceTwo absolute bottom-6 right-6 text-slate-300/20"/>
                  <blockquote className="relative">
                    <p className="text-lg text-slate-900">
                      I’m trying to get a hold of someone in support, I’m in a lot of trouble right now and they are
                      saying it has something to do with my books. Please get back to me right away.
                    </p>
                  </blockquote>
                  <figcaption
                    className="relative mt-6 flex items-center justify-between border-t border-slate-100 pt-6"
                  >
                    <div>
                      <div className="font-display text-base text-slate-900">Amy Hahn</div>
                      <div className="mt-1 text-sm text-slate-500">Director</div>
                    </div>
                    <div className="overflow-hidden rounded-full bg-slate-50">
                      <img src="" alt=""/>
                    </div>
                  </figcaption>
                </figure>
              </li>
            </ul>
          </li>
          <li>
            <ul role="list" className="flex flex-col gap-y-6 sm:gap-y-8">
              <li>
                <figure className="relative rounded-3xl bg-slate-200/50 px-10 py-14">
                  <IconBrandInstagram size="100" className="animate-bounceTwo delay-two absolute bottom-6 right-6 text-slate-300/20"/>
                  <blockquote className="relative">
                    <p className="text-lg text-slate-900">
                      The best part about Statisense is every time I pay my employees, my bank balance doesn’t go down
                      like it used to. Looking forward to spending this extra cash when I figure out why my card is
                      being declined.
                    </p>
                  </blockquote>
                  <figcaption
                    className="relative mt-6 flex items-center justify-between border-t border-slate-100 pt-6"
                  >
                    <div>
                      <div className="font-display text-base text-slate-900">Leland Kiehn</div>
                      <div className="mt-1 text-sm text-slate-500">Founder of Kiehn and Sons</div>
                    </div>
                    <div className="overflow-hidden rounded-full bg-slate-50">
                      <img src="" alt=""/>
                    </div>
                  </figcaption>
                </figure>
              </li>
              <li>
                <figure className="relative rounded-3xl bg-slate-200/50 px-10 py-14">
                  <IconBrandFacebook size="100" className="animate-bounceTwo delay-four absolute bottom-6 right-6 text-slate-300/20"/>
                  <blockquote className="relative">
                    <p className="text-lg text-slate-900">
                      There are so many things I had to do with my old software that I just don’t dol with
                      Statisense. Suspicious but I can’t say I don’t love it.
                    </p></blockquote>
                  <figcaption
                    className="relative mt-6 flex items-center justify-between border-t border-slate-100 pt-6">
                    <div>
                      <div className="font-display text-base text-slate-900">Erin Powlowski</div>
                      <div className="mt-1 text-sm text-slate-500">COO</div>
                    </div>
                    <div className="overflow-hidden rounded-full bg-slate-50">
                      <img src="" alt=""/>
                    </div>
                  </figcaption>
                </figure>
              </li>
            </ul>
          </li>
          <li>
            <ul role="list" className="flex flex-col gap-y-6 sm:gap-y-8">
              <li>
                <figure className="relative rounded-3xl bg-slate-200/50 px-10 py-14">
                  <IconBrandTwitter size="100" className="animate-bounceTwo delay-two absolute bottom-6 right-6 text-slate-300/20"/>
                  <blockquote className="relative">
                    <p className="text-lg text-slate-900">
                      I used to have to remit tax to the EU and with Statisense I somehow don’t have to do that anymore.
                      Nervous to travel there now though.
                    </p>
                  </blockquote>
                  <figcaption
                    className="relative mt-6 flex items-center justify-between border-t border-slate-100 pt-6">
                    <div>
                      <div className="font-display text-base text-slate-900">Peter Renolds</div>
                      <div className="mt-1 text-sm text-slate-500">Founder of West Inc</div>
                    </div>
                    <div className="overflow-hidden rounded-full bg-slate-50">
                      <img src="" alt=""/>
                    </div>
                  </figcaption>
                </figure>
              </li>
              <li>
                <figure className="relative rounded-3xl bg-slate-200/50 px-10 py-14">
                  <IconBrandInstagram size="100" className="animate-bounceTwo delay-four absolute bottom-6 right-6 text-slate-300/20"/>
                  <blockquote className="relative">
                    <p className="text-lg text-slate-900">
                      This is the fourth email I’ve sent to your support team. I am literally being held in jail for tax
                      fraud. Please answer your damn emails, this is important.
                    </p>
                  </blockquote>
                  <figcaption
                    className="relative mt-6 flex items-center justify-between border-t border-slate-100 pt-6">
                    <div>
                      <div className="font-display text-base text-slate-900">Amy Hahn</div>
                      <div className="mt-1 text-sm text-slate-500">Director</div>
                    </div>
                    <div className="overflow-hidden rounded-full bg-slate-50">
                      <img src="" alt=""/>
                    </div>
                  </figcaption>
                </figure>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Testimonials;
