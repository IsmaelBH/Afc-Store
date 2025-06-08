import React from 'react';
import { useSelector } from 'react-redux';
import AuthNavigator from './AuthNavigator';
import AppNavigator from './AppNavigator';
import { RootState } from '../redux/store';

const RootNavigation = () => {
    const user = useSelector((state: RootState) => state.auth);

    return user?.idToken ? <AppNavigator /> : <AuthNavigator />;
};

export default RootNavigation;
