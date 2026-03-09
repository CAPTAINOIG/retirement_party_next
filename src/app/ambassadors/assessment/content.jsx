'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { addToast, Button, Card } from '@heroui/react';
import Logo from '@/components/core/shared/Logo';
import Progress from '@/components/global/Progress';
import { cn } from '@/lib/utils';
import { useGetAssessment, useVerifyAmbassador } from '@/api/insights';

const TIME_LIMIT_SECONDS = 20 * 60;


// Render seconds as MM:SS.
const formatTime = (totalSeconds) => {
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;

  return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
};

const getOptionMeta = (option) => {
  const { _id, value } = option;

  return { key: _id, label: value, value };
};

const AmbassadorAssessmentContent = () => {
  const searchParams = useSearchParams();
  const ambassadorHash =
    searchParams.get('hash')
   || '';
  const {
    data: verifyData,
    isLoading: isVerifying,
    isError: isVerifyError,
    refetch: refetchVerify,
  } = useVerifyAmbassador(ambassadorHash);
  
  const verificationFlag =
    verifyData?.verified ??
    verifyData?.isVerified ??
    verifyData?.data?.verified ??
    verifyData?.data?.isVerified;
  const isVerified = verificationFlag === undefined ? Boolean(verifyData) : Boolean(verificationFlag);
  const verificationStatus = !ambassadorHash
    ? 'missing'
    : isVerifying
      ? 'loading'
      : isVerifyError
        ? 'error'
        : isVerified
          ? 'verified'
          : 'denied';
  const canFetchAssessment = verificationStatus === 'verified';
  const { data: assessmentData, isLoading, isError, refetch } = useGetAssessment(canFetchAssessment);
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [timeLeft, setTimeLeft] = useState(TIME_LIMIT_SECONDS);
  const timerRef = useRef(null);

  const currentQuestion = questions[currentIndex] ?? null;
  const selectedAnswer = currentQuestion ? answers[currentQuestion.id] : null;
  const answeredCount = Object.keys(answers).length;
  const progress = questions.length ? ((currentIndex + 1) / questions.length) * 100 : 0;

  useEffect(() => {
    if (!assessmentData?.questions?.length) {
      return;
    }

    const normalized = assessmentData.questions.map((question) => ({
      id: question._id,
      question: question.content,
      options: question.options,
      answer: question.answer,
    }));

    setQuestions(normalized);
    setCurrentIndex(0);
    setAnswers({});
    setIsSubmitted(false);
    setTimeLeft(TIME_LIMIT_SECONDS);
  }, [assessmentData]);

  // Start the countdown timer once per assessment session.
  useEffect(() => {
    if (isSubmitted || timerRef.current || !questions.length) {
      return;
    }

    timerRef.current = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timerRef.current);
          timerRef.current = null;
          return 0;
        }

        return prev - 1;
      });
    }, 1000);

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }
    };
  }, [isSubmitted, questions.length]);

  // Auto-submit when time runs out.
  useEffect(() => {
    if (!isSubmitted && timeLeft === 0) {
      addToast({
        title: 'Time is up',
        description: 'Your assessment has been submitted automatically.',
        color: 'warning',
      });
      setIsSubmitted(true);
    }
  }, [isSubmitted, timeLeft]);

  
  const handleAnswerSelect = (optionValue) => {
    setAnswers((prev) => ({
      ...prev,
      [currentQuestion.id]: optionValue,
    }));
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

  // Go back to the previous question.
  const handlePrevious = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  // Validate and submit the assessment.
  const handleSubmit = () => {
    if (!selectedAnswer) {
      addToast({
        title: 'Answer required',
        description: 'Choose an option before submitting the assessment.',
        color: 'warning',
      });
      return;
    }

    setIsSubmitted(true);
  };

  if (verificationStatus !== 'verified') {
    const statusMessage = !ambassadorHash
      ? 'Provide a valid ambassador ID to verify your registration.'
      : isVerifying
        ? 'Verifying your registration...'
        : isVerifyError
          ? 'Unable to verify your registration right now.'
          : 'Registration not found or not approved yet.';

    return (
      <main className="min-h-screen bg-black text-white">
        <section className="container py-16 md:py-24">
          <div className="mb-10 flex justify-center md:mb-14">
            <Logo light width={140} />
          </div>
          <Card className="mx-auto w-full max-w-3xl rounded-3xl border border-white/10 bg-[#06080d] p-8 text-center">
            <h2 className="text-2xl font-semibold text-white">Registration verification</h2>
            <p className="mt-3 text-white/60">{statusMessage}</p>
            {verificationStatus === 'missing' ? (
              <Button as={Link} href="/ambassador/register" color="primary" size="lg" className="mt-6">
                Go to registration
              </Button>
            ) : verificationStatus === 'error' ? (
              <Button color="primary" size="lg" className="mt-6" onPress={refetchVerify}>
                Retry verification
              </Button>
            ) : null}
          </Card>
        </section>
      </main>
    );
  }

  if (isSubmitted) {
    return (
      <main className="min-h-screen bg-black text-white">
        <section className="container py-16 md:py-24">
          <div className="mb-10 flex justify-center md:mb-14">
            <Logo light width={140} />
          </div>

          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-4xl !leading-tight font-bold md:text-7xl">
              Assessment{' '}
              <span className="bg-linear-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">Completed</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-white/70 md:text-xl">
              Congratulations! You have completed the assessment.
            </p>
          </div>

          <Card className="mx-auto mt-14 w-full max-w-3xl rounded-3xl border border-white/10 bg-[#06080d] p-6 md:p-10">
            <div className="rounded-3xl border border-cyan-400/20 bg-cyan-400/5 p-6 text-center">
              <p className="text-sm uppercase tracking-[0.3em] text-cyan-300/80">Assessment Complete</p>
              <p className="mt-4 text-4xl font-bold md:text-5xl text-white">Well done!</p>
              <p className="mt-3 text-white/65">Answered: {answeredCount} of {questions.length}</p>
            </div>

            <div className="mt-8 grid gap-4 md:grid-cols-2">
              <Button as={Link} href="/ambassador/register" variant="bordered" size="lg" color='primary' className='text-white'>
                Back to registration
              </Button>
            </div>
          </Card>
        </section>
      </main>
    );
  }

  if (!questions.length) {
    return (
      <main className="min-h-screen bg-black text-white">
        <section className="container py-16 md:py-24">
          <div className="mb-10 flex justify-center md:mb-14">
            <Logo light width={140} />
          </div>
          <Card className="mx-auto w-full max-w-3xl rounded-3xl border border-white/10 bg-[#06080d] p-8 text-center">
            <h2 className="text-2xl font-semibold text-white">Assessment loading</h2>
            <p className="mt-3 text-white/60">
              {isError
                ? 'Unable to load the assessment questions right now.'
                : isLoading
                  ? 'Preparing your questions...'
                  : 'No assessment questions are available yet.'}
            </p>
            {isError || !isLoading ? (
              <Button color="primary" size="lg" className="mt-6" onPress={refetch}>
                Retry
              </Button>
            ) : null}
          </Card>
        </section>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-black text-white">
      <section className="container py-16 md:py-24">
        <div className="mb-10 flex justify-center md:mb-14">
          <Logo light width={140} />
        </div>

        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-4xl !leading-tight font-bold md:text-7xl">
            Ambassador
            <span className="bg-linear-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">Assessment</span>
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg text-white/70 md:text-xl">
            Progress through {questions.length}  questions to complete the assessment.
          </p>
        </div>

        <Card className="mx-auto mt-14 w-full max-w-4xl rounded-3xl border border-white/10 bg-[#06080d] p-6 md:p-10">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.28em] text-white/45">
                Question {currentIndex + 1} of {questions.length}
              </p>
              <p className="mt-2 text-sm text-white/60">{answeredCount} answered</p>
            </div>
            <div className="flex w-full max-w-sm flex-col gap-3 md:items-end">
              <p className="text-xs uppercase tracking-[0.3em] text-white/55">
                Time left <span className="ml-2 text-sm font-semibold text-cyan-300">{formatTime(timeLeft)}</span>
              </p>
              <Progress width={progress} className="bg-white/10" />
            </div>
          </div>

          <div className="mt-8 rounded-3xl border border-white/10 bg-white/[0.02] p-6 md:p-8">
            <h2 className="text-2xl font-semibold leading-tight md:text-3xl text-white">{currentQuestion?.question}</h2>

            <div className="mt-8 grid gap-4">
              {currentQuestion.options.map((option) => {
                const optionMeta = getOptionMeta(option);
                const isActive = selectedAnswer === optionMeta.value;

                return (
                  <button
                    key={optionMeta.key}
                    type="button"
                    onClick={() => handleAnswerSelect(optionMeta.value)}
                    className={cn(
                      'rounded-2xl border px-5 py-4 text-left text-base transition duration-200',
                      'border-white/10 bg-white/[0.02] text-white/80 hover:border-cyan-400/45 hover:bg-cyan-400/8',
                      {
                        'border-cyan-400 bg-cyan-400/12 text-white shadow-[0_0_0_1px_rgba(34,211,238,0.25)]':
                          isActive,
                      },
                    )}
                  >
                    {optionMeta.label}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <Button variant="bordered" size="lg" onPress={handlePrevious} isDisabled={currentIndex === 0} className='text-white'>
              Previous
            </Button>

            <div className="flex flex-col gap-3 md:flex-row">
              <Button as={Link} href="/" variant="light" size="lg" color='danger' className='text-red-500'>
                Exit
              </Button>
              {currentIndex === questions.length - 1 ? (
                <Button color="primary" size="lg" onPress={handleSubmit}>
                  Submit assessment
                </Button>
              ) : (
                <Button color="primary" size="lg" onPress={handleNext}>
                  Next question
                </Button>
              )}
            </div>
          </div>
        </Card>
      </section>
    </main>
  );
};

export default AmbassadorAssessmentContent;
