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
 * The Website model module.
 * @module model/Website
 * @version 16.0.0
 */
class Website {
    /**
     * Constructs a new <code>Website</code>.
     * @alias module:model/Website
     */
    constructor() { 
        
        Website.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Website</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Website} obj Optional instance to populate.
     * @return {module:model/Website} The populated <code>Website</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Website();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('domain')) {
                obj['domain'] = ApiClient.convertToType(data['domain'], 'String');
            }
            if (data.hasOwnProperty('page_ids')) {
                obj['page_ids'] = ApiClient.convertToType(data['page_ids'], ['String']);
            }
            if (data.hasOwnProperty('created_at')) {
                obj['created_at'] = ApiClient.convertToType(data['created_at'], 'Date');
            }
            if (data.hasOwnProperty('updated_at')) {
                obj['updated_at'] = ApiClient.convertToType(data['updated_at'], 'Date');
            }
        }
        return obj;
    }


}

/**
 * Unique website identifier
 * @member {String} id
 */
Website.prototype['id'] = undefined;

/**
 * Website domain
 * @member {String} domain
 */
Website.prototype['domain'] = undefined;

/**
 * IDs of pages associated with this website
 * @member {Array.<String>} page_ids
 */
Website.prototype['page_ids'] = undefined;

/**
 * @member {Date} created_at
 */
Website.prototype['created_at'] = undefined;

/**
 * @member {Date} updated_at
 */
Website.prototype['updated_at'] = undefined;






export default Website;

