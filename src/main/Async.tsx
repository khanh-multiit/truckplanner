import React, { lazy, FC, Suspense } from 'react';

type Props = {
  page: string;
};

const AsyncComponent: FC<Props> = ({ page }) => {
  const MainComponent = lazy(() => import(`pages/${page}`));
  return (
    <Suspense fallback={<div>Loading</div>}>
      <MainComponent />
    </Suspense>
  );
};

export default AsyncComponent;
