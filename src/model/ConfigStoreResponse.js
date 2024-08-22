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
import ConfigStore from './ConfigStore';
import ConfigStoreResponseAllOf from './ConfigStoreResponseAllOf';
import Timestamps from './Timestamps';

/**
 * The ConfigStoreResponse model module.
 * @module model/ConfigStoreResponse
 * @version 7.8.0
 */
class ConfigStoreResponse {
    /**
     * Constructs a new <code>ConfigStoreResponse</code>.
     * @alias module:model/ConfigStoreResponse
     * @implements module:model/Timestamps
     * @implements module:model/ConfigStore
     * @implements module:model/ConfigStoreResponseAllOf
     */
    constructor() { 
        Timestamps.initialize(this);ConfigStore.initialize(this);ConfigStoreResponseAllOf.initialize(this);
        ConfigStoreResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ConfigStoreResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ConfigStoreResponse} obj Optional instance to populate.
     * @return {module:model/ConfigStoreResponse} The populated <code>ConfigStoreResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ConfigStoreResponse();
            Timestamps.constructFromObject(data, obj);
            ConfigStore.constructFromObject(data, obj);
            ConfigStoreResponseAllOf.constructFromObject(data, obj);

            if (data.hasOwnProperty('created_at')) {
                obj['created_at'] = ApiClient.convertToType(data['created_at'], 'Date');
            }
            if (data.hasOwnProperty('deleted_at')) {
                obj['deleted_at'] = ApiClient.convertToType(data['deleted_at'], 'Date');
            }
            if (data.hasOwnProperty('updated_at')) {
                obj['updated_at'] = ApiClient.convertToType(data['updated_at'], 'Date');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Date and time in ISO 8601 format.
 * @member {Date} created_at
 */
ConfigStoreResponse.prototype['created_at'] = undefined;

/**
 * Date and time in ISO 8601 format.
 * @member {Date} deleted_at
 */
ConfigStoreResponse.prototype['deleted_at'] = undefined;

/**
 * Date and time in ISO 8601 format.
 * @member {Date} updated_at
 */
ConfigStoreResponse.prototype['updated_at'] = undefined;

/**
 * The name of the config store.
 * @member {String} name
 */
ConfigStoreResponse.prototype['name'] = undefined;

/**
 * An alphanumeric string identifying the config store.
 * @member {String} id
 */
ConfigStoreResponse.prototype['id'] = undefined;


// Implement Timestamps interface:
/**
 * Date and time in ISO 8601 format.
 * @member {Date} created_at
 */
Timestamps.prototype['created_at'] = undefined;
/**
 * Date and time in ISO 8601 format.
 * @member {Date} deleted_at
 */
Timestamps.prototype['deleted_at'] = undefined;
/**
 * Date and time in ISO 8601 format.
 * @member {Date} updated_at
 */
Timestamps.prototype['updated_at'] = undefined;
// Implement ConfigStore interface:
/**
 * The name of the config store.
 * @member {String} name
 */
ConfigStore.prototype['name'] = undefined;
// Implement ConfigStoreResponseAllOf interface:
/**
 * An alphanumeric string identifying the config store.
 * @member {String} id
 */
ConfigStoreResponseAllOf.prototype['id'] = undefined;




export default ConfigStoreResponse;

