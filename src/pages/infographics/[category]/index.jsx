import { useGetCategoryInfographics, useGetCategoryQuery } from "@/api/infographics";
import PageHeader from "@/components/core/shared/PageHeader";
import InfographicLoadingCard from "@/components/core/infographics/InfographicLoadingCard";
import InfographicCard from "@/components/core/infographics/InfographicCard";
import Button from "@/components/global/Button";
import DefaultLayout from "@/components/core/DefaultLayout";
import { useRouter } from "next/router";
import Head from "next/head";

const CategoryInfographicsPage = () => {
  const router = useRouter();
  const { category: slug } = router.query;
  const { data: { category = null } = {}, isLoading: isCategoryLoading } = useGetCategoryQuery(slug);
  const {
    data,
    isLoading: isInfographicsLoading,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage
  } = useGetCategoryInfographics(category?._id);

  const infographics = data?.pages.map(p => p.infographics).flat()

  return (
    <>
      <Head>
        <title>{ category?.name || 'Statisense' }</title>
      </Head>
      <div className="bg-slate-50">
        <PageHeader
          title={ category?.name }
          onBack={ () => router.push('/infographics') }
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
