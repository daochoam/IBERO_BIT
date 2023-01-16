export type Weather = 'sunny' | 'rainy' | 'cloudy' | 'windy' | 'stormy'
export type Visibility = 'good' | 'bad' | 'great' | 'poor' | 'ok'

export interface DataEntry{
    id: number;
    date: string;
    weather: Weather;
    visibility: Visibility;
    comment: string;
}

// Utility Type:
export type DataEntry_NoComment = DataEntry<Omit, 'comment'>;
