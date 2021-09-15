import { get, post } from "./http";
//搜索组件
export const getSuggest = () => get("search/hot");
export const getTyping = (params) => get("search", params);

export const getSearch = (data) => post("search", data);
//轮播图组件
export const getBanner = () => get("banner");
//歌单组件
export const getTags = () => get("/playlist/highquality/tags");
export const getHighquality = (params) =>
  get("/top/playlist/highquality", params);
export const getList = (params) => get("/top/playlist", params);
export const getPlaylistDetail = (params) => get("/playlist/detail", params);

export const getSongDetail = (params) => get("/song/detail", params);
//歌组件
export const getAlbum = () => get("/top/song?type=7");
export const checkAlbum = (params) => get("/check/music",params);

