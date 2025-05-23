import {Header} from '@app/components/ui/header';
import {Skeleton} from '@app/components/ui/skeleton';

export default function Loading() {
  return (
    <main>
      <Header />

      <div className="flex flex-col md:flex-row px-6 py-6 md:px-[12rem] gap-[2rem] md:gap-[6rem] md:items-end">
        <div className="flex flex-col gap-[2rem]">
          <Skeleton className="h-6" />

          <div className="flex justify-center w-full">
            <Skeleton className="h-[400px] w-[400px]" />
          </div>
        </div>

        <div className="flex flex-col gap-[1rem]">
          <div>
            <Skeleton className="h-8" />

            <Skeleton className="h-6" />
          </div>

          <Skeleton className="h-6" />
        </div>
      </div>
    </main>
  );
}
