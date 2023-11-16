import React from 'react'
import styled from 'styled-components'
import { useGlobalContext } from '../../context/globalContext';
import { InnerLayout } from '../../styles/Layouts';

function History() {
    const {transactionHistory} = useGlobalContext()

    const [...history] = transactionHistory()

    return (
        <HistoryStyled>
            <InnerLayout>
            <h2>Recent History</h2>
            </InnerLayout>
            {history.map((item) =>{
                const {_id, title, amount, type} = item
                return (
                    <div key={_id} className="history-item">
                        <p style={{
                            color: type === 'expense' ? 'red' : 'var(--color-green)'
                        }}>
                            {title}
                        </p>

                        <p style={{
                            color: type === 'expense' ? 'red' : 'var(--color-green)'
                        }}>
                            {
                                type === 'expense' ? `-${amount <= 0 ? 0 : amount}` : `+${amount <= 0 ? 0: amount}`
                            }
                        </p>
                    </div>
                )
            })}
            
        </HistoryStyled>
    )
}

const HistoryStyled = styled.div`
display: grid;
grid-template-columns: repeat(3, 1fr);
gap: 2rem;
align-items: center;
padding-left: 500px;
.history-item{
    grid-column: 1 / 2;
    background: #FCF6F9;
    border: 1px solid #FFFFFF;
    box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.06);
    padding: 1rem;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    p{
        font-size: 2rem;
        font-weight: 500;
    }
    
}
   
`;

export default History