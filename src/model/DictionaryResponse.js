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
import Dictionary from './Dictionary';
import DictionaryResponseAllOf from './DictionaryResponseAllOf';
import ServiceIdAndVersion from './ServiceIdAndVersion';
import Timestamps from './Timestamps';

/**
 * The DictionaryResponse model module.
 * @module model/DictionaryResponse
 * @version 15.0.0-beta.3
 */
class DictionaryResponse {
    /**
     * Constructs a new <code>DictionaryResponse</code>.
     * @alias module:model/DictionaryResponse
     * @implements module:model/Dictionary
     * @implements module:model/Timestamps
     * @implements module:model/ServiceIdAndVersion
     * @implements module:model/DictionaryResponseAllOf
     */
    constructor() { 
        Dictionary.initialize(this);Timestamps.initialize(this);ServiceIdAndVersion.initialize(this);DictionaryResponseAllOf.initialize(this);
        DictionaryResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>DictionaryResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DictionaryResponse} obj Optional instance to populate.
     * @return {module:model/DictionaryResponse} The populated <code>DictionaryResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DictionaryResponse();
            Dictionary.constructFromObject(data, obj);
            Timestamps.constructFromObject(data, obj);
            ServiceIdAndVersion.constructFromObject(data, obj);
            DictionaryResponseAllOf.constructFromObject(data, obj);

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('write_only')) {
                obj['write_only'] = ApiClient.convertToType(data['write_only'], 'Boolean');
            }
            if (data.hasOwnProperty('created_at')) {
                obj['created_at'] = ApiClient.convertToType(data['created_at'], 'Date');
            }
            if (data.hasOwnProperty('deleted_at')) {
                obj['deleted_at'] = ApiClient.convertToType(data['deleted_at'], 'Date');
            }
            if (data.hasOwnProperty('updated_at')) {
                obj['updated_at'] = ApiClient.convertToType(data['updated_at'], 'Date');
            }
            if (data.hasOwnProperty('service_id')) {
                obj['service_id'] = ApiClient.convertToType(data['service_id'], 'String');
            }
            if (data.hasOwnProperty('version')) {
                obj['version'] = ApiClient.convertToType(data['version'], 'Number');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Name for the Dictionary (must start with an alphabetic character and can contain only alphanumeric characters, underscores, and whitespace).
 * @member {String} name
 */
DictionaryResponse.prototype['name'] = undefined;

/**
 * Determines if items in the dictionary are readable or not.
 * @member {Boolean} write_only
 * @default false
 */
DictionaryResponse.prototype['write_only'] = false;

/**
 * Date and time in ISO 8601 format.
 * @member {Date} created_at
 */
DictionaryResponse.prototype['created_at'] = undefined;

/**
 * Date and time in ISO 8601 format.
 * @member {Date} deleted_at
 */
DictionaryResponse.prototype['deleted_at'] = undefined;

/**
 * Date and time in ISO 8601 format.
 * @member {Date} updated_at
 */
DictionaryResponse.prototype['updated_at'] = undefined;

/**
 * @member {String} service_id
 */
DictionaryResponse.prototype['service_id'] = undefined;

/**
 * @member {Number} version
 */
DictionaryResponse.prototype['version'] = undefined;

/**
 * @member {String} id
 */
DictionaryResponse.prototype['id'] = undefined;


// Implement Dictionary interface:
/**
 * Name for the Dictionary (must start with an alphabetic character and can contain only alphanumeric characters, underscores, and whitespace).
 * @member {String} name
 */
Dictionary.prototype['name'] = undefined;
/**
 * Determines if items in the dictionary are readable or not.
 * @member {Boolean} write_only
 * @default false
 */
Dictionary.prototype['write_only'] = false;
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
// Implement ServiceIdAndVersion interface:
/**
 * @member {String} service_id
 */
ServiceIdAndVersion.prototype['service_id'] = undefined;
/**
 * @member {Number} version
 */
ServiceIdAndVersion.prototype['version'] = undefined;
// Implement DictionaryResponseAllOf interface:
/**
 * @member {String} id
 */
DictionaryResponseAllOf.prototype['id'] = undefined;




export default DictionaryResponse;

