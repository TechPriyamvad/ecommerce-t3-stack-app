import React from 'react';
import EcommerceCategories from '~/components/ecommerceCategories';
import EcommerceHeader from '~/components/ecommerceHeader';

const CategoriesPage: React.FC = () => {
    return (
        <>
        <EcommerceHeader />
        <EcommerceCategories />
        </>
    );
};

export default CategoriesPage;