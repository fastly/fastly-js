/**
 * Fastly API
 * Via the Fastly API you can perform any of the operations that are possible within the management console,  including creating services, domains, and backends, configuring rules or uploading your own application code, as well as account operations such as user administration and billing reports. The API is organized into collections of endpoints that allow manipulation of objects related to Fastly services and accounts. For the most accurate and up-to-date API reference content, visit our [Developer Hub](https://www.fastly.com/documentation/reference/api/) 
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: oss@fastly.com
 *
 * NOTE: This class is auto generated.
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import PopCoordinates from './PopCoordinates';

/**
 * The Pop model module.
 * @module model/Pop
 * @version 15.0.0-beta.2
 */
class Pop {
    /**
     * Constructs a new <code>Pop</code>.
     * @alias module:model/Pop
     * @param code {String} the three-letter code for the [POP](https://www.fastly.com/documentation/learning/concepts/pop/)
     * @param name {String} the name of the POP
     * @param group {String} 
     * @param region {module:model/Pop.RegionEnum} 
     * @param stats_region {module:model/Pop.StatsRegionEnum} the region used for stats reporting
     * @param billing_region {module:model/Pop.BillingRegionEnum} the region used for billing
     */
    constructor(code, name, group, region, stats_region, billing_region) { 
        
        Pop.initialize(this, code, name, group, region, stats_region, billing_region);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, code, name, group, region, stats_region, billing_region) { 
        obj['code'] = code;
        obj['name'] = name;
        obj['group'] = group;
        obj['region'] = region;
        obj['stats_region'] = stats_region;
        obj['billing_region'] = billing_region;
    }

