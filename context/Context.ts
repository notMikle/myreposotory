import { createContext } from 'react';
import {social, SocialType, tech, TechType} from '../data/data';

export const Context = createContext<TechType[]>(tech);
export const Social = createContext<SocialType[]>(social)