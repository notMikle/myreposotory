import React, {MouseEventHandler, useEffect, useState} from 'react';
import {useTechData} from '@/data/techDataContext';
import {useRouter} from 'next/router';
import Layout from '@/layouts/layout';
import {NavBar} from '@/layouts/sections/navBar/NavBar';
import {FlexWrapper} from '@/components/FlexWrapper';
import Link from 'next/link';
import styled from 'styled-components';
import Image from 'next/image';
import {updateTechData} from '@/data/updateData';
import {EditableSpan} from '@/components/editableSpan/editableSpan';


const Zmm = () => {
    const {techData, loading, refreshTechData} = useTechData();
    const router = useRouter();
    const {category} = router.query;
    const [updatedData, setUpdatedData] = useState(null);

    // const newTech = category === 'all' ? techData : techData.filter(el => el.category === category)
    // const [newTech, setNewTech] = useState(techData);
    const handleTitleClick = async (id: string, newValue: string) => {
        try {
            const updatedData = await updateTechData(id, { title: newValue });
            console.log('Tech data updated:', updatedData);
            setUpdatedData(updatedData);
        } catch (error) {
            console.error('Error updating tech data:', error);
        }
    };
    const handlePriceClick = async (id: string, newValue: string) => {
        try {
            const updatedData = await updateTechData(id, { originalPrice: Number(newValue) });
            console.log('Tech data updated:', updatedData);
            setUpdatedData(updatedData);
        } catch (error) {
            console.error('Error updating tech data:', error);
        }
    };
    useEffect(() => {
        if (updatedData) {
            refreshTechData(); // Вызываем функцию обновления данных
            setUpdatedData(null);
        }
    }, [updatedData]);

    return (
        <Layout>
            <StyledMain>
                {/*<NavBar/>*/}
                <FlexWrapper direction={'column'} gap={'15px'}>
                    {techData.map(el => <div key={el.id}>
                        <CardDiv className="card">
                            {/*<Link href={`/techniks/${el.id}`} key={el.id}>*/}
                            <FlexWrapper justify={'space-between'} wrap={'wrap'} padding={'10px 30px'}>
                                <StyledImage src={el.images[0]} alt={el.title} width={300} height={200}/>
                                <Description>
                                    <EditableSpan onChange={(newValue) => handleTitleClick(el.id, newValue)} value={el.title}>

                                    </EditableSpan><EditableSpan onChange={(newValue) => handlePriceClick(el.id, newValue)} value={el.originalPrice}></EditableSpan>
                                </Description>
                            </FlexWrapper>
                            {/*</Link>*/}
                        </CardDiv>
                    </div>)}
                </FlexWrapper>
            </StyledMain>
        </Layout>
    );
};
export default Zmm
export const StyledMain = styled.section`
  margin-top: 50px;
  min-height: 100vh;
`
export const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
`
export const Description = styled.div`
  width: 200px;
  text-align: right;
  //display: flex;
  //flex-direction: column;
  //justify-content: center;
`
export const CardDiv = styled.div`
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.05);
  border-radius: 40px;
  transition: 0.3s;
  margin-left: 200px;
  display: flex;
  flex-direction: column;
  padding: 10px 0;

  &:hover {
    transform: scale(1.02);
  }
`
export const StyledImage = styled(Image)`
  border-radius: 30px;
`