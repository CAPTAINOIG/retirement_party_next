import { useGetCategoryInfographics } from "@/api/infographics";
import PageHeader from "@/components/core/shared/PageHeader";
import ChatWithBambi from "@/components/core/infographics/ChatWithBambi";
import InfographicCard from "@/components/core/infographics/InfographicCard";
import InfographicLoadingCard from "@/components/core/infographics/InfographicLoadingCard";
import InfographicsLayout from "@/components/core/InfographicsLayout";
import PageHeader from "@/components/core/shared/PageHeader";
import TestRun from "@/components/core/shared/TestRun";
import Button from "@/components/global/Button";
import DefaultLayout from "@/components/core/DefaultLayout";
import { useRouter } from "next/router";
import { useState } from "react";
import { getImageLink } from "@/lib/utils";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export async function getServerSideProps({ res, params }) {
  res.setHeader('Cache-Control', 'public, s-maxage=300, stale-while-revalidate=600')
  const { category } = await (await fetch(`${ BASE_URL }/category/${ params.category }`)).json();
  return { props: { category } };
}

const CategoryInfographicsPage = ({ category }) => {
  const router = useRouter();
  const {
    data,
    isLoading: isInfographicsLoading,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
  } = useGetCategoryInfographics(category?._id);
  const [isChatbotOpen, setIsChatbotOpen] = useState(false);
  const infographics = data?.pages.map((p) => p.infographics).flat();

  const infographics = data?.pages.map(p => p.infographics).flat();

  return (
    <InfographicsLayout
      isInfographicsLoading={isInfographicsLoading}
      pageTitle={category?.name}
      PageHeader={
        <PageHeader
          title={category?.name}
          onBack={() => router.push("/infographics/trending")}
          backText="Categories"
          isLoading={isCategoryLoading}
        />
      }
    >
      <Head>
        <title>{ `${ category.name } • Statisense` }</title>
        <meta
          name="description"
          content={ `Explore a wide array of insights and information on ${ category.name }` }
        />
        <meta property="og:title" content={ `${ category.name } • Statisense` }/>
        <meta
          property="og:description"
          content={ `Explore a wide array of insights and information on ${ category.name }` }
        />
        <meta property="og:image" content={ getImageLink(category.image) }/>
        <meta property="og:url" content={ `https://www.statisense.co/infographics/${ category.slug }` }/>
        <meta name="twitter:card" content="summary_large_image"/>
        <meta name="twitter:title" content={ `${ category.name } • Statisense` }/>
        <meta
          name="twitter:description"
          content={ `Explore a wide array of insights and information on ${ category.name }` }
        />
        <meta name="twitter:image" content={ getImageLink(category.image) }/>
      </Head>
      <div className="bg-slate-50">
        <ChatWithBambi setIsChatbotOpen={setIsChatbotOpen} />
        <PageHeader
          title={ category?.name }
          onBack={ () => router.push("/infographics/trending") }
          backText="Categories"
          isLoading={ isCategoryLoading }
        />
        <div className="py-24 md:py-32">
          <div className="container">
            {
              isInfographicsLoading ? (
                <div className="grid md:grid-cols-3 gap-8">
                  <InfographicLoadingCard/>
                  <InfographicLoadingCard/>
                  <InfographicLoadingCard/>
                </div>
              ) : (
                <>
                  {
                    !!infographics.length ? (
                      <>
                        <div className="grid md:grid-cols-1 items-center lg:max-w-2xl mx-auto gap-8 gap-y-10">

                          { infographics.map((infographic) => (
                            <InfographicCard
                              key={ infographic._id }
                              infographic={ infographic }
                            />
                          )) }
                          { hasNextPage && (
                            <div className="mt-20 flex items-center justify-center">
                              <Button
                                onClick={ fetchNextPage }
                                loading={ isFetchingNextPage }
                                variant="outlined"
                                size="lg"
                              >
                                Load more
                              </Button>
                            </div>
                          ) }
                        </div>
                      </>
                    ) : (
                      <div className="p-20 text-center opacity-50">
                        <p>No infographics added yet</p>
                      </div>
                    )
                  }
                </>
              )
            }
          </div>
        </div>
      </div>
      <TestRun isOpen={ isChatbotOpen } onClose={ () => setIsChatbotOpen(false) }/>
    </InfographicsLayout>
  );
};

CategoryInfographicsPage.Layout = DefaultLayout;

export default CategoryInfographicsPage;
