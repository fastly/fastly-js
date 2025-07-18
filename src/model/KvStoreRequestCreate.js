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
 * The KvStoreRequestCreate model module.
 * @module model/KvStoreRequestCreate
 * @version 12.1.0
 */
class KvStoreRequestCreate {
    /**
     * Constructs a new <code>KvStoreRequestCreate</code>.
     * @alias module:model/KvStoreRequestCreate
     * @param name {String} A human-readable name for the store. Refer to https://docs.fastly.com/products/compute-resource-limits#kv-store for limitations on the KV store name.
     */
    constructor(name) { 
        
        KvStoreRequestCreate.initialize(this, name);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, name) { 
        obj['name'] = name;
    }

    /**
     * Constructs a <code>KvStoreRequestCreate</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/KvStoreRequestCreate} obj Optional instance to populate.
     * @return {module:model/KvStoreRequestCreate} The populated <code>KvStoreRequestCreate</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new KvStoreRequestCreate();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
        }
        return obj;
    }


}

/**
 * A human-readable name for the store. Refer to https://docs.fastly.com/products/compute-resource-limits#kv-store for limitations on the KV store name.
 * @member {String} name
 */
KvStoreRequestCreate.prototype['name'] = undefined;






export default KvStoreRequestCreate;