    /**
     * Constructs a <code>Pop</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Pop} obj Optional instance to populate.
     * @return {module:model/Pop} The populated <code>Pop</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Pop();

            if (data.hasOwnProperty('code')) {
                obj['code'] = ApiClient.convertToType(data['code'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('group')) {
                obj['group'] = ApiClient.convertToType(data['group'], 'String');
            }
            if (data.hasOwnProperty('region')) {
                obj['region'] = ApiClient.convertToType(data['region'], 'String');
            }
            if (data.hasOwnProperty('stats_region')) {
                obj['stats_region'] = ApiClient.convertToType(data['stats_region'], 'String');
            }
            if (data.hasOwnProperty('billing_region')) {
                obj['billing_region'] = ApiClient.convertToType(data['billing_region'], 'String');
            }
            if (data.hasOwnProperty('coordinates')) {
                obj['coordinates'] = PopCoordinates.constructFromObject(data['coordinates']);
            }
            if (data.hasOwnProperty('shield')) {
                obj['shield'] = ApiClient.convertToType(data['shield'], 'String');
            }
        }
        return obj;
    }


}

/**
 * the three-letter code for the [POP](https://www.fastly.com/documentation/learning/concepts/pop/)
 * @member {String} code
 */
Pop.prototype['code'] = undefined;

/**
 * the name of the POP
 * @member {String} name
 */
Pop.prototype['name'] = undefined;

/**
 * @member {String} group
 */
Pop.prototype['group'] = undefined;

/**
 * @member {module:model/Pop.RegionEnum} region
 */
Pop.prototype['region'] = undefined;

/**
 * the region used for stats reporting
 * @member {module:model/Pop.StatsRegionEnum} stats_region
 */
Pop.prototype['stats_region'] = undefined;

/**
 * the region used for billing
 * @member {module:model/Pop.BillingRegionEnum} billing_region
 */
Pop.prototype['billing_region'] = undefined;

/**
 * @member {module:model/PopCoordinates} coordinates
 */
Pop.prototype['coordinates'] = undefined;

/**
 * the name of the [shield code](https://www.fastly.com/documentation/learning/concepts/shielding/#choosing-a-shield-location) if this POP is suitable for shielding
 * @member {String} shield
 */
Pop.prototype['shield'] = undefined;





/**
 * Allowed values for the <code>region</code> property.
 * @enum {String}
 * @readonly
 */
Pop['RegionEnum'] = {

    /**
     * value: "APAC"
     * @const
     */
    "APAC": "APAC",

    /**
     * value: "Asia"
     * @const
     */
    "Asia": "Asia",

    /**
     * value: "AF-West"
     * @const
     */
    "AF-West": "AF-West",

    /**
     * value: "EU-Central"
     * @const
     */
    "EU-Central": "EU-Central",

    /**
     * value: "EU-East"
     * @const
     */
    "EU-East": "EU-East",

    /**
     * value: "EU-West"
     * @const
     */
    "EU-West": "EU-West",

    /**
     * value: "MX-North"
     * @const
     */
    "MX-North": "MX-North",

    /**
     * value: "MX-Central"
     * @const
     */
    "MX-Central": "MX-Central",

    /**
     * value: "MX-South"
     * @const
     */
    "MX-South": "MX-South",

    /**
     * value: "Middle-East"
     * @const
     */
    "Middle-East": "Middle-East",

    /**
     * value: "North-America"
     * @const
     */
    "North-America": "North-America",

    /**
     * value: "SA-South"
     * @const
     */
    "SA-South": "SA-South",

    /**
     * value: "SA-East"
     * @const
     */
    "SA-East": "SA-East",

    /**
     * value: "SA-West"
     * @const
     */
    "SA-West": "SA-West",

    /**
     * value: "SA-North"
     * @const
     */
    "SA-North": "SA-North",

    /**
     * value: "South-Africa"
     * @const
     */
    "South-Africa": "South-Africa",

    /**
     * value: "South-America"
     * @const
     */
    "South-America": "South-America",

    /**
     * value: "US-Central"
     * @const
     */
    "US-Central": "US-Central",

    /**
     * value: "US-East"
     * @const
     */
    "US-East": "US-East",

    /**
     * value: "US-West"
     * @const
     */
    "US-West": "US-West",

    /**
     * value: "Asia-South"
     * @const
     */
    "Asia-South": "Asia-South"
};


/**
 * Allowed values for the <code>stats_region</code> property.
 * @enum {String}
 * @readonly
 */
Pop['StatsRegionEnum'] = {

    /**
     * value: "southamerica_std"
     * @const
     */
    "southamerica_std": "southamerica_std",

    /**
     * value: "africa_std"
     * @const
     */
    "africa_std": "africa_std",

    /**
     * value: "anzac"
     * @const
     */
    "anzac": "anzac",

    /**
     * value: "asia"
     * @const
     */
    "asia": "asia",

    /**
     * value: "europe"
     * @const
     */
    "europe": "europe",

    /**
     * value: "usa"
     * @const
     */
    "usa": "usa",

    /**
     * value: "asia_india"
     * @const
     */
    "asia_india": "asia_india",

    /**
     * value: "asia_southkorea"
     * @const
     */
    "asia_southkorea": "asia_southkorea",

    /**
     * value: "mexico"
     * @const
     */
    "mexico": "mexico"
};


/**
 * Allowed values for the <code>billing_region</code> property.
 * @enum {String}
 * @readonly
 */
Pop['BillingRegionEnum'] = {

    /**
     * value: "Africa"
     * @const
     */
    "Africa": "Africa",

    /**
     * value: "Australia"
     * @const
     */
    "Australia": "Australia",

    /**
     * value: "Asia"
     * @const
     */
    "Asia": "Asia",

    /**
     * value: "Europe"
     * @const
     */
    "Europe": "Europe",

    /**
     * value: "India"
     * @const
     */
    "India": "India",

    /**
     * value: "Mexico"
     * @const
     */
    "Mexico": "Mexico",

    /**
     * value: "North America"
     * @const
     */
    "North America": "North America",

    /**
     * value: "South Korea"
     * @const
     */
    "South Korea": "South Korea",

    /**
     * value: "South America"
     * @const
     */
    "South America": "South America"
};



export default Pop;

