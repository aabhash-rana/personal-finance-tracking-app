import React from 'react'
import styled from 'styled-components'
import { useGlobalContext } from '../context/globalContext';
import { InnerLayout } from '../styles/Layouts';

function MinMax() {
    const {incomes, expenses, transactionHistory} = useGlobalContext()

    const [...history] = transactionHistory()

    return (
        <MinMaxStyled>
            <InnerLayout>
            <h2>Min/Max Transactions </h2>
            </InnerLayout>
            
            <div className="history-con">
                        <h2 className="salary-title">Min <span className='income'>Income</span>Max</h2>
                        <div className="salary-item">
                            <p>
                                ${Math.min(...incomes.map(item => item.amount))}
                            </p>
                            <p>
                                ${Math.max(...incomes.map(item => item.amount))}
                            </p>
                        </div>
                        <h2 className="salary-title">Min <span className='expense'>Expense</span>Max</h2>
                        <div className="salary-item">
                            <p>
                                ${Math.min(...expenses.map(item => item.amount))}
                            </p>
                            <p>
                                ${Math.max(...expenses.map(item => item.amount))}
                            </p>
                        </div>
                    </div>
            
            
        </MinMaxStyled>
    )
}

const MinMaxStyled = styled.div`
display: grid;
grid-template-columns: repeat(5, 1fr);
gap: 2rem;
        .history-con{
            grid-column: 1/6;
            h2{
                margin: 3rem 0;
                display: flex;
                align-items: center;
                justify-content: space-between;
            }
            .salary-title{
                font-size: 1.2rem;
                span.income{
                    font-size: 1.8rem;
                    color:var(--color-green)
                }
                span.expense{
                    font-size: 1.8rem;
                    color:red
                }
            }
            .salary-item{
                background: #FCF6F9;
                border: 2px solid #FFFFFF;
                box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
                padding: 2rem;
                border-radius: 20px;
                display: flex;
                justify-content: space-between;
                align-items: center;
                p{
                    font-weight: 600;
                    font-size: 1.6rem;
                }
            }
        }
    }
   
`;

export default MinMax