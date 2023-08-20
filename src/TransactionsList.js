// import react from 'react';

function TransactionList({ transactions }) {
    return(
        <table className='transactions-list'>
        <tbody>
        <tr className='table-header'>
          <th>
            <h3 className='header-cell'>Date</h3>
          </th>
          <th>
            <h3 className='header-cell'>Description</h3>
          </th>
          <th>
            <h3 className='header-cell'>Category</h3>
          </th>
          <th>
            <h3 className='header-cell'>Amount</h3>
          </th>
        </tr>
        
        </tbody>
        </table>
    )
}
export default TransactionList