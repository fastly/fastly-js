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
import Historical from './Historical';
import HistoricalFieldAggregateResponseAllOf from './HistoricalFieldAggregateResponseAllOf';
import HistoricalFieldResultsAttributes from './HistoricalFieldResultsAttributes';
import HistoricalMeta from './HistoricalMeta';

/**
 * The HistoricalFieldAggregateResponse model module.
 * @module model/HistoricalFieldAggregateResponse
 * @version 6.1.0
 */
class HistoricalFieldAggregateResponse {
    /**
     * Constructs a new <code>HistoricalFieldAggregateResponse</code>.
     * @alias module:model/HistoricalFieldAggregateResponse
     * @implements module:model/Historical
     * @implements module:model/HistoricalFieldAggregateResponseAllOf
     */
    constructor() { 
        Historical.initialize(this);HistoricalFieldAggregateResponseAllOf.initialize(this);
        HistoricalFieldAggregateResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>HistoricalFieldAggregateResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/HistoricalFieldAggregateResponse} obj Optional instance to populate.
     * @return {module:model/HistoricalFieldAggregateResponse} The populated <code>HistoricalFieldAggregateResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new HistoricalFieldAggregateResponse();
            Historical.constructFromObject(data, obj);
            HistoricalFieldAggregateResponseAllOf.constructFromObject(data, obj);

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
                obj['data'] = ApiClient.convertToType(data['data'], [HistoricalFieldResultsAttributes]);
            }
        }
        return obj;
    }


}

/**
 * Whether or not we were able to successfully execute the query.
 * @member {String} status
 */
HistoricalFieldAggregateResponse.prototype['status'] = undefined;

/**
 * @member {module:model/HistoricalMeta} meta
 */
HistoricalFieldAggregateResponse.prototype['meta'] = undefined;

/**
 * If the query was not successful, this will provide a string that explains why.
 * @member {String} msg
 */
HistoricalFieldAggregateResponse.prototype['msg'] = undefined;

/**
 * @member {Array.<module:model/HistoricalFieldResultsAttributes>} data
 */
HistoricalFieldAggregateResponse.prototype['data'] = undefined;


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
// Implement HistoricalFieldAggregateResponseAllOf interface:
/**
 * @member {Array.<module:model/HistoricalFieldResultsAttributes>} data
 */
HistoricalFieldAggregateResponseAllOf.prototype['data'] = undefined;




export default HistoricalFieldAggregateResponse;

