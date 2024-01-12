import { View } from 'react-native';
import React, { useMemo, useState } from 'react';
import { Stack } from 'expo-router';
import ExploreHeader from '@/components/ExploreHeader';
import Listings from '@/components/Listings';
import listingsData from '@/assets/data/airbnb-listings.json';
//import ListingsBottomSheet from '@/components/ListingsBottomSheet';
//import ListingsMap from '@/components/ListingsMap';
//import listingsDataGeo from '@/assets/data/airbnb-listings.geo.json';

const Page = () => {
  const items = useMemo(() => listingsData as any, []);
  //const getoItems = useMemo(() => listingsDataGeo, []);
  const [category, setCategory] = useState<string>('Casas Pequenas');

  const onDataChanged = (category: string) => {
    //console.log(category)
    setCategory(category);
  };
  return (
    <View style={{ flex: 1 }}>
      <Stack.Screen
        options={{
          header: () => <ExploreHeader onCategoryChanged={onDataChanged} />,
        }}
      />
      <Listings listings={items} category={category} />
      {/* Define pour custom header 
      /*<ListingsMap listings={getoItems} />
      <ListingsBottomSheet listings={items} category={category} />*/}
    </View>
  )
}

export default Page