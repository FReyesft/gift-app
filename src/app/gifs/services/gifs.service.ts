import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SearchResponse, Gif } from '../interfaces/gifs.interfaces'


@Injectable({ providedIn: 'root' })
export class GifsService {
	public gifsList: Gif[] = []
	private GIPHY_API_KEY = 'nyUBpwNFU1GomZ3bMh4BFhPSStVlzyRG'
	private GIPHY_API_URL = 'https://api.giphy.com/v1/gifs/'
	private _tagsHistory: string[] = []

	constructor(private http: HttpClient) { }

	get tagsHistory() {
		return [...this._tagsHistory];
	}

	private organizeHistory(tag: string) {
		tag = tag.toLowerCase();
		if (this._tagsHistory.includes(tag)) {
			this._tagsHistory = this._tagsHistory.filter((oldTag) => oldTag !== tag)
		}
		this._tagsHistory.unshift(tag);
		this._tagsHistory = this._tagsHistory.splice(0, 10);
		this.saveLocalStorage();
	}

	private saveLocalStorage(): void {
		localStorage.setItem('history', JSON.stringify(this._tagsHistory));
	}

	searchTag(tag: string): void {
		if (tag.length === 0) return;
		this.organizeHistory(tag);

		const params = new HttpParams()
			.set('api_key', this.GIPHY_API_KEY)
			.set('limit', '10')
			.set('q', tag)

		this.http.get<SearchResponse>(`${this.GIPHY_API_URL}search`, { params })
			.subscribe((response) => {
				this.gifsList = response.data
			})
	}
}