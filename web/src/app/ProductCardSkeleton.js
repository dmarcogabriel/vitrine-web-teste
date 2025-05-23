import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@app/components/ui/card';
import {Skeleton} from '@app/components/ui/skeleton';

export function ProductCardSkeleton() {
  return (
    <Card>
      <div className="flex justify-center w-full bg-black">
        <Skeleton className="w-[150px] h-[150px]" />
      </div>

      <CardHeader>
        <CardTitle>
          <Skeleton className="h-6" />
        </CardTitle>
        <CardDescription>
          <Skeleton className="h-6" />
        </CardDescription>
      </CardHeader>

      <CardContent className="line-clamp-2">
        <p>
          <Skeleton className="h-6" />
        </p>
      </CardContent>

      <CardFooter>
        <Skeleton className="w-full h-6" />
      </CardFooter>
    </Card>
  );
}
