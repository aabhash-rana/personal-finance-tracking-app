import {dashboard, expenses, transactions, trend} from './Icons';

export const menuItems = [
    {
        id: 1,
        title: 'Dashboard',
        icon: dashboard,
        link: '/dashboard'
    },
    {
        id: 2,
        title: "Most Recent Transactions",
        icon: transactions,
        link: "/dashboard",
    },
    {
        id: 3,
        title: "My Incomes",
        icon: trend,
        link: "/dashboard",
    },
    {
        id: 4,
        title: "My Expenses",
        icon: expenses,
        link: "/dashboard",
    },
]