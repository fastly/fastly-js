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
 * The KvStoreDetails model module.
 * @module model/KvStoreDetails
 * @version 15.0.0-beta.2
 */
class KvStoreDetails {
    /**
     * Constructs a new <code>KvStoreDetails</code>.
     * @alias module:model/KvStoreDetails
     */
    constructor() { 
        
        KvStoreDetails.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>KvStoreDetails</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/KvStoreDetails} obj Optional instance to populate.
     * @return {module:model/KvStoreDetails} The populated <code>KvStoreDetails</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new KvStoreDetails();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('created_at')) {
                obj['created_at'] = ApiClient.convertToType(data['created_at'], 'String');
            }
            if (data.hasOwnProperty('updated_at')) {
                obj['updated_at'] = ApiClient.convertToType(data['updated_at'], 'String');
            }
        }
        return obj;
    }


}

/**
 * ID of the store.
 * @member {String} id
 */
KvStoreDetails.prototype['id'] = undefined;

/**
 * Name of the store.
 * @member {String} name
 */
KvStoreDetails.prototype['name'] = undefined;

/**
 * Timestamp at which the store was created.
 * @member {String} created_at
 */
KvStoreDetails.prototype['created_at'] = undefined;

/**
 * Timestamp at which the store was last updated.
 * @member {String} updated_at
 */
KvStoreDetails.prototype['updated_at'] = undefined;






export default KvStoreDetails;

