import { icons } from '@/constants/icons';
import { images } from '@/constants/images';
import React from 'react';
import { Image, ImageBackground, ScrollView, Text, View } from 'react-native';

const stats = [
  { label: 'Watched', value: '148' },
  { label: 'Watchlist', value: '32' },
  { label: 'Reviews', value: '21' },
];

const favoriteGenres = ['Sci-Fi', 'Action', 'Drama', 'Thriller'];

const spotlight = {
  title: 'Dune: Part Two',
  detail: 'Continue watching • 01:12:32 left',
  rating: '4.9',
};

const favorites = [
  { title: 'Interstellar', meta: '2014 • PG-13', rating: '4.8' },
  { title: 'Blade Runner 2049', meta: '2017 • R', rating: '4.6' },
  { title: 'Past Lives', meta: '2023 • PG-13', rating: '4.5' },
];

const Profile = () => {
  return (
    <View className='flex-1 bg-primary'>
      <Image source={images.bg} className='absolute w-full h-full z-0' resizeMode='cover' />

      <ScrollView
        className='flex-1 px-5'
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 32 }}
      >
        <Image source={icons.logo} className='w-12 h-10 self-center mt-20' />

        <View className='items-center mt-6'>
          <View className='size-28 items-center justify-center rounded-full border border-white/20 bg-white/10'>
            <Text className='text-4xl font-bold text-white'>RG</Text>
          </View>
          <Text className='text-white text-2xl font-bold mt-4'>Rhythm Gurung</Text>
          <Text className='text-light-300 mt-1'>Movie enthusiast • Kathmandu</Text>
        </View>

        <View className='mt-8 bg-white/5 rounded-3xl border border-white/10 p-5'>
          <Text className='text-sm uppercase tracking-[3px] text-light-200'>Activity</Text>
          <View className='flex-row justify-between mt-5'>
            {stats.map((item) => (
              <View key={item.label} className='items-center flex-1'>
                <Text className='text-white text-2xl font-bold'>{item.value}</Text>
                <Text className='text-light-200 text-xs mt-1'>{item.label}</Text>
              </View>
            ))}
          </View>
        </View>

        <View className='mt-6'>
          <Text className='text-white text-lg font-semibold mb-3'>Favorite Genres</Text>
          <View className='flex-row flex-wrap gap-3'>
            {favoriteGenres.map((genre) => (
              <View key={genre} className='bg-white/10 border border-white/15 px-4 py-2 rounded-full'>
                <Text className='text-white text-sm font-medium'>{genre}</Text>
              </View>
            ))}
          </View>
        </View>

        <View className='mt-8'>
          <Text className='text-white text-lg font-semibold mb-3'>Spotlight</Text>
          <ImageBackground
            source={images.highlight}
            className='w-full rounded-3xl overflow-hidden min-h-[180px] p-5'
            imageStyle={{ borderRadius: 28 }}
          >
            <View className='flex-1 justify-between'>
              <View>
                <Text className='text-lg text-white font-semibold'>{spotlight.title}</Text>
                <Text className='text-light-200 mt-2'>{spotlight.detail}</Text>
              </View>

              <View className='flex-row items-center justify-between mt-4'>
                <Text className='text-white font-semibold text-base'>Rating</Text>
                <View className='flex-row items-center'>
                  <Image source={icons.star} className='size-4 mr-1' />
                  <Text className='text-white text-lg font-bold'>{spotlight.rating}</Text>
                </View>
              </View>
            </View>
          </ImageBackground>
        </View>

        <View className='mt-8'>
          <View className='flex-row items-center justify-between mb-3'>
            <Text className='text-white text-lg font-semibold'>Favorites</Text>
            <Text className='text-accent text-sm font-medium'>See all</Text>
          </View>

          <View className='bg-white/5 border border-white/10 rounded-3xl'>
            {favorites.map((movie, index) => (
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

export default Profile;