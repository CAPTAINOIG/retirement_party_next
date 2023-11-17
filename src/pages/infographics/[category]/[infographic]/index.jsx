import { useRouter } from "next/router";
import React, { useEffect, useRef } from "react";
import { useAddViewMutation } from "@/api/infographics";
import PageHeader from "@/components/core/shared/PageHeader";
import Image from "@/components/core/shared/Image";
import {
  IconBrandFacebook,
  IconBrandTelegram,
  IconBrandTwitter,
  IconBrandWhatsapp,
  IconClock,
  IconShare,
  IconHeartPlus,
  IconMessageCircle,
} from "@tabler/icons-react";
import { format } from "date-fns";
import Link from "next/link";
import Newsletter from "@/components/core/home/Newsletter";
import SimilarInfographics from "@/components/core/infographics/SimilarInfographics";
import DefaultLayout from "@/components/core/DefaultLayout";
import Head from "next/head";
import ShareButtons from "@/components/core/infographics/ShareButtons";
import ClientOnly from "@/components/global/ClientOnly";
import { getImageLink } from "@/lib/utils";
import TextArea from "@/components/global/TextArea";
import InfographicCardComment from "@/components/core/infographics/InfographicCardComment";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

export async function getServerSideProps({ res, params }) {
  res.setHeader('Cache-Control', 'public, s-maxage=300, stale-while-revalidate=600')
  const { infographic } = await (await fetch(`${ baseUrl }/infographic/${ params.infographic }`)).json();
  return { props: { infographic } };
}

const InfographicDetailsPage = ({ infographic }) => {
  const router = useRouter();
  const viewed = useRef(null);
  const { mutateAsync: addView } = useAddViewMutation();

  useEffect(() => {
    if (infographic && viewed.current !== infographic._id) {
      addView({ id: infographic._id });
      viewed.current = infographic._id;
    }
  }, [addView, infographic]);

  return (
    <>
      <Head>
        <title>{ `${ infographic.title } • Statisense` }</title>
        <meta name="description" content={ infographic.description }/>
        <meta property="og:title" content={ infographic.title }/>
        <meta property="og:description" content={ infographic.description }/>
        <meta property="og:image" content={ getImageLink(infographic.image) }/>
        <meta
          property="og:url"
          content={ `https://www.statisense.co/infographics/${ infographic.category.slug }/${ infographic.slug }` }
        />
        <meta name="twitter:card" content="summary_large_image"/>
        <meta name="twitter:title" content={ infographic.title }/>
        <meta name="twitter:description" content={ infographic.description }/>
        <meta name="twitter:image" content={ getImageLink(infographic.image) }/>
      </Head>
      <PageHeader
        title={infographic?.title}
        onBack={() => router.push(`/infographics/${infographic.category.slug}`)}
        backText={infographic?.category?.name || "Back"}

      />
      <div className="py-24 md:py-28">
        <div className="container">
          {
            isInfographicLoading ? (
              <div className="max-w-xl mx-auto">
                <div className="aspect-square w-full bg-zinc-500/20 rounded-xl"/>
                <div className="bg-zinc-900/10 h-8 w-4/12 rounded-full mt-6"/>
                <div className="bg-zinc-900/10 h-8 w-9/12 rounded-full mt-6"/>
                <div className="bg-zinc-900/10 h-8 w-3/12 rounded-full mt-4"/>
              </div>
            ) : (
              <div className="max-w-[580px] mx-auto">
                <div className="flex items-stretch">
                  <div>
                    <div className="flex items-stetch">
                      <div className="hidden md:block relative px-6">
                        <div className="sticky top-36">
                          <div className="flex flex-row md:flex-col space-x-4 md:space-x-0 md:space-y-4">
                            <div className="flex flex-col items-center gap-1">
                              <IconButton
                                icon={<IconHeartPlus size="20" />}
                                rounded
                                variant="subtle"
                                color="red"
                              />
                              <span className="text-sm">200</span>
                            </div>
                            <div className="flex flex-col items-center gap-1">
                              <IconButton
                                icon={<IconMessageCircle size="20" />}
                                rounded
                                variant="subtle"
                                color="primary"
                              />
                              <span className="text-sm">200</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <Image src={ infographic.image } alt="" className="rounded-xl"/>
                      <div className="hidden md:block relative px-6">
                        <div className="sticky top-36">
                          <ClientOnly>
                            <ShareButtons infographic={ infographic }/>
                          </ClientOnly>
                        </div>
                      </div>
                    </div>
                    <div className="mt-10">
                      <div className="flex items-center opacity-70 mb-6">
                        <IconClock className="mr-2" size="18"/>
                        <p>Date posted: { format(new Date(infographic.createdAt), 'MMM dd, yyyy') }</p>
                      </div>
                      <p>
                        { infographic.description }
                      </p>
                      <div className="mt-10 flex flex-row flex-wrap">
                        {
                          infographic.tags.split(',').map((tag, i) => (
                            <Link key={ i } href={ `/infographics?q=${ tag }` }>
                              <div
                                className="bg-zinc-200 hover:bg-zinc-300 px-3 py-[2px] rounded-xl mr-3 mb-4 cursor-pointer"
                              >
                                { tag }
                              </div>
                            </Link>
                          ))
                        }
                      </div>
                      <h5 className="mt-8 mb-3">Comments</h5>
                      <TextArea label="Leave a comment" bordered />
                      <div className="mt-6">
                        <InfographicCardComment />
                        <InfographicCardComment />
                        <InfographicCardComment />
                      </div>
                      <div className="mt-6 md:hidden">
                        <ClientOnly>
                          <ShareButtons infographic={ infographic }/>
                        </ClientOnly>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
          }
        </div>
      </div>
      <Newsletter sm />
      <div className="py-24 md:py-32">
        {!!infographic && <SimilarInfographics infographic={infographic} />}
      </div>
    </>
  );
};

InfographicDetailsPage.Layout = DefaultLayout;

export default InfographicDetailsPage;
