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
 * The Usagemetric model module.
 * @module model/Usagemetric
 * @version 12.1.0
 */
class Usagemetric {
    /**
     * Constructs a new <code>Usagemetric</code>.
     * @alias module:model/Usagemetric
     */
    constructor() { 
        
        Usagemetric.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Usagemetric</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Usagemetric} obj Optional instance to populate.
     * @return {module:model/Usagemetric} The populated <code>Usagemetric</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Usagemetric();

            if (data.hasOwnProperty('month')) {
                obj['month'] = ApiClient.convertToType(data['month'], 'String');
            }
            if (data.hasOwnProperty('usage_type')) {
                obj['usage_type'] = ApiClient.convertToType(data['usage_type'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('region')) {
                obj['region'] = ApiClient.convertToType(data['region'], 'String');
            }
            if (data.hasOwnProperty('unit')) {
                obj['unit'] = ApiClient.convertToType(data['unit'], 'String');
            }
            if (data.hasOwnProperty('quantity')) {
                obj['quantity'] = ApiClient.convertToType(data['quantity'], 'Number');
            }
            if (data.hasOwnProperty('raw_quantity')) {
                obj['raw_quantity'] = ApiClient.convertToType(data['raw_quantity'], 'Number');
            }
            if (data.hasOwnProperty('product_id')) {
                obj['product_id'] = ApiClient.convertToType(data['product_id'], 'String');
            }
            if (data.hasOwnProperty('last_updated_at')) {
                obj['last_updated_at'] = ApiClient.convertToType(data['last_updated_at'], 'String');
            }
        }
        return obj;
    }


}

/**
 * The year and month of the usage element.
 * @member {String} month
 */
Usagemetric.prototype['month'] = undefined;

/**
 * The usage type identifier for the usage. This is a single, billable metric for the product.
 * @member {String} usage_type
 */
Usagemetric.prototype['usage_type'] = undefined;

/**
 * Full name of the product usage type as it might appear on a customer's invoice.
 * @member {String} name
 */
Usagemetric.prototype['name'] = undefined;

/**
 * The geographical area applicable for regionally based products.
 * @member {String} region
 */
Usagemetric.prototype['region'] = undefined;

/**
 * The unit for the usage as shown on an invoice. If there is no explicit unit, this field will be \"unit\" (e.g., a request with `product_id` of 'cdn_usage' and `usage_type` of 'North America Requests' has no unit, and will return \"unit\").
 * @member {String} unit
 */
Usagemetric.prototype['unit'] = undefined;

/**
 * The quantity of the usage for the product.
 * @member {Number} quantity
 */
Usagemetric.prototype['quantity'] = undefined;

/**
 * The raw units measured for the product.
 * @member {Number} raw_quantity
 */
Usagemetric.prototype['raw_quantity'] = undefined;

/**
 * The product identifier associated with the usage type. This corresponds to a Fastly product offering.
 * @member {String} product_id
 */
Usagemetric.prototype['product_id'] = undefined;

/**
 * The date when the usage metric was last updated.
 * @member {String} last_updated_at
 */
Usagemetric.prototype['last_updated_at'] = undefined;






export default Usagemetric;

