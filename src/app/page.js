'use client';
import {
  Missions,
  ProductSection,
  References,
  Typography,
  ListFeatures,
  Hero,
  FeaturesV2,
} from 'ecommerce-mxtech';
import { MdOutlineArchitecture } from 'react-icons/md';
import { useRouter } from 'next/navigation';
import Footer from '@/components/organisms/Footer';
import Navbar from '@/components/organisms/Navbar';
import { useInformation } from '@/store/useInformation';
import { backgroundColor, primaryColor } from '@/data';

export default function Home() {
  const router = useRouter();
  const { dataSite } = useInformation();
  return (
    <main
      style={{
        backgroundColor: backgroundColor,
      }}
    >
      <Navbar />
      <Hero
        variant='background-img'
        src={dataSite.image_hero}
        withSubView
        title={dataSite.subtitle}
        description={dataSite.description}
        srcSecondary={dataSite.image_hero2}
        colorText={'#fff'}
        classNamePrincipalText='text-left '
        withShadowText
        styleSecondSection={{
          backgroundColor: primaryColor,
        }}
        isFixed
        contentThirdSection={
          <div className='flex flex-col px-24' id='mission'>
            <Typography.Title
              level={3}
              className='text-white font-medium mb-10 text-center'
              style={{
                zIndex: 1,
              }}
            >
              Nosotros
            </Typography.Title>
            <Missions
              data={dataSite.info}
              gridColumns={3}
              backgroundColor={primaryColor}
              borderRadius={10}
              variant='text'
              textColor='#fff'
            />
          </div>
        }
      />
      <div className='container mx-auto flex flex-col gap-20 my-24'>
        <div id='products' className='px-28'>
          {dataSite.products.length > 1 && (
            <ProductSection
              withTitles={false}
              gridColumns={3}
              variant='grid'
              productItemVariant='horizontal'
              onClickImage={(id) => {
                router.push(`/more-information`);
              }}
              stylesItem={{
                backgroundColor: primaryColor,
                borderRadius: 10,
              }}
              title='Nuestros Productos'
              withPrice={false}
              productVersion='4'
              carouselOptions={{
                backgroundColor: 'transparent',
                arrowColor: 'blue',
              }}
              buttonAdd={{
                className: 'hidden',
              }}
            />
          )}
        </div>
        <div className='flex flex-col' id='features'>
          <FeaturesV2
            features={dataSite.services.map((feature) => ({
              title: feature.title,
              description: feature.description,
              src: feature.image,
            }))}
            onClickButton={() => {
              router.push('/more-information');
            }}
            gridColumns={3}
            backgroundColor={primaryColor}
            borderRadius={10}
            variant='text'
            textColorDescription={primaryColor}
            version='v2'
          />
        </div>

        <div className='flex flex-col' id='references'>
          <Typography.Title level={3} className='font-medium mb-10 text-center'>
            Referencias
          </Typography.Title>
          <References
            carouselOptions={{
              arrowColor: 'black',
              fade: true,
              autoPlay: false,
              direction: 'horizontal',
            }}
            variantItem='card'
            variant='carousel'
            // backgroundColor={primaryColor}
            borderRadius={10}
            references={dataSite.references}
            gridColumns={3}
            titleAlign='center'
            textColor={primaryColor}
          />
        </div>
      </div>

      <Footer />
    </main>
  );
}
