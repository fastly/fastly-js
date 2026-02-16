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
 * The KvStoreBatchResponseErrors model module.
 * @module model/KvStoreBatchResponseErrors
 * @version 15.0.0
 */
class KvStoreBatchResponseErrors {
    /**
     * Constructs a new <code>KvStoreBatchResponseErrors</code>.
     * @alias module:model/KvStoreBatchResponseErrors
     */
    constructor() { 
        
        KvStoreBatchResponseErrors.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>KvStoreBatchResponseErrors</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/KvStoreBatchResponseErrors} obj Optional instance to populate.
     * @return {module:model/KvStoreBatchResponseErrors} The populated <code>KvStoreBatchResponseErrors</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new KvStoreBatchResponseErrors();

            if (data.hasOwnProperty('key')) {
                obj['key'] = ApiClient.convertToType(data['key'], 'String');
            }
            if (data.hasOwnProperty('index')) {
                obj['index'] = ApiClient.convertToType(data['index'], 'Number');
            }
            if (data.hasOwnProperty('code')) {
                obj['code'] = ApiClient.convertToType(data['code'], 'String');
            }
            if (data.hasOwnProperty('reason')) {
                obj['reason'] = ApiClient.convertToType(data['reason'], 'String');
            }
        }
        return obj;
    }


}

/**
 * The key that the error corresponds to. This field will be empty if the object or one of its fields was not parseable.
 * @member {String} key
 */
KvStoreBatchResponseErrors.prototype['key'] = undefined;

/**
 * The line number of the batch request body on which the error occurred (starting from 0 for the first line).
 * @member {Number} index
 */
KvStoreBatchResponseErrors.prototype['index'] = undefined;

/**
 * The HTTP response code for the item, or a 400 if the item's operation was not completed.
 * @member {String} code
 */
KvStoreBatchResponseErrors.prototype['code'] = undefined;

/**
 * A descriptor of this particular item's error.
 * @member {String} reason
 */
KvStoreBatchResponseErrors.prototype['reason'] = undefined;






export default KvStoreBatchResponseErrors;

