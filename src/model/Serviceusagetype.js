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
 * The Serviceusagetype model module.
 * @module model/Serviceusagetype
 * @version 15.0.0
 */
class Serviceusagetype {
    /**
     * Constructs a new <code>Serviceusagetype</code>.
     * @alias module:model/Serviceusagetype
     */
    constructor() { 
        
        Serviceusagetype.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Serviceusagetype</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Serviceusagetype} obj Optional instance to populate.
     * @return {module:model/Serviceusagetype} The populated <code>Serviceusagetype</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Serviceusagetype();

            if (data.hasOwnProperty('product_id')) {
                obj['product_id'] = ApiClient.convertToType(data['product_id'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
        }
        return obj;
    }


}

/**
 * The product identifier associated with the usage type. This corresponds to a Fastly product offering.
 * @member {String} product_id
 */
Serviceusagetype.prototype['product_id'] = undefined;

/**
 * Full name of the product usage type as it might appear on a customer's invoice.
 * @member {String} name
 */
Serviceusagetype.prototype['name'] = undefined;






export default Serviceusagetype;

