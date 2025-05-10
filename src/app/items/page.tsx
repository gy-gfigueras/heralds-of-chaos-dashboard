'use client';
import { Box } from '@mui/material';
import React, { useState, useEffect } from 'react';
import BackButton from '../components/atoms/BackButton';
import { useItems } from '@/hooks/useItems';
import { ItemCard } from '../components/atoms/ItemCard';
import ItemsFilter from '../components/atoms/ItemsFilter';
import Item from '@/domain/item';

export default function ItemsPage() {
    const { data, isLoading } = useItems();
    const [itemsFiltered, setItemsFiltered] = useState<Item[] | undefined>();

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value.toLowerCase();
        const filteredItems = data?.filter((item) =>
            item.name.toLowerCase().includes(value)
        );
        setItemsFiltered(filteredItems || []);
    };

    useEffect(() => {
        setItemsFiltered(data);
    }, [data]);

    if (isLoading) {
        return "Loading";
    }

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'start',
                height: '100vh',
                flexWrap: 'wrap',
                width: '100vw',
                paddingTop: ["72px", "64px",],
                gap: '1.5rem',
            }}
        >
            <BackButton path={'/'} />

            <ItemsFilter handleChange={handleChange} />

            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexWrap: 'wrap',
                    gap: '2rem',
                    overflowY: 'auto',
                    width: '90%',
                    height: ['80%', '67%', '70%'],
                    scrollbarColor: `#997A3E transparent`,
                    borderRadius: '30px',
                    zIndex: 2,
                    padding: '20px',
                }}
            >
                {itemsFiltered ? (
                    itemsFiltered.map((item) => (
                        <ItemCard
                            key={item.identifier}
                            id={item.identifier}
                            name={item.name}
                            image={item.image}
                            description={item.description}
                            type={item.type}
                        />
                    ))
                ) : (
                    <h1>Loading...</h1>
                )}
            </Box>
        </Box>
    );
}
