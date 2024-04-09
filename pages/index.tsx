import {Main} from '@/layouts/sections/main/Main';
import {OurTechnics} from '@/layouts/sections/skils/ourTechnics';
import {Context, Social} from '@/context/Context';
import {social, tech} from '@/data/data';
import {Works} from '@/layouts/sections/works/Works';
import {Contacts} from '@/layouts/sections/contacts/contacts';
import {GlobalStyle} from '@/styles/GlobalStyled';
import React from 'react';
import Layout from '@/layouts/layout';
import {useRouter} from 'next/router';
import {TechDataProvider} from '@/data/techDataContext';
//
// export type TechType = {
//     id: number,
//     images: Array<string>,
//     brand: string,
//     title: string,
//     info: string,
//     category: string,
//     finalPrice: number,
//     originalPrice: number,
//     quantity: number,
//     gosNum: string,
// }

// export const getStaticProps:GetStaticProps = async (ctx) => {
//     const response = await fetch(`http://localhost:3000/api/data/techniks`)
//     const data = await response.json()
//     if (!data) {
//         return {
//             notFound: true
//         }
//     }
//     return {
//         props: {tech: data.data}
//     }
// }
//
// type Props = {
//     tech: TechType[];
// };
export default function Home() {
    const router = useRouter();
    return (
        <>
            <GlobalStyle/>
            <TechDataProvider>
                <Context.Provider value={tech}>
                    <Social.Provider value={social}>
                        {/*<Particle/>*/}
                        {/*<Header/>*/}
                        <Layout>
                            <Main/>
                            <OurTechnics/>
                            <Works/>
                            <Contacts/>
                        </Layout>
                        {/*<Footer/>*/}
                    </Social.Provider>
                </Context.Provider>
            </TechDataProvider>

        </>
    );
}
