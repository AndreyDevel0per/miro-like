import { useParams } from "react-router-dom";
import { ROUTES } from "@/shared/model/routes.ts";
import type { PathParams } from "@/shared/model/routes.ts";

function BoardPage() {
  const params = useParams<PathParams[typeof ROUTES.BOARD]>();
  return <div>Board page {params.boardId}</div>;
}

export const Component = BoardPage;
