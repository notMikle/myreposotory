import React, {useState} from 'react';
import {useRouter} from 'next/router';
import Image from 'next/image';
import Layout from '@/layouts/layout';
import {FlexWrapper} from '@/components/FlexWrapper';
import styled from 'styled-components';
import {Button} from '@/components/Button';
import {FaLongArrowAltLeft} from 'react-icons/fa';
import {Slider} from '@/components/PriceSlider';
import {EditableSpan} from '@/components/editableSpan/editableSpan';
import RhfWithAction from '@/components/form/Form';
import {useTechData} from '@/data/techDataContext';


const Tech = () => {
    const [rangeValue, setRangeValue] = useState([0, 0])
    const handleValueChange = (newValue: number[]) => {
        setRangeValue(newValue);
    };
    const changeTodolistTitleCallback = (title: string) => {
        setRangeValue([0, Number(title)]);
    };

    const router = useRouter()
    const goBack = () => {
        router.back();
    };
    const [finalPrice, setFinalPrice] = useState(0)
    const [showModal, setShowModal] = useState(false)
    const handleOverlayClick = (event: React.MouseEvent<HTMLDivElement>) => {
        if (event.target === event.currentTarget) { // Проверяем, что клик произошел именно на overlay
            setShowModal(false);
        }
    };
    const techId = router.query.id
    const {techData, loading} = useTechData();
    let elem = techData.find(el => el.id === techId)
    if (elem) {
        return (
            <Layout>
                {showModal &&
                    <ModalWindow onClick={handleOverlayClick}>
                        <InputGroup>
                            <CloseButton onClick={() => setShowModal(false)}>x</CloseButton>
                            <RhfWithAction/>
                        </InputGroup>
                    </ModalWindow>
                }
                <StyledDivButtonBack>
                    <Button onClick={goBack}>
                        <FaLongArrowAltLeft></FaLongArrowAltLeft>
                        <span>Назад</span>
                    </Button>
                </StyledDivButtonBack>
                <FlexWrapper justify={'space-between'} align={'center'} gap={'200px'}>
                    <Image src={elem.images[0]} alt={''} width={620} height={450}/>
                    <FlexWrapper direction={'column'} align={'end'} justify={'center'}>
                        <h2>
                            {elem.title}
                        </h2>
                        <span>Марка: {elem.brand}</span>
                        <span>Кол-во: {elem.quantity}</span>
                        <span>Цена: от {elem.finalPrice}р</span>
                        <Slider onValueChange={handleValueChange} value={rangeValue} max={30}></Slider>
                        <span>Кол-во смен:
                                        <EditableSpan value={rangeValue?.[1].toString()}
                                                      onChange={changeTodolistTitleCallback}></EditableSpan>
                        </span>
                        <span>
                                        Итого:{rangeValue[1] * Number(elem.finalPrice)}
                        </span>
                        <Button onClick={() => setShowModal(!showModal)}>
                            Арендовать
                        </Button>
                    </FlexWrapper>
                </FlexWrapper>
                <span>{elem.info}</span>
            </Layout>
        );
    }
};

export default Tech;
export const StyledDivButtonBack = styled.div`
  margin-top: 70px;
  padding: 40px 0;
`
export const ModalWindow = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`

export const InputGroup = styled.div`
  position: relative;
  background-color: white;
  width: 400px;
  padding: 20px;
  border-radius: 5px;
`
export const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  color: black;
  border: none;
  cursor: pointer;
`