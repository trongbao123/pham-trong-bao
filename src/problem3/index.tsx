/**
    * # Task 3
    *List out the computational inefficiencies and anti-patterns found in the code block below.\
    *1. This code block uses
        1. ReactJS with TypeScript.
        2. Functional components.
        3. React Hooks
    *2. You should also provide a refactored version of the code, but more points are awarded to accurately stating the issues and explaining correctly how to improve them.  
    interface WalletBalance {
        currency: string;
        amount: number;
    }
    interface FormattedWalletBalance {
    currency: string;
    amount: number;
    formatted: string;
    }

    interface Props extends BoxProps {

    }
    const WalletPage: React.FC<Props> = (props: Props) => {
    const { children, ...rest } = props;
    const balances = useWalletBalances();
    const prices = usePrices();

        const getPriority = (blockchain: any): number => {
        switch (blockchain) {
            case 'Osmosis':
            return 100
            case 'Ethereum':
            return 50
            case 'Arbitrum':
            return 30
            case 'Zilliqa':
            return 20
            case 'Neo':
            return 20
            default:
            return -99
        }
        }

    const sortedBalances = useMemo(() => {
        return balances.filter((balance: WalletBalance) => {
            const balancePriority = getPriority(balance.blockchain);
            if (lhsPriority > -99) {
                if (balance.amount <= 0) {
                return true;
                }
            }
            return false
            }).sort((lhs: WalletBalance, rhs: WalletBalance) => {
                const leftPriority = getPriority(lhs.blockchain);
            const rightPriority = getPriority(rhs.blockchain);
            if (leftPriority > rightPriority) {
                return -1;
            } else if (rightPriority > leftPriority) {
                return 1;
            }
        });
    }, [balances, prices]);

    const formattedBalances = sortedBalances.map((balance: WalletBalance) => {
        return {
        ...balance,
        formatted: balance.amount.toFixed()
        }
    })

    const rows = sortedBalances.map((balance: FormattedWalletBalance, index: number) => {
        const usdValue = prices[balance.currency] * balance.amount;
        return (
        <WalletRow 
            className={classes.row}
            key={index}
            amount={balance.amount}
            usdValue={usdValue}
            formattedAmount={balance.formatted}
        />
        )
    })

    return (
        <div {...rest}>
        {rows}
        </div>
    )
    }
*/



/**
* errors in the code:
*Unnecessary Re-renders:
-> useMemo with dependency on both balances and prices: This can cause unnecessary re-renders if prices change even when balances doesn't affect sorting. Ideally, the useMemo should depend only on balances.
*Early Filtering:
-> Filtering balances with negative priority and positive amount in useMemo can be optimized. This check can be moved to the map function that creates formattedBalances. This avoids unnecessary filtering within useMemo.
*Duplicated Logic:
-> Priority calculation is repeated inside both getPriority and the sort function within useMemo. This logic can be consolidated to avoid redundancy.
*Potential Object Creation Overhead:
-> The map function for formattedBalances creates a new object for each balance. Depending on the size of balances, this can lead to unnecessary object creation overhead.
*/

/**
 * Below is a refactored version of the code that addresses the issues already mentioned:
*/
import React, { useMemo } from 'react';
import { BoxProps } from '@mui/material';
import { useWalletBalances, usePrices } from '../hooks';
import { WalletRow } from './WalletRow';

interface WalletBalance {
    currency: string;
    amount: number;
    blockchain: string;
}

interface FormattedWalletBalance {
    currency: string;
    amount: number;
    formatted: string;
}
interface Props extends BoxProps {

}


const WalletPage: React.FC<Props> = (props: Props) => {
    const { children, ...rest } = props;
    const balances = useWalletBalances();
    const prices = usePrices();

    const getPriority = (blockchain: string): number => {
        switch (blockchain) {
            case 'Osmosis':
                return 100;
            case 'Ethereum':
                return 50;
            case 'Arbitrum':
                return 30;
            case 'Zilliqa':
                return 20;
            case 'Neo':
                return 20;
            default:
                return -99;
        }
    };

    const sortedBalances = useMemo(() => {
        return balances.filter((balance: WalletBalance) => {
            const balancePriority = getPriority(balance.blockchain);
            return balancePriority > -99 && balance.amount > 0;
        }).sort((lhs: WalletBalance, rhs: WalletBalance) => {
            const leftPriority = getPriority(lhs.blockchain);
            const rightPriority = getPriority(rhs.blockchain);
            if (leftPriority > rightPriority) return -1;
            if (rightPriority > leftPriority) return 1;
            return rhs.amount - lhs.amount;
        });
    }, [balances]);

    const formattedBalances = sortedBalances.map((balance: WalletBalance) => ({
        ...balance,
        formatted: balance.amount > 0 ? balance.amount.toFixed() : "0",
    }));

    const rows = formattedBalances.map((balance: FormattedWalletBalance, index: number) => {
        const usdValue = prices[balance.currency] * balance.amount;
        return (
            <WalletRow
                className={classes.row}
                key={index}
                amount={balance.amount}
                usdValue={usdValue}
                formattedAmount={balance.formatted}
            />
        );
    });

    return (
        <div {...rest}>
            {rows}
        </div>
    );
};
