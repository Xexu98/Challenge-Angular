export interface TvDiscover {
    page:          number;
    results:       TvResult[];
    total_pages:   number;
    total_results: number;
}

export interface TvResult {
    backdrop_path:     null | string;
    first_air_date:    Date;
    genre_ids:         number[];
    id:                number;
    name:              string;
    origin_country:    string[];
    original_language: string;
    original_name:     string;
    overview:          string;
    popularity:        number;
    poster_path:       null | string;
    vote_average:      number;
    vote_count:        number;
}
