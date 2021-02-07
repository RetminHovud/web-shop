import { environment } from '../../../environments/environment';

export const API_ROUTE = {
    HOME: `${environment.apiUrl}/grocery`,
    FAVORITES: `${environment.apiUrl}/grocery?favorite=1`,
    STOCK(id: string): string {
        return`${environment.apiUrl}/grocery/:${id}`;
    } 
};
