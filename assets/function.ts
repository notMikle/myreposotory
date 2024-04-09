import router from 'next/router';

export const handleBulldozerClick = () => {
    // При клике на иконку бульдозера осуществляем переход на страницу с фильтром для бульдозеров
    router.push('/techniks/park?category=bulldozers');
};
export const handleAllClick = () => {
    // При клике на иконку бульдозера осуществляем переход на страницу с фильтром для бульдозеров
    router.push('/techniks/park?category=all');
};
export const handleCraneClick = () => {
    // При клике на иконку бульдозера осуществляем переход на страницу с фильтром для бульдозеров
    router.push('/techniks/park?category=crane');
};
export const handleGusCraneClick = () => {
    // При клике на иконку бульдозера осуществляем переход на страницу с фильтром для бульдозеров
    router.push('/techniks/park?category=gusCrane');
};
export const handleTruckClick = () => {
    // При клике на иконку бульдозера осуществляем переход на страницу с фильтром для бульдозеров
    router.push('/techniks/park?category=truck');
};
export const handleExcavatorClick = () => {
    // При клике на иконку бульдозера осуществляем переход на страницу с фильтром для бульдозеров
    router.push('/techniks/park?category=excavator');
};
export const handleLiftClick = () => {
    // При клике на иконку бульдозера осуществляем переход на страницу с фильтром для бульдозеров
    router.push('/techniks/park?category=lift');
};
