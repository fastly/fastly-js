/**
 * Fastly API
 * Via the Fastly API you can perform any of the operations that are possible within the management console,  including creating services, domains, and backends, configuring rules or uploading your own application code, as well as account operations such as user administration and billing reports. The API is organized into collections of endpoints that allow manipulation of objects related to Fastly services and accounts. For the most accurate and up-to-date API reference content, visit our [Developer Hub](https://developer.fastly.com/reference/api/) 
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: oss@fastly.com
 *
 * NOTE: This class is auto generated.
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import BatchErrors from './BatchErrors';

/**
 * The Batch model module.
 * @module model/Batch
 * @version 4.4.0
 */
class Batch {
    /**
     * Constructs a new <code>Batch</code>.
     * @alias module:model/Batch
     */
    constructor() { 
        
        Batch.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Batch</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Batch} obj Optional instance to populate.
     * @return {module:model/Batch} The populated <code>Batch</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Batch();

            if (data.hasOwnProperty('title')) {
                obj['title'] = ApiClient.convertToType(data['title'], 'String');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('errors')) {
                obj['errors'] = ApiClient.convertToType(data['errors'], [BatchErrors]);
            }
        }
        return obj;
    }


}

/**
 * A descriptor for the response of the entire batch
 * @member {String} title
 */
Batch.prototype['title'] = undefined;

/**
 * If an error is present in any of the requests, this field will describe that error
 * @member {String} type
 */
Batch.prototype['type'] = undefined;

/**
 * Per-key errors which failed to parse, validate, or otherwise transmit
 * @member {Array.<module:model/BatchErrors>} errors
 */
Batch.prototype['errors'] = undefined;






export default Batch;

