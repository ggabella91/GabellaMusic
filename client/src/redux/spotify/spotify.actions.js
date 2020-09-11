import SpotifyActionTypes from './spotify.types';

export const markConnected = (latestRefresh, photo) => ({
  type: SpotifyActionTypes.MARK_CONNECTED,
  payload: { latestRefresh, photo },
});

export const connectFailure = (error) => ({
  type: SpotifyActionTypes.CONNECT_FAILURE,
  payload: error,
});

export const refreshAuthTokenStart = () => ({
  type: SpotifyActionTypes.REFRESH_AUTH_TOKEN_START,
});

export const refreshAuthTokenSuccess = (latestRefresh) => ({
  type: SpotifyActionTypes.REFRESH_AUTH_TOKEN_SUCCESS,
  payload: latestRefresh,
});

export const refreshAuthTokenFailure = (error) => ({
  type: SpotifyActionTypes.REFRESH_AUTH_TOKEN_FAILURE,
  payload: error,
});

export const checkConnection = () => ({
  type: SpotifyActionTypes.CHECK_CONNECTION,
});

export const fetchTopArtistsLongTermStart = (endpoint) => ({
  type: SpotifyActionTypes.FETCH_TOP_ARTISTS_LONG_TERM_START,
  payload: endpoint,
});

export const fetchTopArtistsMediumTermStart = (endpoint) => ({
  type: SpotifyActionTypes.FETCH_TOP_ARTISTS_MEDIUM_TERM_START,
  payload: endpoint,
});

export const fetchTopArtistsShortTermStart = (endpoint) => ({
  type: SpotifyActionTypes.FETCH_TOP_ARTISTS_SHORT_TERM_START,
  payload: endpoint,
});

export const fetchTopArtistsLongTermSuccess = (endpointData) => ({
  type: SpotifyActionTypes.FETCH_TOP_ARTISTS_LONG_TERM_SUCCESS,
  payload: endpointData,
});

export const fetchTopArtistsMediumTermSuccess = (endpointData) => ({
  type: SpotifyActionTypes.FETCH_TOP_ARTISTS_MEDIUM_TERM_SUCCESS,
  payload: endpointData,
});

export const fetchTopArtistsShortTermSuccess = (endpointData) => ({
  type: SpotifyActionTypes.FETCH_TOP_ARTISTS_SHORT_TERM_SUCCESS,
  payload: endpointData,
});

export const fetchTopArtistsFailure = (error) => ({
  type: SpotifyActionTypes.FETCH_TOP_ARTISTS_FAILURE,
  payload: error,
});

export const fetchTopTracksStart = (endpoint) => ({
  type: SpotifyActionTypes.FETCH_TOP_TRACKS_START,
  payload: endpoint,
});

export const fetchTopTracksSuccess = (endpointData) => ({
  type: SpotifyActionTypes.FETCH_TOP_TRACKS_SUCCESS,
  payload: endpointData,
});

export const fetchTopTracksFailure = (error) => ({
  type: SpotifyActionTypes.FETCH_TOP_TRACKS_FAILURE,
  payload: error,
});
