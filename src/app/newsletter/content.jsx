'use client';

import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { useForm } from 'react-hook-form';
import { Button, Input, Select, SelectItem, addToast } from '@heroui/react';
import { useNewsletterSubscribe } from '@/api/other';
import {
  TbUser,
  TbMail,
  TbChevronRight,
  TbCheck,
  TbAlertTriangle,
  TbChartBar,
  TbBulb,
  TbTrophy,
  TbRocket,
  TbNews,
  TbArrowUpRight,
} from 'react-icons/tb';
import Logo from '@/components/core/shared/Logo';
import Link from 'next/link';
import { useTheme } from 'next-themes';

const CATEGORIES = [
  { key: 'student', label: 'Student' },
  { key: 'professional', label: 'Professional' },
  { key: 'data-mentor', label: 'Data Mentor' },
  { key: 'corporate-executive', label: 'Corporate Executive' },
  { key: 'content-creator', label: 'Content Creator' },
  { key: 'storyteller', label: 'Storyteller' },
];

const NEWSLETTER_SECTIONS = [
  {
    icon: TbChartBar,
    title: 'Data Story of the Week',
    description:
      'A trendy, data idea effortlessly presented in a language you understand. Tied to lifestyle or business stories that matter.',
    iconColor: 'text-blue-400',
    iconBg: 'bg-blue-400/10',
  },
  {
    icon: TbTrophy,
    title: 'Something to Brag About',
    description:
      'A fascinating statistic you can drop at any dinner table and immediately become the most interesting person in the room.',
    iconColor: 'text-amber-400',
    iconBg: 'bg-amber-400/10',
  },
  {
    icon: TbBulb,
    title: 'If Your Data Could Talk',
    description:
      'Because your tools should do more of the heavy lifting, we spotlight a product’s feature here from one of Immortal AI’s suite of products.',
    iconColor: 'text-violet-400',
    iconBg: 'bg-violet-400/10',
  },
  {
    icon: TbRocket,
    title: "What's Brewing at Immortal HQ",
    description:
      'Product releases, updates, and activities straight from the team building the most advanced data suite in Africa.',
    iconColor: 'text-emerald-400',
    iconBg: 'bg-emerald-400/10',
  },
];

