import {createContext, ReactNode, useContext, useEffect, useState} from 'react';
import axios from 'axios';
import {log} from 'util';

type TechType = {
    id: string;
    images: string[];
    brand: string;
    title: string;
    info: string;
    category: string;
    finalPrice: string;
    originalPrice: string;
    quantity: string;
    gosNum: string;
};

type TechDataContextType = {
    techData: TechType[];
    loading: boolean;
    refreshTechData: () => void;
};

const TechDataContext = createContext<TechDataContextType | undefined>(undefined);

type TechDataProviderProps = {
    children: ReactNode; // Явное указание типа дочерних элементов
};

export const useTechData = () => {
    const context = useContext(TechDataContext);
    if (!context) {
        throw new Error('useTechData must be used within a TechDataProvider');
    }
    return context;
};
export const TechDataProvider: React.FC<TechDataProviderProps> = ({ children }) => {
    const [techData, setTechData] = useState<TechType[]>([]);
    const [loading, setLoading] = useState<boolean>(true);


    useEffect(() => {
      const fetchTechData = async () => {
            try {
                const response = await axios.get('/api/data/techniks');
                setTechData(response.data);
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        };
        fetchTechData();
    }, []);
    const refreshTechData = async () => {
        try {
            const response = await axios.get('/api/data/techniks');
            setTechData(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <TechDataContext.Provider value={{ techData, loading , refreshTechData}}>
    {children}
    </TechDataContext.Provider>
);
};
