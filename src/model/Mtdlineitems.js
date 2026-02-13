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
 * The Mtdlineitems model module.
 * @module model/Mtdlineitems
 * @version 15.0.0-beta.2
 */
class Mtdlineitems {
    /**
     * Constructs a new <code>Mtdlineitems</code>.
     * @alias module:model/Mtdlineitems
     */
    constructor() { 
        
        Mtdlineitems.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Mtdlineitems</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Mtdlineitems} obj Optional instance to populate.
     * @return {module:model/Mtdlineitems} The populated <code>Mtdlineitems</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Mtdlineitems();

            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('amount')) {
                obj['amount'] = ApiClient.convertToType(data['amount'], 'Number');
            }
            if (data.hasOwnProperty('rate')) {
                obj['rate'] = ApiClient.convertToType(data['rate'], 'Number');
            }
            if (data.hasOwnProperty('units')) {
                obj['units'] = ApiClient.convertToType(data['units'], 'Number');
            }
            if (data.hasOwnProperty('product_name')) {
                obj['product_name'] = ApiClient.convertToType(data['product_name'], 'String');
            }
            if (data.hasOwnProperty('product_group')) {
                obj['product_group'] = ApiClient.convertToType(data['product_group'], 'String');
            }
            if (data.hasOwnProperty('product_line')) {
                obj['product_line'] = ApiClient.convertToType(data['product_line'], 'String');
            }
            if (data.hasOwnProperty('region')) {
                obj['region'] = ApiClient.convertToType(data['region'], 'String');
            }
            if (data.hasOwnProperty('usage_type')) {
                obj['usage_type'] = ApiClient.convertToType(data['usage_type'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Invoice line item transaction name.
 * @member {String} description
 */
Mtdlineitems.prototype['description'] = undefined;

/**
 * Billed amount for line item.
 * @member {Number} amount
 */
Mtdlineitems.prototype['amount'] = undefined;

/**
 * Price per unit.
 * @member {Number} rate
 */
Mtdlineitems.prototype['rate'] = undefined;

/**
 * Total number of units of usage.
 * @member {Number} units
 */
Mtdlineitems.prototype['units'] = undefined;

/**
 * The name of the product.
 * @member {String} product_name
 */
Mtdlineitems.prototype['product_name'] = undefined;

/**
 * The broader classification of the product (e.g., `Compute` or `Full-Site Delivery`).
 * @member {String} product_group
 */
Mtdlineitems.prototype['product_group'] = undefined;

/**
 * The broader classification of the product (e.g., `Network Services` or `Security`).
 * @member {String} product_line
 */
Mtdlineitems.prototype['product_line'] = undefined;

/**
 * The geographical area applicable for regionally based products.
 * @member {String} region
 */
Mtdlineitems.prototype['region'] = undefined;

/**
 * The unit of measure (e.g., `requests` or `bandwidth`).
 * @member {String} usage_type
 */
Mtdlineitems.prototype['usage_type'] = undefined;






export default Mtdlineitems;

