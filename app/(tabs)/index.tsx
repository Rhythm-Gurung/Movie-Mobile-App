import MovieCard from '@/components/Cards';
import { icons } from '@/constants/icons';
import { images } from '@/constants/images';
import { fetchMovie, fetchTrendingMovies } from '@/services/api';
import useFetch from '@/services/useFetch';
import { useRouter } from 'expo-router';
import { ActivityIndicator, FlatList, Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import SearchBar from '../../components/SearchBar';

export default function App() {
  const router = useRouter();

  const {
    data: movies, 
    loading: moviesLoading, 
    error:moviesError} = useFetch(()=>fetchMovie({
    query:''
  }))

  const {
    data: trending,
    loading: trendingLoading,
    error: trendingError,
  } = useFetch(fetchTrendingMovies);

  return (
    <View className='flex-1 bg-primary'>
        <Image source={images.bg} className='absolute w-full z-0'/>
        <ScrollView className='flex-1 px-5'
          showsVerticalScrollIndicator= {false} 
          contentContainerStyle={{
            minHeight: "100%",
            paddingBottom: 10
        }}>
          <Image source={icons.logo} className='mt-20 mb-5 w-12 h-10 mx-auto '/>

          {moviesLoading ? (
            <ActivityIndicator 
              size="large"
              color="#0000ff"
              className="mt-10 self-center"
            />
          ): moviesError ? (
            <Text>Error: {moviesError?.message}</Text>
          ):(
            <View className='flex-1 mt-5'>
              <SearchBar 
                  onPress={() => router.push("/search")}
                  placeholder="Search for a movie" value={''} onChangeText={function (text: string): void {
                    throw new Error('Function not implemented.');
                  } }              />

              <View className='mt-8'>
                <View className='flex-row items-center justify-between mb-4'>
                  <Text className='text-lg text-white font-bold'>Trending Now</Text>
                  <Text className='text-accent text-xs font-semibold uppercase'>This Week</Text>
                </View>

                {trendingLoading && (
                  <ActivityIndicator size="small" color="#0000ff" />
                )}

                {trendingError && (
                  <Text className='text-red-500'>Failed to load trending titles.</Text>
                )}

                {!trendingLoading && !trendingError && (
                  <FlatList
                    horizontal
                    data={trending ?? []}
                    keyExtractor={(item) => item.id.toString()}
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={{ gap: 16 }}
                    renderItem={({ item }) => (
                      <TouchableOpacity
                        className='w-32'
                        onPress={() => router.push(`/movies/${item.id}`)}
                      >
                        <Image
                          source={{
                            uri: item.poster_path
                              ? `https://image.tmdb.org/t/p/w500${item.poster_path}`
                              : 'https://placehold.co/600x900/1a1a1a/ffffff.png',
                          }}
                          className='w-full h-48 rounded-3xl'
                          resizeMode='cover'
                        />
                        <Text className='text-white text-sm font-semibold mt-3' numberOfLines={1}>
                          {item.title}
                        </Text>
                        <Text className='text-light-300 text-xs mt-1'>{item.release_date?.split('-')[0]}</Text>
                      </TouchableOpacity>
                    )}
                  />
                )}
              </View>
              <>
                <Text className='text-lg text-white font-bold mt-5 mb-3'>Latest Movies</Text>

                <FlatList 
                  data={movies}
                  renderItem={({item})=>(
                    <MovieCard 
                    {...item}/>
                  )}
                  keyExtractor={(item)=> item.id.toString()}
                  numColumns={3}
                  columnWrapperStyle={{
                    justifyContent: 'flex-start',
                    gap: 20,
                    paddingRight: 5,
                    marginBottom: 10 
                  }}
                  className='mt-2 pd-32'
                  scrollEnabled= {false}
                />
              </>
            </View>
          )}
        </ScrollView>
    </View>
  );
}
