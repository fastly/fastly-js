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
 * The KvStoreUpsertBatch model module.
 * @module model/KvStoreUpsertBatch
 * @version 14.0.0
 */
class KvStoreUpsertBatch {
    /**
     * Constructs a new <code>KvStoreUpsertBatch</code>.
     * @alias module:model/KvStoreUpsertBatch
     * @param key {String} The key of the item to be added, updated, retrieved, or deleted.
     * @param value {String} Value for the item (in Base64 encoding).
     */
    constructor(key, value) { 
        
        KvStoreUpsertBatch.initialize(this, key, value);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, key, value) { 
        obj['key'] = key;
        obj['value'] = value;
    }

    /**
     * Constructs a <code>KvStoreUpsertBatch</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/KvStoreUpsertBatch} obj Optional instance to populate.
     * @return {module:model/KvStoreUpsertBatch} The populated <code>KvStoreUpsertBatch</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new KvStoreUpsertBatch();

            if (data.hasOwnProperty('key')) {
                obj['key'] = ApiClient.convertToType(data['key'], 'String');
            }
            if (data.hasOwnProperty('value')) {
                obj['value'] = ApiClient.convertToType(data['value'], 'String');
            }
            if (data.hasOwnProperty('time_to_live_sec')) {
                obj['time_to_live_sec'] = ApiClient.convertToType(data['time_to_live_sec'], 'Number');
            }
            if (data.hasOwnProperty('metadata')) {
                obj['metadata'] = ApiClient.convertToType(data['metadata'], 'String');
            }
            if (data.hasOwnProperty('background_fetch')) {
                obj['background_fetch'] = ApiClient.convertToType(data['background_fetch'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * The key of the item to be added, updated, retrieved, or deleted.
 * @member {String} key
 */
KvStoreUpsertBatch.prototype['key'] = undefined;

/**
 * Value for the item (in Base64 encoding).
 * @member {String} value
 */
KvStoreUpsertBatch.prototype['value'] = undefined;

/**
 * Indicates that the item should be deleted after the specified number of seconds have elapsed. Deletion is not immediate but will occur within 24 hours of the requested expiration.
 * @member {Number} time_to_live_sec
 */
KvStoreUpsertBatch.prototype['time_to_live_sec'] = undefined;

/**
 * An arbitrary data field which can contain up to 2000 bytes of data.
 * @member {String} metadata
 */
KvStoreUpsertBatch.prototype['metadata'] = undefined;

/**
 * If set to true, the new value for the item will not be immediately visible to other users of the KV store; they will receive the existing (stale) value while the platform updates cached copies. Setting this to true ensures that other users of the KV store will receive responses to 'get' operations for this item quickly, although they will be slightly out of date.
 * @member {Boolean} background_fetch
 * @default false
 */
KvStoreUpsertBatch.prototype['background_fetch'] = false;






export default KvStoreUpsertBatch;

