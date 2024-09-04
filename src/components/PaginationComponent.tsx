import { useDispatch, useSelector } from "react-redux";
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "./ui/pagination";
import { jumpTo, next, privies } from "@/pages/api/paginationSlice";
import { useState } from "react";

export function PaginationComponent() {
    const limitData: any = useSelector<{ paginationReducer: { limit: number, skip: number } }>(state => state.paginationReducer);
    const dispatch = useDispatch();
    const [paginationCount, setPaginationCount] = useState([1, 2, 3]);
    const skipValue: number = (limitData.skip / 12) + 1;
    const PAGECOUNT: number = 17;

    const handleNavigate = (pageN: number, navigation?: string) => {
        if (navigation === 'privies') {
            dispatch(privies())
        } else if (navigation === 'next' && pageN < PAGECOUNT) {
            dispatch(next());
        } else {
            dispatch(jumpTo(pageN))
            if (pageN === 1) {
                setPaginationCount([1, 2, 3]);
            } else if (pageN === PAGECOUNT) {
                setPaginationCount([15, 16, 17]);
            }
        }
        for (let index: number = 3; index < PAGECOUNT; index += 2) {
            let adder = index - 3;
            if (pageN === index && paginationCount[0] === index - 2) {
                setPaginationCount([3 + adder, 4 + adder, 5 + adder]);
            }
            else if (paginationCount[0] === pageN + 1 && paginationCount[0] === index) {
                setPaginationCount([1 + adder, 2 + adder, 3 + adder]);
            }
        }
    }


    return (
        <Pagination>
            <PaginationContent>

                <PaginationItem >
                    <PaginationPrevious className="cursor-pointer" onClick={() => {
                        handleNavigate(skipValue - 1, 'privies')
                    }} />
                </PaginationItem>

                {paginationCount[0] !== 1 ? <>
                    <PaginationItem className="cursor-pointer">
                        <PaginationLink isActive={skipValue === 1 ? true : false} onClick={() => {
                            handleNavigate(1)
                        }}>{1}</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationEllipsis />
                    </PaginationItem>
                </> : <></>
                }

                {
                    paginationCount.map((pageNumber: number, index: number) => {
                        return <PaginationItem className="cursor-pointer" key={index} >
                            <PaginationLink isActive={skipValue === pageNumber ? true : false} onClick={() => {
                                handleNavigate(pageNumber)
                            }}>{pageNumber}</PaginationLink>
                        </PaginationItem>
                    })
                }

                {paginationCount[2] !== PAGECOUNT ? <>
                    <PaginationItem>
                        <PaginationEllipsis />
                    </PaginationItem>
                    <PaginationItem className="cursor-pointer" >
                        <PaginationLink isActive={skipValue === PAGECOUNT ? true : false} onClick={() => {
                            handleNavigate(PAGECOUNT)
                        }}>{PAGECOUNT}</PaginationLink>
                    </PaginationItem>
                </> : <></>}

                <PaginationItem>
                    <PaginationNext className="cursor-pointer" onClick={() => {
                        handleNavigate(skipValue, 'next')
                    }} />
                </PaginationItem>

            </PaginationContent>
        </Pagination>
    )
}