const SignupForm = () => {
  const [isSuccess, setIsSuccess] = useState(false);
  const { mutateAsync: subscribe, isPending } = useNewsletterSubscribe();
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    try {
      await subscribe({ firstName: data.firstName, lastName: data.lastName, email: data.email, category: data.category });
      setIsSuccess(true);
      reset();
    } catch (error) {
      addToast({
        title: 'Subscription failed',
        description: error?.response?.data?.message || 'Something went wrong, please try again',
        color: 'danger',
      });
    }
  };

  if (isSuccess) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="py-12 text-center"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-emerald-100 dark:bg-emerald-500/15"
        >
          <TbCheck className="h-10 w-10 text-emerald-600" />
        </motion.div>
        <h3 className="mb-3 text-2xl font-bold text-stone-950 dark:text-stone-50">One Last Step!</h3>
        <p className="mb-2 text-base text-stone-600 dark:text-stone-300">
          We sent a confirmation email to your inbox. Please click the link inside to verify your
          subscription and complete your sign-up.
        </p>
        <p className="text-sm text-stone-500 dark:text-stone-400">
          Can&apos;t find it? Check your spam or promotions folder.
        </p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="flex">
          <Input
            {...register('firstName', { required: 'First name is required' })}
            label="First Name"
            labelPlacement="outside"
            placeholder="Your first name"
            variant="bordered"
            size="md"
            startContent={<TbUser className="text-stone-400" size={17} />}
            isInvalid={!!errors.firstName}
            errorMessage={errors.firstName?.message}
            classNames={{
              label: 'text-stone-600 text-sm dark:text-stone-300',
              input: 'text-stone-900 text-sm px-2 dark:text-stone-100',
              inputWrapper:
                'border-stone-300 bg-stone-50 shadow-[inset_0_1px_0_rgba(255,255,255,0.8)] hover:border-stone-400 dark:border-stone-700 dark:bg-stone-900 dark:shadow-none dark:hover:border-stone-500',
            }}
          />
        </div>
        <div className="flex">
          <Input
            {...register('lastName', { required: 'Last name is required' })}
            label="Last Name"
            labelPlacement="outside"
            placeholder="Your last name"
            variant="bordered"
            size="md"
            startContent={<TbUser className="text-stone-400" size={17} />}
            isInvalid={!!errors.lastName}
            errorMessage={errors.lastName?.message}
            classNames={{
              label: 'text-stone-600 text-sm dark:text-stone-300',
              input: 'text-stone-900 text-sm px-2 dark:text-stone-100',
              inputWrapper:
                'border-stone-300 bg-stone-50 shadow-[inset_0_1px_0_rgba(255,255,255,0.8)] hover:border-stone-400 dark:border-stone-700 dark:bg-stone-900 dark:shadow-none dark:hover:border-stone-500',
            }}
          />
        </div>
      </div>
      <div className="flex">
        <Input
          {...register('email', {
            required: 'Email is required',
            pattern: { value: /^\S+@\S+$/i, message: 'Invalid email address' },
          })}
          label="Email"
          labelPlacement="outside"
          placeholder="your@email.com"
          type="email"
          variant="bordered"
          size="md"
          startContent={<TbMail className="text-stone-400" size={17} />}
          isInvalid={!!errors.email}
          errorMessage={errors.email?.message}
          classNames={{
            label: 'text-stone-600 text-sm dark:text-stone-300',
            input: 'text-stone-900 text-sm px-2 dark:text-stone-100',
            inputWrapper:
              'border-stone-300 bg-stone-50 shadow-[inset_0_1px_0_rgba(255,255,255,0.8)] hover:border-stone-400 dark:border-stone-700 dark:bg-stone-900 dark:shadow-none dark:hover:border-stone-500',
          }}
        />
      </div>
      <div className="flex">
        <Select
          {...register('category', { required: 'Please select a category' })}
          label="I am a..."
          labelPlacement="outside"
          placeholder="Select your category"
          variant="bordered"
          size="md"
          onSelectionChange={(keys) => setValue('category', [...keys][0])}
          isInvalid={!!errors.category}
          errorMessage={errors.category?.message}
          classNames={{
            label: 'text-stone-600 text-sm dark:text-stone-300',
            trigger:
              'border-stone-300 bg-stone-50 shadow-[inset_0_1px_0_rgba(255,255,255,0.8)] hover:border-stone-400 dark:border-stone-700 dark:bg-stone-900 dark:shadow-none dark:hover:border-stone-500',
            value: 'text-stone-900 text-sm dark:text-stone-100',
            listbox: 'bg-white dark:bg-stone-900',
            popoverContent: 'border border-stone-200 bg-white dark:border-stone-700 dark:bg-stone-900',
          }}
        >
          {CATEGORIES.map((cat) => (
            <SelectItem key={cat.key} classNames={{ title: 'text-stone-900 dark:text-stone-100' }}>
              {cat.label}
            </SelectItem>
          ))}
        </Select>
      </div>
      <div className="pt-2">
        <Button
          type="submit"
          size="lg"
          radius="full"
          isLoading={isPending}
          endContent={!isPending && <TbChevronRight size={18} />}
          className="w-full bg-stone-950 font-semibold text-stone-50 hover:bg-stone-800 sm:w-auto sm:px-10 dark:bg-stone-100 dark:text-stone-950 dark:hover:bg-stone-200"
        >
          {isPending ? 'Subscribing...' : 'Join Now'}
        </Button>
      </div>
    </form>
  );
};

