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

/**
 * The PoolResponsePostAllOf model module.
 * @module model/PoolResponsePostAllOf
 * @version 8.0.0
 */
class PoolResponsePostAllOf {
    /**
     * Constructs a new <code>PoolResponsePostAllOf</code>.
     * @alias module:model/PoolResponsePostAllOf
     */
    constructor() { 
        
        PoolResponsePostAllOf.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PoolResponsePostAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PoolResponsePostAllOf} obj Optional instance to populate.
     * @return {module:model/PoolResponsePostAllOf} The populated <code>PoolResponsePostAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PoolResponsePostAllOf();

            if (data.hasOwnProperty('quorum')) {
                obj['quorum'] = ApiClient.convertToType(data['quorum'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * Percentage of capacity (`0-100`) that needs to be operationally available for a pool to be considered up.
 * @member {Number} quorum
 * @default 75
 */
PoolResponsePostAllOf.prototype['quorum'] = 75;






export default PoolResponsePostAllOf;

