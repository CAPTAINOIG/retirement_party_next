import { useGetCategoryInfographics } from "@/api/infographics";
import PageHeader from "@/components/core/shared/PageHeader";
import InfographicLoadingCard from "@/components/core/infographics/InfographicLoadingCard";
import InfographicCard from "@/components/core/infographics/InfographicCard";
import Button from "@/components/global/Button";
import DefaultLayout from "@/components/core/DefaultLayout";
import { useRouter } from "next/router";
import Head from "next/head";
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
    hasNextPage
  } = useGetCategoryInfographics(category?._id);

  const infographics = data?.pages.map(p => p.infographics).flat();

  return (
    <>
      <Head>
        <title>{ category?.name || 'Statisense' }</title>
        <meta name="description" content={ `Browse insights on ${ category.name }` }/>
        <meta property="og:title" content={ category.name }/>
        <meta property="og:description" content={ `Browse insights on ${ category.name }` }/>
        <meta property="og:image" content={ getImageLink(category.image) }/>
        <meta name="twitter:card" content="summary_large_image"/>
        <meta name="twitter:title" content={ category.name }/>
        <meta name="twitter:description" content={ `Browse insights on ${ category.name }` }/>
        <meta name="twitter:image" content={ getImageLink(category.image) }/>
      </Head>
      <div className="bg-slate-50">
        <PageHeader
          title={ category?.name }
          onBack={ () => router.push('/infographics') }
          backText="Categories"
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
                        <div className="grid md:grid-cols-3 gap-8">
                          {
                            infographics?.map?.((infographic) => (
                              <InfographicCard key={ infographic._id } infographic={ infographic }/>
                            ))
                          }
                        </div>
                        {
                          hasNextPage && (
                            <div className="mt-20 flex items-center justify-center">
                              <Button
                                onClick={ fetchNextPage } loading={ isFetchingNextPage } variant="outlined" size="lg"
                              >
                                Load more
                              </Button>
                            </div>
                          )
                        }
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
    </>
  );
};

CategoryInfographicsPage.Layout = DefaultLayout;

export default CategoryInfographicsPage;
