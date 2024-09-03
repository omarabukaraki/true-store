import { useDispatch, useSelector } from "react-redux";
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "./ui/pagination";
import { jumpTo, next, privies } from "@/pages/api/paginationSlice";
import { useState } from "react";

export function PaginationComponent() {
    const limitData: any = useSelector<{ paginationReducer: { limit: number, skip: number } }>(state => state.paginationReducer);
    const dispatch = useDispatch();
    const [paginationCount, setPaginationCount] = useState([1, 2, 3, 4, 5]);
    const skipValue: number = (limitData.skip / 12) + 1;

    const handleNavigate = (pageN: number) => {
        if (pageN === skipValue - 1) {
            dispatch(privies())
        } else if (pageN === skipValue) {
            dispatch(next())
        } else {
            dispatch(jumpTo(pageN))
        }
        for (let index: number = 5; index < 17; index += 4) {
            let adder = index - 5;
            if (pageN === index && paginationCount[0] === index - 4) {
                setPaginationCount([5 + adder, 6 + adder, 7 + adder, 8 + adder, 9 + adder]);
            } else if (pageN === index && paginationCount[1] === pageN + 1) {
                setPaginationCount([1 + adder, 2 + adder, 3 + adder, 4 + adder, 5 + adder]);
            }
        }
    }


    return (
        <Pagination>
            <PaginationContent>
                <PaginationItem >
                    <PaginationPrevious className="cursor-pointer" onClick={() => {
                        handleNavigate(skipValue - 1)
                    }} />
                </PaginationItem>
                {
                    paginationCount.map((pageNumber: number, index: number) => {
                        return <PaginationItem key={index} >
                            <PaginationLink isActive={skipValue === pageNumber ? true : false} onClick={() => {
                                handleNavigate(pageNumber)
                            }}>{pageNumber}</PaginationLink>
                        </PaginationItem>
                    })
                }
                <PaginationItem>
                    <PaginationNext className="cursor-pointer" onClick={() => {
                        handleNavigate(skipValue)
                    }} />
                </PaginationItem>
            </PaginationContent>
        </Pagination>
    )
}

