/**
 * Fastly API
 * Via the Fastly API you can perform any of the operations that are possible within the management console,  including creating services, domains, and backends, configuring rules or uploading your own application code, as well as account operations such as user administration and billing reports. The API is organized into collections of endpoints that allow manipulation of objects related to Fastly services and accounts. For the most accurate and up-to-date API reference content, visit our [Developer Hub](https://developer.fastly.com/reference/api/) 
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
 * @version 3.0.0-beta3
 */
class Pop {
    /**
     * Constructs a new <code>Pop</code>.
     * @alias module:model/Pop
     */
    constructor() { 
        
        Pop.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
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
 * @member {String} code
 */
Pop.prototype['code'] = undefined;

/**
 * @member {String} name
 */
Pop.prototype['name'] = undefined;

/**
 * @member {String} group
 */
Pop.prototype['group'] = undefined;

/**
 * @member {module:model/PopCoordinates} coordinates
 */
Pop.prototype['coordinates'] = undefined;

/**
 * @member {String} shield
 */
Pop.prototype['shield'] = undefined;






export default Pop;

