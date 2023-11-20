import { useRouter } from 'next/router';
import React, { useEffect, useRef, useState } from 'react';
import { useAddViewMutation, useReactToInfographic } from '@/api/infographics';
import PageHeader from '@/components/core/shared/PageHeader';
import Image from '@/components/core/shared/Image';
import { IconClock, IconThumbUp, IconThumbUpFilled } from '@tabler/icons-react';
import { format } from 'date-fns';
import Link from 'next/link';
import DefaultLayout from '@/components/core/DefaultLayout';
import Head from 'next/head';
import ShareButtons from '@/components/core/infographics/ShareButtons';
import ClientOnly from '@/components/global/ClientOnly';
import { getImageLink } from '@/lib/utils';
import InfographicComments from '@/components/core/infographics/InfographicComments';
import Card from '@/components/global/Card';
import Button from '@/components/global/Button';
import { useAuth } from '@/hooks/use-auth';
import { useToast } from '@/hooks/use-toast';
import LoginRequiredAlert from '@/components/core/infographics/LoginRequiredModal';

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

export async function getServerSideProps({ res, params }) {
  res.setHeader('Cache-Control', 'public, s-maxage=300, stale-while-revalidate=600');
  const { infographic } = await (await fetch(`${baseUrl}/infographic/${params.infographic}`)).json();
  return { props: { infographic } };
}

const InfographicDetailsPage = ({ infographic }) => {
  const toast = useToast();
  const router = useRouter();
  const viewed = useRef(null);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const { mutateAsync: addView } = useAddViewMutation();
  const { user } = useAuth();
  const [isLiked, setIsLiked] = useState(!!infographic.reactions.find((reaction) => reaction.user._id === user?._id));
  const [reactionCount, setReactionCount] = useState(infographic.totalReactions);
  const { mutateAsync: react } = useReactToInfographic();
  
  useEffect(() => {
    setIsLiked(!!infographic.reactions.find((reaction) => reaction.user._id === user?._id));
  }, [infographic.reactions, user]);

  useEffect(() => {
    if (infographic && viewed.current !== infographic._id) {
      addView({ id: infographic._id });
      viewed.current = infographic._id;
    }
  }, [addView, infographic]);

  const likeInfographic = async () => {
    try {
      if (user) {
        if (isLiked) {
          setReactionCount((reactionCount) => reactionCount - 1);
        } else {
          setReactionCount((reactionCount) => reactionCount + 1);
        }
        setIsLiked((isLiked) => !isLiked);
        await react({ infographicId: infographic.id, reaction: 'like' });
      } else {
        setIsLoginModalOpen(true);
      }
    } catch (e) {
      toast.error(e?.response?.data?.message ?? 'Something went wrong, please try again');
    }
  };
  return (
    <>
      <Head>
        <title>{`${infographic.title} • Statisense`}</title>
        <meta name="description" content={infographic.description} />
        <meta property="og:title" content={infographic.title} />
        <meta property="og:description" content={infographic.description} />
        <meta property="og:image" content={getImageLink(infographic.image)} />
        <meta
          property="og:url"
          content={`https://www.statisense.co/insights/${infographic.category.slug}/${infographic.slug}`}
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={infographic.title} />
        <meta name="twitter:description" content={infographic.description} />
        <meta name="twitter:image" content={getImageLink(infographic.image)} />
      </Head>
      <PageHeader
        title={infographic?.title}
        onBack={() => router.push(`/insights/${infographic.category.slug}`)}
        backText="Insights"
      />
      <div className="py-16 md:py-20 bg-slate-100">
        <div className="container">
          <div className="max-w-[580px] mx-auto">
            <div className="flex items-stretch">
              <div className="relative">
                <div className="flex items-stretch">
                  <Card className="overflow-hidden rounded-xl w-full shadow-sm">
                    <Image src={infographic.image} alt="" className="w-full" />
                  </Card>
                  <div className="hidden md:block px-6 absolute top-0 left-full">
                    <div className="sticky top-36">
                      <ClientOnly>
                        <ShareButtons infographic={infographic} />
                      </ClientOnly>
                    </div>
                  </div>
                </div>
                <div className="mt-10">
                  <div className="flex items-center opacity-70 mb-6">
                    <IconClock className="mr-2" size="18" />
                    <p>Date posted: {format(new Date(infographic.createdAt), 'MMM dd, yyyy')}</p>

                    <div className="flex flex-row space-x-2 ml-auto">
                      <Button
                        onClick={likeInfographic}
                        variant="outlined"
                        color="black"
                        size="sm"
                        leftIcon={
                          !isLiked ? (
                            <IconThumbUp size="20" />
                          ) : (
                            <IconThumbUpFilled className="text-primary-500" size="20" />
                          )
                        }
                      >
                        {reactionCount}
                      </Button>
                    </div>
                  </div>
                  <p>{infographic.description}</p>
                  <div className="mt-10 flex flex-row flex-wrap">
                    {infographic.tags.split(',').map((tag, i) => (
                      <Link key={i} href={`/insights/search?q=${tag}`}>
                        <div className="bg-zinc-200 hover:bg-zinc-300 px-3 py-[2px] rounded-xl mr-3 mb-4 cursor-pointer">
                          {tag}
                        </div>
                      </Link>
                    ))}
                  </div>
                  <div className="mt-6 md:hidden">
                    <ClientOnly>
                      <ShareButtons infographic={infographic} />
                    </ClientOnly>
                  </div>
                  <h3 className="text-lg font-bold text-center px-2 mt-12">Comments ({infographic.totalComments})</h3>
                  <Card className="mt-6 shadow-sm rounded-2xl overflow-hidden">
                    <InfographicComments infographicId={infographic._id} />
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
        <LoginRequiredAlert isOpen={isLoginModalOpen} onClose={() => setIsLoginModalOpen(false)} />
      </div>
    </>
  );
};

InfographicDetailsPage.Layout = DefaultLayout;

export default InfographicDetailsPage;