const MrInsightsNewsletterContent = () => {
  const { resolvedTheme: theme } = useTheme();
  const heroRef = useRef(null);
  const isHeroInView = useInView(heroRef, { once: true });

  const sectionsRef = useRef(null);
  const isSectionsInView = useInView(sectionsRef, { once: true, margin: '-60px' });

  const formRef = useRef(null);
  const isFormInView = useInView(formRef, { once: true, margin: '-60px' });

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };

  useEffect(() => {
    const selectors = [
      '#tawkto-widget',
      'iframe[title*="chat"]',
      'iframe[title*="Chat"]',
      'iframe[src*="tawk.to"]',
      '[data-tawk]',
      '.tawk-min-container',
      '.tawk-button',
      '#tawkchat-container',
    ];

    const hideWidget = () => {
      selectors.forEach((selector) => {
        document.querySelectorAll(selector).forEach((node) => {
          if (node instanceof HTMLElement) {
            node.style.display = 'none';
            node.style.visibility = 'hidden';
            node.style.pointerEvents = 'none';
          }
        });
      });

      if (window.Tawk_API?.hideWidget) {
        window.Tawk_API.hideWidget();
      }
    };

    const showWidget = () => {
      selectors.forEach((selector) => {
        document.querySelectorAll(selector).forEach((node) => {
          if (node instanceof HTMLElement) {
            node.style.display = '';
            node.style.visibility = '';
            node.style.pointerEvents = '';
          }
        });
      });

      if (window.Tawk_API?.showWidget) {
        window.Tawk_API.showWidget();
      }
    };

    hideWidget();
    const intervalId = window.setInterval(hideWidget, 1000);

    return () => {
      window.clearInterval(intervalId);
      showWidget();
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#f4efe7] text-stone-950 dark:bg-[#080808] dark:text-stone-50">
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section
        ref={heroRef}
        className="relative overflow-hidden border-b border-stone-200 px-4 pt-24 pb-20 md:pt-32 md:pb-24 dark:border-stone-800"
      >
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(217,119,6,0.12),transparent_38%)] dark:bg-[radial-gradient(circle_at_top,rgba(245,158,11,0.12),transparent_30%)]" />
          <div className="absolute inset-x-0 top-0 h-px bg-stone-300/70 dark:bg-stone-800/80" />
        </div>

        <div className="relative container mx-auto max-w-6xl">
          <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1fr)_460px] lg:gap-14">
            <div>
              <Link href="/">
                <Logo light={theme === 'dark'} className="mb-12" />
              </Link>

              <motion.h1
                initial={{ opacity: 0, y: 24 }}
                animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="max-w-4xl text-[2.8rem] leading-[0.98] font-semibold tracking-[-0.04em] md:text-[4.4rem] lg:text-[5.2rem]"
              >
                Data Just Got a Personality,
                <br />
                and He’s Hilarious.
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="mt-6 max-w-2xl text-lg leading-relaxed text-stone-700 md:text-xl dark:text-stone-200"
              >
                Meet <strong className="text-stone-950 dark:text-stone-50">Mr Insights</strong> your new guide to
                decoding the world through data, humour, and everyday stories.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.28 }}
                className="mt-5 max-w-3xl text-base leading-relaxed text-stone-600 md:text-lg dark:text-stone-300"
              >
                He’s smart enough to inform your next big business move, witty enough to make you laugh, and curious
                enough to give you something to brag about and make you the most interesting person in the room.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.36 }}
                className="mt-5 max-w-3xl text-base leading-relaxed text-stone-600 md:text-lg dark:text-stone-300"
              >
                Powered by <strong className="font-semibold text-stone-950 dark:text-stone-50">Immortal AI</strong>, Mr
                Insights believes data intelligence shouldn’t be boring. Therefore, every other week, he delivers a
                newsletter that’s part insight, part stand-up, part training, and 100% worth opening.
              </motion.p>

              <motion.div
                initial={{ opacity: 0 }}
                animate={isHeroInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.7, delay: 0.5 }}
                className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs tracking-[0.18em] text-stone-500 uppercase dark:text-stone-500"
              >
                <span>Free forever</span>
                <span>Bi-weekly</span>
                <span>5 min read</span>
                <span>No spam</span>
              </motion.div>
            </div>

            <motion.div
              ref={formRef}
              initial={{ opacity: 0, x: 24 }}
              animate={isHeroInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="relative mt-30 lg:pt-2"
            >
              <div className="absolute -top-40 left-1/2 mb-6 flex -translate-x-1/2 justify-center lg:justify-end">
                <div className="relative z-1 h-auto w-[260px] object-contain drop-shadow-[0_18px_40px_rgba(28,25,23,0.16)] dark:drop-shadow-[0_18px_40px_rgba(0,0,0,0.45)]">
                  <img src="/images/sherlock.png" alt="Mr Insights" className="h-auto w-full object-contain" />
                </div>
              </div>

              <div className="relative z-1 mt-10 rounded-[2rem] border border-stone-300 bg-[#fffdf8] p-6 shadow-[0_30px_80px_rgba(28,25,23,0.08)] md:p-8 dark:border-stone-800 dark:bg-[#101010] dark:shadow-[0_30px_80px_rgba(0,0,0,0.5)]">
                <div className="mb-6">
                  <p className="text-xs tracking-[0.2em] text-stone-500 uppercase dark:text-stone-500">Signup Form</p>
                  <h3 className="mt-2 text-2xl font-semibold text-stone-950 dark:text-stone-50">
                    Enter your details below
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-stone-600 dark:text-stone-300">
                    Enter your details below to receive this straight into your inbox.
                  </p>
                </div>

                <SignupForm />

                <div className="mt-6 flex items-center justify-between rounded-2xl bg-stone-950 px-4 py-4 text-stone-50 dark:border dark:border-stone-800 dark:bg-stone-900 dark:text-stone-100">
                  <p className="text-sm text-stone-200 dark:text-stone-300">
                    Smart enough for work. Funny enough to keep opening.
                  </p>
                  <TbArrowUpRight className="shrink-0 text-amber-300 dark:text-amber-400" size={20} />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── What's Inside ────────────────────────────────────── */}
      <section ref={sectionsRef} className="px-4 py-20 md:py-24">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isSectionsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="mb-4 text-center"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-stone-300 bg-white px-4 py-1.5 text-sm text-stone-500 dark:border-stone-800 dark:bg-stone-950 dark:text-stone-400">
              <TbNews size={14} /> Here Is What You Will See Inside
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isSectionsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mx-auto mb-4 max-w-3xl text-center text-3xl font-semibold tracking-tight md:text-4xl"
          >
            Four reasons this newsletter earns its place in your inbox
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={isSectionsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-auto mb-14 max-w-3xl text-center text-base leading-relaxed text-stone-600 md:text-lg dark:text-stone-300"
          >
            Whether you’re a student exploring the use case of data, a business leader making data-driven moves, a
            creative looking for your place in all of these, or someone interested in learning the simplest, most
            advanced suite of data intelligence tools in Africa, Mr Insights is here to hold your hands.
          </motion.p>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
            {NEWSLETTER_SECTIONS.map((section, i) => {
              const Icon = section.icon;
              return (
                <motion.div
                  key={section.title}
                  initial={{ opacity: 0, y: 24 }}
                  animate={isSectionsInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
                  className="rounded-[2rem] border border-stone-300 bg-[#fffdf8] p-6 shadow-[0_18px_40px_rgba(28,25,23,0.04)] dark:border-stone-800 dark:bg-[#101010] dark:shadow-[0_18px_40px_rgba(0,0,0,0.32)]"
                >
                  <div
                    className={`mb-5 inline-flex h-11 w-11 items-center justify-center rounded-2xl ${section.iconBg}`}
                  >
                    <Icon size={20} className={section.iconColor} />
                  </div>
                  <p className="mb-2 text-xs tracking-[0.18em] text-stone-400 uppercase dark:text-stone-600">
                    0{i + 1}
                  </p>
                  <h3 className="mb-3 text-lg font-semibold text-stone-950 dark:text-stone-50">{section.title}</h3>
                  <p className="text-sm leading-relaxed text-stone-600 dark:text-stone-300">{section.description}</p>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={isSectionsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="mt-12 border-t border-stone-200 pt-8 dark:border-stone-900"
          >
            <div className="mx-auto max-w-2xl rounded-3xl border border-amber-300/80 bg-amber-50/80 p-5 text-left dark:border-amber-500/20 dark:bg-amber-500/10">
              <div className="flex items-start gap-3">
                <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-amber-100 text-amber-700 dark:bg-amber-500/15 dark:text-amber-300">
                  <TbAlertTriangle size={18} />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-[11px] font-semibold tracking-[0.24em] text-amber-700 uppercase dark:text-amber-300">
                    Warning
                  </p>
                  <p className="mt-2 max-w-xl text-sm leading-relaxed text-amber-900 md:text-base dark:text-amber-100">
                    Side effects may include better decisions, random laughter, and a mild addiction to data stories.
                  </p>
                </div>
              </div>

              <Button
                onPress={() => formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' })}
                size="lg"
                radius="full"
                endContent={<TbChevronRight size={18} />}
                className="mt-5 bg-stone-950 px-8 font-semibold text-stone-50 hover:bg-stone-800 dark:bg-stone-100 dark:text-stone-950 dark:hover:bg-stone-200"
              >
                Sign Up Now
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Footer ───────────────────────────────────────────── */}
      <footer className="border-t border-stone-200 px-4 py-10 dark:border-stone-900">
        <div className="container mx-auto max-w-5xl text-center">
          <img
            src="/images/logo-icon.png"
            alt="Immortal AI"
            className="mx-auto mb-4 h-8 opacity-50 dark:opacity-70 dark:brightness-0 dark:invert"
          />
          <p className="text-sm text-stone-500 dark:text-stone-400">
            © {new Date().getFullYear()} Immortal AI. All rights reserved.
          </p>
          <p className="mt-2 text-xs text-stone-400 italic dark:text-stone-500">
            "Until next time, may your dashboards load faster than your coffee cools."
          </p>
        </div>
      </footer>
    </div>
  );
};

export default MrInsightsNewsletterContent;
