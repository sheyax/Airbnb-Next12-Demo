
import Head from 'next/head'
import Image from 'next/image'
import Header from '../Components/Header'
import Banner from '../Components/Banner'
import Footer from '../Components/Footer'
import response from '../response.json'
import SmallCard from '../Components/SmallCard'
import responseCard from '../responseCard.json'
import MediumCard from '../Components/MediumCard'
import LargeCard from '../Components/LargeCard'

const Home = () => {
  return (
    <div>
      <Head>
        <title>Next 12 Airbnb demo</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Header */}
      <Header/>

    {/* Banner */}
    <Banner/>

<main className='max-w-7xl mx-auto px-8 sm:px-16'>

  <section>
    <h2 className='text-4xl font-semibold pb-5 pt-6'>Explore Places</h2>

    {/* pull data and render */}
    <div>
      {response?.map((item)=> (
        <div className='grid grid-cols-1 sm:grid-cols-2 
        lg:grid-cols-3 xl:grid-cols-4'>
          <SmallCard key={item.img} 
          img={item.img}
          distance={item.distance}
          location={item.location}/>
        </div>
      ))}
    </div>
  </section>

{/* Middle cards */}
  <section>
<h2 className="text-4xl font-semibold py-8">Live Anywhere</h2>
<div className="flex space-x-3 overflow-scroll scrollbar-hide p-3 ml-3">
  {responseCard?.map((item)=> (
<MediumCard key={item.img} img={item.img} title={item.title}/>
  ))}
</div>
  </section>

    {/* Large Card */}

    <LargeCard
    img='https://links.papareact.com/4cj'
    title='The Greatest Outdoors'
    description='Wishlists curated by Airbnb'
    buttonText='Get Inspired'/>

</main>
    
  
      

   {/* footer */}
   <Footer/>
    </div>
  )
}

export default Home


// export async function getStaticProps(){
// const exploreData = await  fetch('https://links.papareact.com/pyp')
// .then(
//   (res)=> res.json()
// );

// //console.log(exploreData)


// const cardsData= await fetch('https://links.papareact.com/zp1').then(res => res.json())
// return {
//   props:{
//     exploreData: exploreData,
//     cardsData: cardsData
//   }
// }
// }