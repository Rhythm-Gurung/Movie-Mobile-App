import { icons } from '@/constants/icons';
import { images } from '@/constants/images';
import React from 'react';
import { Image, ImageBackground, ScrollView, Text, View } from 'react-native';

const continueWatching = [
  {
    title: 'The Killer',
    progress: '58 min left',
    still:
      'https://image.tmdb.org/t/p/w500/fhTMWF83w6pruUwDMJvsVQUqqlE.jpg',
  },
  {
    title: 'Spider-Man: Across the Spider-Verse',
    progress: '32 min left',
    still:
      'https://image.tmdb.org/t/p/w500/8Vt6mWEReuy4Of61Lnj5Xj704m8.jpg',
  },
];

const savedCollections = [
  { name: 'Award Contenders', count: '12 films', color: 'from-[#1F1C2C] to-[#928DAB]' },
  { name: 'Cozy Weekend', count: '9 films', color: 'from-[#3E5151] to-[#DECBA4]' },
];

const quickPicks = [
  { title: 'Poor Things', meta: '2023 • R • 2h 21m', rating: '4.7' },
  { title: 'Aftersun', meta: '2022 • PG-13 • 1h 42m', rating: '4.6' },
  { title: 'The Holdovers', meta: '2023 • R • 2h 13m', rating: '4.5' },
  { title: 'Barbie', meta: '2023 • PG-13 • 1h 54m', rating: '4.3' },
];

const Saved = () => {
  return (
    <View className='flex-1 bg-primary'>
      <Image source={images.bg} className='absolute w-full h-full z-0' resizeMode='cover' />

      <ScrollView
        className='flex-1 px-5'
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 32 }}
      >
        <Image source={icons.logo} className='w-12 h-10 self-center mt-20' />

        <View className='mt-6'>
          <Text className='text-3xl text-white font-bold'>Saved List</Text>
          <Text className='text-light-300 mt-2'>Keep track of what you love and what to watch next.</Text>
        </View>

        <View className='mt-8'>
          <View className='flex-row items-center justify-between mb-4'>
            <Text className='text-white text-lg font-semibold'>Continue Watching</Text>
            <Text className='text-accent text-sm font-medium'>Resume all</Text>
          </View>

          <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ gap: 16 }}>
            {continueWatching.map((item) => (
              <ImageBackground
                key={item.title}
                source={{ uri: item.still }}
                className='w-60 h-48 rounded-3xl overflow-hidden p-4'
                imageStyle={{ borderRadius: 24 }}
              >
                <View className='flex-1 justify-end bg-black/30 rounded-2xl p-4'>
                  <Text className='text-white font-semibold text-lg'>{item.title}</Text>
                  <Text className='text-light-200 text-xs mt-2'>{item.progress}</Text>
                </View>
              </ImageBackground>
            ))}
          </ScrollView>
        </View>

        <View className='mt-8'>
          <Text className='text-white text-lg font-semibold mb-4'>Collections</Text>

          <View className='gap-4'>
            {savedCollections.map((collection) => (
              <ImageBackground
                key={collection.name}
                source={images.rankingGradient}
                className='rounded-3xl overflow-hidden p-5'
                imageStyle={{ borderRadius: 28 }}
              >
                <View className='bg-black/30 rounded-2xl p-4'>
                  <Text className='text-white text-xl font-semibold'>{collection.name}</Text>
                  <Text className='text-light-200 mt-2'>{collection.count}</Text>
                </View>
              </ImageBackground>
            ))}
          </View>
        </View>

        <View className='mt-8'>
          <View className='flex-row items-center justify-between mb-3'>
            <Text className='text-white text-lg font-semibold'>Quick Picks</Text>
            <Text className='text-accent text-sm font-medium'>Filter</Text>
          </View>

          <View className='bg-white/5 border border-white/10 rounded-3xl'>
            {quickPicks.map((movie, index) => (
              <View
                key={movie.title}
                className='flex-row items-center justify-between px-5 py-4'
                style={{ borderTopWidth: index === 0 ? 0 : 1, borderTopColor: 'rgba(255, 255, 255, 0.1)' }}
              >
                <View>
                  <Text className='text-white font-semibold'>{movie.title}</Text>
                  <Text className='text-light-200 text-xs mt-1'>{movie.meta}</Text>
                </View>

                <View className='flex-row items-center'>
                  <Image source={icons.star} className='size-4 mr-1' />
                  <Text className='text-white font-semibold'>{movie.rating}</Text>
                </View>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Saved;