import { createSlice } from '@reduxjs/toolkit';
import {
    faPuzzlePiece,
    faLayerGroup,
    faCube,
    faHandHoldingUsd,
    faIcons,
    faPalette,
    faStreetView, faStar, faShapes, faRocket
} from "@fortawesome/free-solid-svg-icons";

const initialState = {
    skills: [
        {id: 0, icon: faPuzzlePiece, title: 'UI/UX Design'},
        {id: 1, icon: faLayerGroup, title: 'Web Design'},
        {id: 2, icon: faCube, title: 'Website Development'},
        {id: 3, icon: faHandHoldingUsd, title: 'Ecommerce'},
        {id: 4, icon: faIcons, title: 'Social Media'},
        {id: 5, icon: faPalette, title: 'Graphic Design'},
    ],
    works: [
        {id: 0,icon: faStreetView, title: '1. Study and Analysis',
            description: 'Analisi dettagliata del business e degli obiettivi in modo da poter strutturare una strategia digital su misura.'},
        {id: 1, icon: faShapes, title: '3. Design and Development',
            description: 'Creazione e sviluppo del progetto con tecnologie moderne e verifica della funzionalità del risultato.'},
        {id: 2, icon: faStar, title: '2. Champion an Idea',
            description: 'Proposta e confronto. Il progetto in questo modo sarà unico, funzionale e facilmente fruibile dagli utenti.'},

        {id: 3, icon: faRocket, title: '4. Approval and Launch',
            description: 'Presentazione e revisione del prodotto finito. Consegna del progetto.'}
    ]
};

export const skillsSectionSlice = createSlice({
    name: 'skillsSection',
    initialState,
});

export default skillsSectionSlice.reducer;
