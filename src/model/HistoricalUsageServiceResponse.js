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
import Historical from './Historical';
import HistoricalMeta from './HistoricalMeta';
import HistoricalUsageData from './HistoricalUsageData';
import HistoricalUsageServiceResponseAllOf from './HistoricalUsageServiceResponseAllOf';

/**
 * The HistoricalUsageServiceResponse model module.
 * @module model/HistoricalUsageServiceResponse
 * @version 14.1.0
 */
class HistoricalUsageServiceResponse {
    /**
     * Constructs a new <code>HistoricalUsageServiceResponse</code>.
     * @alias module:model/HistoricalUsageServiceResponse
     * @implements module:model/Historical
     * @implements module:model/HistoricalUsageServiceResponseAllOf
     */
    constructor() { 
        Historical.initialize(this);HistoricalUsageServiceResponseAllOf.initialize(this);
        HistoricalUsageServiceResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>HistoricalUsageServiceResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/HistoricalUsageServiceResponse} obj Optional instance to populate.
     * @return {module:model/HistoricalUsageServiceResponse} The populated <code>HistoricalUsageServiceResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new HistoricalUsageServiceResponse();
            Historical.constructFromObject(data, obj);
            HistoricalUsageServiceResponseAllOf.constructFromObject(data, obj);

            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'String');
            }
            if (data.hasOwnProperty('meta')) {
                obj['meta'] = HistoricalMeta.constructFromObject(data['meta']);
            }
            if (data.hasOwnProperty('msg')) {
                obj['msg'] = ApiClient.convertToType(data['msg'], 'String');
            }
            if (data.hasOwnProperty('data')) {
                obj['data'] = ApiClient.convertToType(data['data'], {'String': {'String': HistoricalUsageData}});
            }
        }
        return obj;
    }


}

/**
 * Whether or not we were able to successfully execute the query.
 * @member {String} status
 */
HistoricalUsageServiceResponse.prototype['status'] = undefined;

/**
 * @member {module:model/HistoricalMeta} meta
 */
HistoricalUsageServiceResponse.prototype['meta'] = undefined;

/**
 * If the query was not successful, this will provide a string that explains why.
 * @member {String} msg
 */
HistoricalUsageServiceResponse.prototype['msg'] = undefined;

/**
 * Organized by *region*.
 * @member {Object.<String, Object.<String, module:model/HistoricalUsageData>>} data
 */
HistoricalUsageServiceResponse.prototype['data'] = undefined;


// Implement Historical interface:
/**
 * Whether or not we were able to successfully execute the query.
 * @member {String} status
 */
Historical.prototype['status'] = undefined;
/**
 * @member {module:model/HistoricalMeta} meta
 */
Historical.prototype['meta'] = undefined;
/**
 * If the query was not successful, this will provide a string that explains why.
 * @member {String} msg
 */
Historical.prototype['msg'] = undefined;
// Implement HistoricalUsageServiceResponseAllOf interface:
/**
 * Organized by *region*.
 * @member {Object.<String, Object.<String, module:model/HistoricalUsageData>>} data
 */
HistoricalUsageServiceResponseAllOf.prototype['data'] = undefined;




export default HistoricalUsageServiceResponse;

