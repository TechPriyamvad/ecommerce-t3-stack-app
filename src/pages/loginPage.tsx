import React from 'react';
import EcommerceHeader from '~/components/ecommerceHeader';
import EcommerceLogin from '~/components/ecommerceLogin';

const LoginPage: React.FC = () => {
    return (
        <div>
            <EcommerceHeader />
            <EcommerceLogin />
        </div>
    );
};

export default LoginPage;