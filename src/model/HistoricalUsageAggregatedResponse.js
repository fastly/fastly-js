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
import HistoricalUsageAggregatedResponseAllOf from './HistoricalUsageAggregatedResponseAllOf';
import HistoricalUsageData from './HistoricalUsageData';

/**
 * The HistoricalUsageAggregatedResponse model module.
 * @module model/HistoricalUsageAggregatedResponse
 * @version 7.6.0
 */
class HistoricalUsageAggregatedResponse {
    /**
     * Constructs a new <code>HistoricalUsageAggregatedResponse</code>.
     * @alias module:model/HistoricalUsageAggregatedResponse
     * @implements module:model/Historical
     * @implements module:model/HistoricalUsageAggregatedResponseAllOf
     */
    constructor() { 
        Historical.initialize(this);HistoricalUsageAggregatedResponseAllOf.initialize(this);
        HistoricalUsageAggregatedResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>HistoricalUsageAggregatedResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/HistoricalUsageAggregatedResponse} obj Optional instance to populate.
     * @return {module:model/HistoricalUsageAggregatedResponse} The populated <code>HistoricalUsageAggregatedResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new HistoricalUsageAggregatedResponse();
            Historical.constructFromObject(data, obj);
            HistoricalUsageAggregatedResponseAllOf.constructFromObject(data, obj);

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
                obj['data'] = ApiClient.convertToType(data['data'], {'String': HistoricalUsageData});
            }
        }
        return obj;
    }


}

/**
 * Whether or not we were able to successfully execute the query.
 * @member {String} status
 */
HistoricalUsageAggregatedResponse.prototype['status'] = undefined;

/**
 * @member {module:model/HistoricalMeta} meta
 */
HistoricalUsageAggregatedResponse.prototype['meta'] = undefined;

/**
 * If the query was not successful, this will provide a string that explains why.
 * @member {String} msg
 */
HistoricalUsageAggregatedResponse.prototype['msg'] = undefined;

/**
 * Organized by *region*.
 * @member {Object.<String, module:model/HistoricalUsageData>} data
 */
HistoricalUsageAggregatedResponse.prototype['data'] = undefined;


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
// Implement HistoricalUsageAggregatedResponseAllOf interface:
/**
 * Organized by *region*.
 * @member {Object.<String, module:model/HistoricalUsageData>} data
 */
HistoricalUsageAggregatedResponseAllOf.prototype['data'] = undefined;




export default HistoricalUsageAggregatedResponse;

