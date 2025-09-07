import { cn, formatDate } from "@/lib/utils";
import { EyeIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { Skeleton } from "./ui/skeleton";
import { Author, Startup } from "@/sanity/types";

export type StartupTypeCard = Omit<Startup, "author"> & { author?: Author };

const StartupCard = ({ post }: { post: StartupTypeCard }) => {
  const {
    _createdAt,
    views,
    author,
    _id,
    description,
    image,
    category,
    title,
  } = post;

  return (
    <li className="startup-card group" role="article" aria-labelledby={`startup-title-${_id}`}>
      <div className="flex-between">
        <time className="startup_card_date" dateTime={_createdAt} aria-label={`Published on ${formatDate(_createdAt)}`}>
          {formatDate(_createdAt)}
        </time>
        <div className="flex gap-1.5" aria-label={`${views} views`}>
          <EyeIcon className="text-primary size-6" aria-hidden="true" />
          <span className="text-16-medium">{views}</span>
        </div>
      </div>

      <div className="flex-between mt-5 gap-5">
        <div className="flex-1">
          <Link 
            href={`/user/${author?._id}`}
            aria-label={`View profile of ${author?.name}`}
          >
            <p className="text-16-medium line-clamp-1">{author?.name}</p>
          </Link>
          <Link 
            href={`/startup/${_id}`}
            aria-label={`View details for ${title}`}
          >
            <h3 id={`startup-title-${_id}`} className="text-26-semibold line-clamp-1">{title}</h3>
          </Link>
        </div>
        <Link 
          href={`/user/${author?._id}`}
          aria-label={`View profile of ${author?.name}`}
        >
          <img
            src={author?.image || "https://placehold.co/48x48"}
            alt={`Profile picture of ${author?.name}`}
            width={48}
            height={48}
            className="rounded-full"
          />
        </Link>
      </div>

      <Link 
        href={`/startup/${_id}`}
        aria-label={`View details for ${title}`}
      >
        <p className="startup-card_desc">{description}</p>

        <img
          src={image} 
          alt={`Screenshot or logo for ${title}`} 
          className="startup-card_img"
          loading="lazy"
        />
      </Link>

      <div className="flex-between mt-5 gap-3">
        <Link 
          href={`/?query=${category?.toLowerCase()}`}
          aria-label={`View all startups in ${category} category`}
        >
          <p className="text-16-medium">{category}</p>
        </Link>
        <Button className="startup-card_btn" asChild>
          <Link 
            href={`/startup/${_id}`}
            aria-label={`View detailed information about ${title}`}
          >
            Details
          </Link>
        </Button>
      </div>
    </li>
  );
};

export const StartupCardSkeleton = () => (
  <>
    {[0, 1, 2, 3, 4].map((index: number) => (
      <li key={cn("skeleton", index)}>
        <Skeleton className="startup-card_skeleton" />
      </li>
    ))}
  </>
);
export default StartupCard;
