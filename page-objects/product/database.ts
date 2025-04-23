import { Client } from 'pg';
import { test, expect } from '@playwright/test'



export async function queryCategoryByProductName(productName){
    const client = new Client({
        user: 'kantaphit_ru',
        host: 'qa-postgres-database.c4b9rlzojrt0.ap-southeast-1.rds.amazonaws.com',
        database: 'product_db',
        password: 'G-71xz:KhDK6aY@U',
        port: 5432,
    });
    await client.connect();
    const res = await client.query(`select c.name,c.name_en,c.category_code from public.category c inner join public.product p on c.id = p.category_id 
    where p.name = '${productName}';`);
    const data = res.rows[0]
    await client.end();
    return data
}

export async function querySkuByProductId(productName){
    const client = new Client({
        user: 'kantaphit_ru',
        host: 'qa-postgres-database.c4b9rlzojrt0.ap-southeast-1.rds.amazonaws.com',
        database: 'product_db',
        password: 'G-71xz:KhDK6aY@U',
        port: 5432,
    });
    await client.connect();
    const res = await client.query(`select c.sku from public.product_variant c inner join public.product p on c.product_id  = p.id  
where p.name = '${productName}';`);
    const data = res.rows
    await client.end();
    return data
}



export async function verifyCategoryInDatabase(productName,category){
    const dbData = await queryCategoryByProductName(productName)
    const categoryName = dbData.name
    expect(categoryName).toEqual(category);
    return dbData
}

export async function getSKUProduct(productName){
    const dbData = await querySkuByProductId(productName)
    return dbData
}