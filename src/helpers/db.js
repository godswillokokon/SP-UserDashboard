import localforage from "localforage";

const Storage = localforage;
Storage.config({
	driver: localforage.LOCALSTORAGE,
	version: 0.1,
	storeName: "Spread Pro",
	description: "Spread Properties",
});

export default Storage;
