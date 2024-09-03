

import { useDispatch, useSelector } from "react-redux";
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "./ui/pagination";
import { next, privies } from "@/pages/api/paginationSlice";

export function PaginationComponent() {
    const limitData:any = useSelector<{paginationReducer:{limit:number,skip:number}}>(state=>state.paginationReducer);
    const dispatch = useDispatch();

    console.log(limitData.limit);
    

    return (
        <Pagination>
        <PaginationContent>
            <PaginationItem>
                <PaginationPrevious className="cursor-pointer" onClick={()=>{
                  dispatch(privies())
                }} />
            </PaginationItem>
            <PaginationItem>
                <PaginationLink href="#" isActive>1</PaginationLink>
            </PaginationItem>

            <PaginationItem>
                <PaginationLink href="#" >
                    2
                </PaginationLink>
            </PaginationItem>

            <PaginationItem>
                <PaginationLink href="#">3</PaginationLink>
            </PaginationItem>

            <PaginationItem>
                <PaginationLink href="#">4</PaginationLink>
            </PaginationItem>

            <PaginationItem>
                <PaginationLink href="#">5</PaginationLink>
            </PaginationItem>
           

            <PaginationItem>
                <PaginationNext  className="cursor-pointer"  onClick={()=>{
                  dispatch(next())
                }} />
            </PaginationItem>
        </PaginationContent>
    </Pagination>
    )
}
