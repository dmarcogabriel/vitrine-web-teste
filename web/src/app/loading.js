import {Header} from '@app/components/ui/header';

export default function Loading() {
  return (
    <main>
      <Header />

      <div className="px-6 py-6 md:px-[12rem]">
        <div className="flex flex-col md:grid md:grid-cols-3 gap-6">
          {/* add skeleton here */}
        </div>
      </div>
    </main>
  );
}
