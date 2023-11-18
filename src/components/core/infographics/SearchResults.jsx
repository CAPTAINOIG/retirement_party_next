import React from 'react';
import { useSearchInfographics } from '@/api/infographics.js';
import InfographicCard from '@/components/core/infographics/InfographicCard.jsx';
import Button from '@/components/global/Button';
import InfographicLoadingCard from '@/components/core/infographics/InfographicLoadingCard';

const SearchResults = ({ query }) => {
  const {
    data,
    isLoading: isInfographicsLoading,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
  } = useSearchInfographics(query);

  const infographics = data?.pages.map((p) => p.infographics).flat();

  return (
    <>
      <div className="container">
        {isInfographicsLoading ? (
          <div className="grid md:grid-cols-3 gap-8">
            <InfographicLoadingCard />
            <InfographicLoadingCard />
            <InfographicLoadingCard />
          </div>
        ) : (
          <>
            <h5 className="text-center text-2xl mb-10">
              {infographics.length ? 'Results for ' : 'No results for '}
              <span className="font-semibold italic">{query}</span>
            </h5>
            {!!infographics.length && (
              <>
                <div className="grid md:grid-cols-3 gap-8">
                  {infographics?.map?.((infographic) => (
                    <InfographicCard key={infographic._id} infographic={infographic} />
                  ))}
                </div>
                {hasNextPage && (
                  <div className="mt-20 flex items-center justify-center">
                    <Button onClick={fetchNextPage} loading={isFetchingNextPage} variant="outlined" size="lg">
                      Load more
                    </Button>
                  </div>
                )}
              </>
            )}
          </>
        )}
      </div>
    </>
  );
};

export default SearchResults;
