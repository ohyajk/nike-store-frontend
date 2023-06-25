import React from 'react';
import { api } from '@/api/api';
import Appear from '../components/appear';
import List from './list';

const getProducts = async () => {
    const res = await fetch(`${api}/products`)
    const data = await res.json()
    console.log(data)
    return data
}

const Page = async () => {

    const data = await getProducts()
    console.log(data)
    return (
        <Appear>
            <article>
                <h1 className='text-center text-3xl font-bold'>
                    <span className='border-b-4 border-org pb-2'>
                        ALL PRODUCTS
                    </span>
                </h1>
                <List data={data} />
            </article>
        </Appear>
    );
};

export default Page;
