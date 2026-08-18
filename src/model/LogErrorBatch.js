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
import LogError from './LogError';

/**
 * The LogErrorBatch model module.
 * @module model/LogErrorBatch
 * @version 16.1.0
 */
class LogErrorBatch {
    /**
     * Constructs a new <code>LogErrorBatch</code>.
     * @alias module:model/LogErrorBatch
     */
    constructor() { 
        
        LogErrorBatch.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>LogErrorBatch</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LogErrorBatch} obj Optional instance to populate.
     * @return {module:model/LogErrorBatch} The populated <code>LogErrorBatch</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new LogErrorBatch();

            if (data.hasOwnProperty('batch_id')) {
                obj['batch_id'] = ApiClient.convertToType(data['batch_id'], 'String');
            }
            if (data.hasOwnProperty('logs')) {
                obj['logs'] = ApiClient.convertToType(data['logs'], [LogError]);
            }
        }
        return obj;
    }


}

/**
 * Unique identifier for this batch of logs.
 * @member {String} batch_id
 */
LogErrorBatch.prototype['batch_id'] = undefined;

/**
 * @member {Array.<module:model/LogError>} logs
 */
LogErrorBatch.prototype['logs'] = undefined;






export default LogErrorBatch;

