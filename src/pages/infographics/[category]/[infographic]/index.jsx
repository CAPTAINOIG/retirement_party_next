import { useRouter } from "next/router";
import React, { useEffect, useRef } from "react";
import { useAddViewMutation, useGetInfographicQuery } from "@/api/infographics";
import PageHeader from "@/components/core/shared/PageHeader";
import Image from "@/components/core/shared/Image";
import {
  IconBrandFacebook,
  IconBrandTelegram,
  IconBrandTwitter,
  IconBrandWhatsapp,
  IconClock,
  IconShare
} from "@tabler/icons-react";
import { format } from "date-fns";
import Link from "next/link";
import Newsletter from "@/components/core/home/Newsletter";
import SimilarInfographics from "@/components/core/infographics/SimilarInfographics";
import { useToast } from "@/hooks/use-toast";
import IconButton from "@/components/global/IconButton";
import DefaultLayout from "@/components/core/DefaultLayout";
import Head from "next/head";

const InfographicDetailsPage = () => {
  const router = useRouter();
  const { infographic: slug } = router.query;
  const viewed = useRef(null);
  const { mutateAsync: addView } = useAddViewMutation();
  const { data: { infographic = null } = {}, isLoading: isInfographicLoading } = useGetInfographicQuery(slug);

  useEffect(() => {
    if (infographic && viewed.current !== infographic._id) {
      addView({ id: infographic._id });
      viewed.current = infographic._id;
    }
  }, [addView, infographic]);

  return (
    <>
      <Head>
        <title>{ infographic?.title || 'Infographic' }</title>
      </Head>
      <PageHeader
        title={ infographic?.title }
        onBack={ () => router.push(`/infographics/${ infographic.category.slug }`) }
        backText={ infographic?.category?.name || 'Back' }
        isLoading={ isInfographicLoading }
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
                      <Image src={ infographic.image } alt="" className="rounded-xl"/>
                      <div className="hidden md:block relative px-6">
                        <div className="sticky top-36">
                          <ShareButtons infographic={ infographic }/>
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
                      <div className="mt-6 md:hidden">
                        <ShareButtons infographic={ infographic }/>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
          }
        </div>
      </div>
      <Newsletter sm/>
      <div className="py-24 md:py-32">
        { !!infographic && <SimilarInfographics infographic={ infographic }/> }
      </div>
    </>
  );
};

const ShareButtons = ({ infographic }) => {
  const toast = useToast();

  const handleShare = async () => {
    try {
      await navigator.share({
        title: infographic.title,
        url: window.location.href
      });
    } catch (e) {
      toast.error('Could not share');
    }
  };

  return (
    <div className="flex flex-row md:flex-col space-x-4 md:space-x-0 md:space-y-4">
      {
        !!navigator?.canShare?.() && (
          <IconButton
            onClick={ handleShare }
            icon={ <IconShare size="20"/> } rounded variant="subtle" color="black"
          />
        )
      }
      <a
        href={ `https://www.facebook.com/sharer.php?u=${ window.location.href }` } target="_blank"
        className="flex"
      >
        <IconButton
          icon={ <IconBrandFacebook size="20"/> } rounded variant="subtle" color="primary"
        />
      </a>
      <a
        href={ `https://twitter.com/share?url=${ window.location.href }` } target="_blank"
        className="flex"
      >
        <IconButton
          icon={ <IconBrandTwitter size="20"/> } rounded variant="subtle" color="primary"
        />
      </a>
      <a
        href={ `https://telegram.me/share/url?url=${ window.location.href }` } target="_blank"
        className="flex"
      >
        <IconButton
          icon={ <IconBrandTelegram size="20"/> } rounded variant="subtle" color="primary"
        />
      </a>
      <a
        href={ `https://api.whatsapp.com/send?text=${ infographic.title } ${ window.location.href }` }
        target="_blank" className="flex"
      >
        <IconButton
          icon={ <IconBrandWhatsapp size="20"/> } rounded variant="subtle" color="green"
        />
      </a>
    </div>
  )
};

InfographicDetailsPage.Layout = DefaultLayout;

export default InfographicDetailsPage;
