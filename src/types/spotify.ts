export interface SpotifyArtist {
  uri: string
  time_range: string
  external_urls: {
    spotify: string
  }
  images: {
    url: string
    width: number
    height: number
  }[]
  name: string
  popularity: string
}

interface ExternalUrls {
  spotify: string;
}

interface Artist {
  external_urls: ExternalUrls;
  href: string;
  id: string;
  name: string;
  type: string;
  uri: string;
}

interface Image {
  height: number;
  url: string;
  width: number;
}

interface Album {
  album_type: string;
  artists: Artist[];
  available_markets: any[];
  external_urls: ExternalUrls;
  href: string;
  id: string;
  images: Image[];
  name: string;
  release_date: string;
  release_date_precision: string;
  total_tracks: number;
  type: string;
  uri: string;
}

interface ExternalIds {
  isrc: string;
}

export interface SpotifyTrack {
  album: Album;
  artists: Artist[];
  available_markets: any[];
  disc_number: number;
  duration_ms: number;
  explicit: boolean;
  external_ids: ExternalIds;
  external_urls: ExternalUrls;
  href: string;
  id: string;
  is_local: boolean;
  name: string;
  popularity: number;
  preview_url?: any;
  track_number: number;
  type: string;
  uri: string;
}

export interface SpotifyContext {
  external_urls: ExternalUrls
  href: string
  type: string
  uri: string
}

export interface SpotifyCurrentPlaying {
  context: SpotifyContext | undefined
  item: SpotifyTrack
  timestamp: number
  progress_ms: number
  currently_playing_type: string
  actions: {
    disallows: {
      resuming: boolean
    }
  }
  is_playing: boolean
}
