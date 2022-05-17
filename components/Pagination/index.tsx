import { PaginationItem } from "./PaginationItem";

export function Pagination() {
  return (
    <div className="flex mt-8 justify-between items-center">
      <div>
        <strong>0</strong> - <strong>10</strong> de <strong>100</strong>
      </div>
      <div>
        <PaginationItem number={1} />
        <PaginationItem isCurrent={true} number={2} />
        <PaginationItem number={3} />
        <PaginationItem number={4} />
        <PaginationItem number={5} />
        <PaginationItem number={6} />
        <PaginationItem number={7} />
      </div>
    </div>
  );
}
