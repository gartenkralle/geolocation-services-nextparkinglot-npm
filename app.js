'use strict';

import { 
    getCollectionCore, 
    getDetailsCore 
} from '@geolocation-services/core-package'

export var getCollection = async function (latMin, latMax, lonMin, lonMax, density) {
    return await getCollectionCore('https://www.nextparkinglot.org', '8080', latMin, latMax, lonMin, lonMax, density);
};

export var getDetails = async function (id) {
    return await getDetailsCore('https://www.nextparkinglot.org', '8080', id);
};
