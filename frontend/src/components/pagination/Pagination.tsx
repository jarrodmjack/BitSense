import React from 'react'

type CurrencyTablePaginationOwnProps = {
    currenciesPerPage: number,
    totalCurrencies: number,
    paginate: (pagenumber: number) => void,
    currentPage: number
}

const CurrencyTablePagination: React.FC<CurrencyTablePaginationOwnProps> = ({currenciesPerPage, totalCurrencies, paginate, currentPage}) => {
    const pageNumbers = []

    for(let i = 1; i <= Math.ceil(totalCurrencies / currenciesPerPage); i++){
        pageNumbers.push(i)
    }

    return (
        <div className="my-10 w-full flex justify-center">
            {pageNumbers.map((number, i) => (
                <button  onClick={() => paginate(number)} key={i} className={` text-slate-100 py-2 px-3 first:rounded-l-lg last:rounded-r-lg ${currentPage === number ? 'bg-violet-700' : 'bg-zinc-600'}`}>{number}</button>
            ))}
        </div>
    )
}

export default CurrencyTablePagination