import { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';
import {TechType} from '@/data/data';

const filePath = path.resolve('pages/api/data/techData.json'); // Путь к файлу данных

function readTechDataFromFile(): TechType[] {
    try {
        const data = fs.readFileSync(filePath, 'utf-8');
        return JSON.parse(data);
    } catch (error) {
        console.error('Error reading tech data from file:', error);
        return [];
    }
}

function writeTechDataToFile(data: TechType[]): void {
    try {
        fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
    } catch (error) {
        console.error('Error writing tech data to file:', error);
    }
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'GET') {
        const techData = readTechDataFromFile();
        res.status(200).json(techData);
    } else if (req.method === 'POST') {
        const newData = req.body;
        const techData = readTechDataFromFile();
        techData.push(newData);
        writeTechDataToFile(techData);
        res.status(201).json({ message: 'Data added successfully', data: newData });
    } else if (req.method === 'PUT') {
        const updatedData = req.body;
        const techData = readTechDataFromFile();
        const index = techData.findIndex(item => item.id === updatedData.id);
        if (index !== -1) {
            techData[index] = { ...techData[index], ...updatedData };
            writeTechDataToFile(techData);
            res.status(200).json({ message: 'Data updated successfully', data: techData[index] });
        } else {
            res.status(404).json({ message: 'Tech not found' });
        }
    } else {
        res.status(405).json({ message: 'Method Not Allowed' });
    }
}
