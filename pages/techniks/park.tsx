import {useRouter} from 'next/router';
import Layout from '@/layouts/layout';
import Link from 'next/link';
import styled from 'styled-components';
import {FlexWrapper} from '@/components/FlexWrapper';
import Image from 'next/image';
import {NavBar} from '@/layouts/sections/navBar/NavBar';
import {useTechData} from '@/data/techDataContext';

const Park = () => {
    const {techData, loading} = useTechData();
    const router = useRouter();
    const {category} = router.query;
    const newTech = category === 'all' ? techData : techData.filter(el => el.category === category)

    return (
            <Layout>
                <StyledMain>
                    <NavBar/>
                    <FlexWrapper direction={'column'} gap={'15px'}>
                        {newTech.map(el => <div key={el.id}>
                            <CardDiv className="card">
                                <Link href={`/techniks/${el.id}`} key={el.id}>
                                    <FlexWrapper justify={'space-between'} wrap={'wrap'} padding={'10px 30px'}>
                                        <StyledImage src={el.images[0]} alt={el.title} width={300} height={200}/>
                                        <Description>
                                            <h2>{el.title}</h2>
                                            <p>{el.originalPrice}</p>
                                        </Description>
                                    </FlexWrapper>
                                </Link>
                            </CardDiv>
                        </div>)}
                    </FlexWrapper>
                </StyledMain>
            </Layout>
    );
};
export default Park
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