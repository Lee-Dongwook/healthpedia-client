import ImagePlaceholderImage from '@/assets/img/ImagePlaceholder.png';
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/atoms/ui/pagination';
import Input from '@/components/atoms/Input';
import HoverCard from '@/components/molecules/notice/HoverCard';

const HoverCardWithPagination = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="grid grid-cols-3 grid-row-2 gap-4 mb-6">
        <HoverCard
          imageUrl={ImagePlaceholderImage}
          title=""
          date="2024-11-01"
          description=""
          viewCount={1}
          likeCount={1}
        />
        <HoverCard
          imageUrl={ImagePlaceholderImage}
          title=""
          date="2024-11-01"
          description=""
          viewCount={1}
          likeCount={1}
        />
        <HoverCard
          imageUrl={ImagePlaceholderImage}
          title=""
          date="2024-11-01"
          description=""
          viewCount={1}
          likeCount={1}
        />
        <HoverCard
          imageUrl={ImagePlaceholderImage}
          title=""
          date="2024-11-01"
          description=""
          viewCount={1}
          likeCount={1}
        />
        <HoverCard
          imageUrl={ImagePlaceholderImage}
          title=""
          date="2024-11-01"
          description=""
          viewCount={1}
          likeCount={1}
        />
        <HoverCard
          imageUrl={ImagePlaceholderImage}
          title=""
          date="2024-11-01"
          description=""
          viewCount={1}
          likeCount={1}
        />
      </div>
      <Input />
      <div className="mb-6"></div>
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious href="#" />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">1</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#" isActive>
              2
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">3</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
          <PaginationItem>
            <PaginationNext href="#" />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
};

export default HoverCardWithPagination;
