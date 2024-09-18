import React from 'react'

function CompanyCard({company}) {
  return (
    <div className='flex p-[0.1rem] overflow-hidden rounded bg-black'>
        <img src={company.companyLogo} className='h-[200px]' alt="" />
    </div>
  )
}

export default CompanyCard
