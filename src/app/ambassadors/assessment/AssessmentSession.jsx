'use client';

import Logo from '@/components/core/shared/Logo';
import useCountdownTimer from '@/hooks/use-countdown-timer';
import { Button, Card, Progress, Spinner, addToast, useDisclosure } from '@heroui/react';
import { format } from 'date-fns';
import Link from 'next/link';
import { useState } from 'react';
import { HiOutlineArrowLeft } from 'react-icons/hi2';
import { RiAlertLine } from 'react-icons/ri';
import ExitModal from './ExitModal';
import { useSubmitAssessment, useGetAssessmentQuestions } from '@/api/other';
import { cn } from '@/lib/utils';
import { useTheme } from 'next-themes';

const PageShell = ({ children }) => {
  const { resolvedTheme: theme } = useTheme();

  return (
    <main className="min-h-screen">
      <section className="container py-16 md:py-24">
        <div className="mb-10 flex justify-center md:mb-14">
          <Link href="/">
            <Logo light={theme === 'dark'} width={180} />
          </Link>
        </div>
        {children}
      </section>
    </main>
  );
};

const AssessmentSession = ({ hash }) => {
  const { isOpen: isExitOpen, onOpen: onExitOpen, onOpenChange: onExitOpenChange } = useDisclosure();

  const { mutateAsync: submitAssessment, isPending: isSubmitting } = useSubmitAssessment();
  const { data: { questions = [] } = {}, isLoading: isQuestionsLoading } = useGetAssessmentQuestions();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [elapsedSeconds, setElapsedSeconds] = useState(0);

  const currentQuestion = questions[currentIndex] ?? null;
  const selectedAnswer = currentQuestion ? answers[currentQuestion._id] : null;
  const progress = questions.length ? ((currentIndex + 1) / questions.length) * 100 : 0;
  const totalAnswered = Object.keys(answers).length;
  const isLastQuestion = currentIndex === questions.length - 1;

  const handleSubmit = async ({ force = false } = {}) => {
    if (!force && !selectedAnswer) {
      addToast({
        title: 'Answer required',
        description: 'Choose an option before submitting the assessment.',
        color: 'warning',
      });
      return;
    }
    if (!force && totalAnswered < questions.length) {
      addToast({
        title: 'Incomplete assessment',
        description: 'Answer all questions before submitting.',
        color: 'warning',
      });
      return;
    }
    const result = questions.map((q) => ({ _id: q._id, selected: answers[q._id] }));
    try {
      await submitAssessment({ result, hash: hash });
      setElapsedSeconds(20 * 60 - timeLeft);
      setIsSubmitted(true);
    } catch (error) {
      addToast({
        title: 'Submission failed',
        description: error?.response?.data?.message || 'Something went wrong, please try again.',
        color: 'danger',
      });
    }
  };

  const timeLeft = useCountdownTimer({
    timeLimit: 20 * 60,
    enabled: !isSubmitted && questions.length > 0,
    onExpire: () => {
      if (!isSubmitted) {
        addToast({
          title: 'Time is up',
          description: 'Your assessment has been submitted automatically.',
          color: 'warning',
        });
        void handleSubmit({ force: true });
      }
    },
  });

  const handleAnswerSelect = (optionKey) => {
    setAnswers((prev) => ({ ...prev, [currentQuestion._id]: optionKey }));
  };

  const handleNext = () => {
    if (!selectedAnswer) {
      addToast({
        title: 'Select an answer',
        description: 'Choose one option before moving to the next question.',
        color: 'warning',
      });
      return;
    }
    setCurrentIndex((prev) => Math.min(prev + 1, questions.length - 1));
  };

  const handlePrevious = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  if (isQuestionsLoading) {
    return (
      <div className="flex h-screen flex-col items-center justify-center">
        <Spinner size="lg" />
        <p className="mt-6">Loading questions..</p>
      </div>
    );
  }

  if (!isQuestionsLoading && !questions.length) {
    return (
      <div className="flex h-screen flex-col items-center justify-center text-center">
        <RiAlertLine className="mb-6 text-6xl text-red-500" />
        <p className="text-xl font-bold">Unable to load questions</p>
      </div>
    );
  }

  if (isSubmitted) {
    return (
      <PageShell>
        <Card className="bg-default-50 border-default-200 mx-auto mt-14 w-full max-w-2xl rounded-3xl border p-8 shadow md:p-12">
          <div className="text-center">
            <p className="text-sm font-medium tracking-widest uppercase opacity-80">Assessment Submitted</p>
            <h1 className="mt-4 text-3xl !leading-tight font-bold md:text-4xl">Thank You!</h1>
            <p className="mx-auto mt-5 max-w-lg text-base opacity-80 md:text-lg">
              We appreciate you taking the time to complete the Statisense Ambassador assessment. Your responses have
              been received and our team will review them shortly.
            </p>
            <div className="divide-default-200 border-default-200 bg-default-50 my-8 grid grid-cols-2 divide-x rounded-2xl border">
              <div className="p-5">
                <p className="text-xs tracking-widest uppercase opacity-80">Questions Answered</p>
                <p className="mt-2 text-3xl font-bold">
                  {totalAnswered}
                  <span className="ml-1 text-lg font-normal opacity-80">/ {questions.length}</span>
                </p>
              </div>
              <div className="p-5">
                <p className="text-xs tracking-widest uppercase opacity-80">Time Taken</p>
                <p className="mt-2 text-3xl font-bold">
                  {format(new Date(elapsedSeconds * 1000), 'm:ss')}
                  <span className="ml-1 text-lg font-normal opacity-80">min</span>
                </p>
              </div>
            </div>
            <p className="text-sm opacity-80">
              Keep an eye on your inbox — we&apos;ll be in touch via email with next steps.
            </p>
            <Button
              as={Link}
              href="/ambassadors"
              variant="bordered"
              color="primary"
              className="mt-10 text-base"
              radius="full"
              startContent={<HiOutlineArrowLeft size="20" />}
            >
              Back to Home
            </Button>
          </div>
        </Card>
      </PageShell>
    );
  }

  return (
    <PageShell>
      <div className="mx-auto flex max-w-4xl flex-col items-center justify-center text-center">
        <h1 className="text-4xl leading-none font-bold md:text-5xl">Ready to become an ambassador?</h1>
        <p className="mt-3 max-w-3xl text-base md:text-lg">
          Answer {questions.length} questions before the timer runs out. Read carefully and do your best.
        </p>
      </div>
      <Card className="bg-default-50 border-default-200 mx-auto mt-14 w-full max-w-3xl rounded-3xl border p-6 shadow md:p-10">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase">
              Question {currentIndex + 1} of {questions.length}
            </p>
            <p className="mt-2 text-sm opacity-80">{totalAnswered} answered</p>
          </div>
          <div className="flex w-full max-w-sm flex-col gap-3 md:items-end">
            <p className="text-xs uppercase">
              <span>Time left:</span>
              <span className="text-success-300 ml-2 text-sm font-semibold">
                {format(new Date(timeLeft * 1000), 'mm:ss')}
              </span>
            </p>
            <Progress value={progress} maxValue={100} aria-label="Progress" />
          </div>
        </div>
        <div className="mt-12 rounded-2xl">
          <h2 className="text-xl leading-tight font-semibold md:text-2xl">{currentQuestion?.content}</h2>
          <div className="mt-8 grid gap-4">
            {currentQuestion.options.map((option) => (
              <button
                key={option._id}
                type="button"
                onClick={() => handleAnswerSelect(option.key)}
                className={cn(
                  'cursor-pointer rounded-2xl border px-5 py-4 text-left text-base transition-all duration-200',
                  'border-default-200 bg-default-50',
                  { 'border-success-300 bg-success-300/12': selectedAnswer === option.key },
                  { 'hover:bg-default-100': selectedAnswer !== option.key }
                )}
              >
                <div className="flex items-start gap-3">
                  <span className="font-semibold opacity-80">{option.key}.</span>
                  <span>{option.value}</span>
                </div>
              </button>
            ))}
          </div>
        </div>
        <div className="mt-8 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-col gap-3 md:flex-row">
            <Button
              variant="bordered"
              onPress={handlePrevious}
              isDisabled={currentIndex === 0}
              className="text-base"
              radius="full"
              startContent={<HiOutlineArrowLeft size="20" />}
            >
              Previous
            </Button>
            <Button variant="light" color="danger" onPress={onExitOpen} radius="full" className="text-base">
              Exit
            </Button>
          </div>
          {isLastQuestion ? (
            <Button color="primary" onPress={handleSubmit} isLoading={isSubmitting} className="text-base" radius="full">
              Submit assessment
            </Button>
          ) : (
            <Button color="primary" onPress={handleNext} className="text-base" radius="full">
              Next question
            </Button>
          )}
        </div>
      </Card>
      <ExitModal isOpen={isExitOpen} onOpenChange={onExitOpenChange} />
    </PageShell>
  );
};

export default AssessmentSession;
