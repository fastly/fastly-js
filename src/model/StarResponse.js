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
import Star from './Star';
import StarResponseAllOf from './StarResponseAllOf';

/**
 * The StarResponse model module.
 * @module model/StarResponse
 * @version 14.0.0
 */
class StarResponse {
    /**
     * Constructs a new <code>StarResponse</code>.
     * @alias module:model/StarResponse
     * @implements module:model/Star
     * @implements module:model/StarResponseAllOf
     */
    constructor() { 
        Star.initialize(this);StarResponseAllOf.initialize(this);
        StarResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>StarResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/StarResponse} obj Optional instance to populate.
     * @return {module:model/StarResponse} The populated <code>StarResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new StarResponse();
            Star.constructFromObject(data, obj);
            StarResponseAllOf.constructFromObject(data, obj);

            if (data.hasOwnProperty('data')) {
                obj['data'] = ApiClient.convertToType(data['data'], Object);
            }
        }
        return obj;
    }


}

/**
 * @member {Object} data
 */
StarResponse.prototype['data'] = undefined;


// Implement Star interface:
/**
 * @member {module:model/StarData} data
 */
Star.prototype['data'] = undefined;
// Implement StarResponseAllOf interface:
/**
 * @member {Object} data
 */
StarResponseAllOf.prototype['data'] = undefined;




export default StarResponse;

