import React from 'react';
import FormС from '@/components/atoms/Form';
import YaMap from '@/components/atoms/YaMap';
import Layout from '@/components/layouts/Layout';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import Story from '@/components/Story';
import Houses from '@/components/Houses';
import News from '@/components/News';
import Spa from '@/components/Spa';
import BigText from '@/components/BigText';
import ScandLux from '@/components/ScandLux';
import Docs from '@/components/Docs';
import Timeline from '@/components/Timeline';
import Characteristics from '@/components/Characteristics';
import VideoBlock from '@/components/VideoBlock';
import Map from '@/components/Map';
import Head from 'next/head';
import findImageUrl from '@/components/utils/findImageUrl';

const storyItems = [
    {
        src: '/images/hram.jpg',
        text: 'Истринский район известен как один из крупнейших культурных и духовных центров в области. В нем сосредоточено большое количество храмов, монастырей и объектов истории.',
        subtitle: 'Истринский район'
    },
    {
        src: '/images/p_v10.jpg',
        text: 'Территория поселка граничит с красивым, благоустроенным парком, в котором оборудованы беговые и велосипедные дорожки, беседки для отдыха, площадка для выгула собак. На территории парка озеро. Жители поселка имеют свой выход в парк.',
        subtitle: 'Собственный парк'
    },
]

export async function getServerSideProps(context) {
    const res = await fetch(`${process.env.API_LINK}/api/main-page/?slug=&populate=deep,20&populate=image`);
    const mainData = await res.json();

    return {
      props: { 
            mainData
        },
    };

}

export default function Index (props) {

    const metaDescription = props?.mainData?.data?.attributes?.SEO?.metaDescription
    const metaImageUrl = findImageUrl(props?.mainData?.data?.attributes?.SEO?.metaImage, 'url')
    const metaTitle = props?.mainData?.data?.attributes?.SEO?.metaTitle
    
    const structuredData = JSON.stringify(props?.mainData?.data?.attributes?.SEO?.structuredData)

    return (
        <>
            <Head>
                <meta property="og:locale" content='ru_RU'/>
                {metaTitle && <>
                <meta property="og:title" content={metaTitle}/>
                <title>{metaTitle}</title></>}
                {metaDescription && <>
                <meta property="og:description" content={metaDescription}/>
                <meta name="description" content={metaDescription}/>
                <meta property="twitter:description" content={metaDescription}/></>}
                {props?.mainData?.data?.attributes?.SEO?.metaImage.data && <>
                <meta property="og:image:alt" content={metaImageUrl}/>
                <meta property="og:image" content={metaImageUrl}/>
                <meta name="twitter:image" content={metaImageUrl}/>
                <meta property="vk:image" content={metaImageUrl}/></>}
                <meta property="og:type" content="website"/>
                <meta name="twitter:card" content="summary_large_image"/>
                {props?.mainData?.data?.attributes?.SEO?.keywords && <meta name="keywords" content={`${props?.mainData?.data?.attributes?.SEO?.keywords}`}/>}
                {props?.mainData?.data?.attributes?.SEO?.canonicalURL && <link rel="canonical" href={`${props?.mainData?.data?.attributes?.SEO?.canonicalURL}`}/>}
                {props?.mainData?.data?.attributes?.SEO?.metaRobots && <meta name="robots" content={props?.mainData?.data?.attributes?.SEO?.metaRobots} />}
                {props?.mainData?.data?.attributes?.SEO?.structuredData && <script type="application/ld+json">{structuredData}</script>}
            </Head>
            <Layout>
                <Header props={props?.mainData?.data?.attributes?.Header}/>
                <HeroSection props={props?.mainData?.data?.attributes?.HeroSection}/>
                <Story type={8} storyItems={storyItems} props={props?.mainData?.data?.attributes?.Story}/>
                <Characteristics props={props?.mainData?.data?.attributes?.Characteristics}/>
                <Spa props={props?.mainData?.data?.attributes?.Spa}/>
                <Map />
                <Houses props={props?.mainData?.data?.attributes?.Projects}/>
                <ScandLux props={props?.mainData?.data?.attributes?.ScandLux}/>
                <VideoBlock link="https://www.youtube.com/embed/Lev19PvXibg"/>
                <Timeline props={props?.mainData?.data?.attributes?.Timeline}/>
                <News props={props?.mainData?.data?.attributes?.News}/>
                <FormС />
                <Docs />
                <BigText props={props?.mainData?.data?.attributes?.BigText}/>
                <YaMap />
            </Layout>
        </>
    )
}