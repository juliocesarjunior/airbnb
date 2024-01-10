import { View, Text } from 'react-native';
import React, { useEffect, useState } from 'react';

interface Props {
    listings: any[];
    refresh: number;
    category: string;
}

const Listings = ({ listings: items, refresh, category }: Props) => {
    //const listRef = useRef<BottomSheetFlatListMethods>(null);

    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        if (refresh) {
            scrollListTop();
        }
    }, [refresh]);

    const scrollListTop = () => {
        //listRef.current?.scrollToOffset({ offset: 0, animated: true });
    };

    useEffect(() => {
        setLoading(true);

        setTimeout(() => {
            setLoading(false);
        }, 200);
    }, [category]);
    return (
        <View>
            <Text>Listing</Text>
        </View>
    )
}

export default Listings