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
import HistoricalAggregateResponseAllOf from './HistoricalAggregateResponseAllOf';
import HistoricalMeta from './HistoricalMeta';
import Results from './Results';

/**
 * The HistoricalAggregateResponse model module.
 * @module model/HistoricalAggregateResponse
 * @version 3.3.0
 */
class HistoricalAggregateResponse {
    /**
     * Constructs a new <code>HistoricalAggregateResponse</code>.
     * @alias module:model/HistoricalAggregateResponse
     * @implements module:model/Historical
     * @implements module:model/HistoricalAggregateResponseAllOf
     */
    constructor() { 
        Historical.initialize(this);HistoricalAggregateResponseAllOf.initialize(this);
        HistoricalAggregateResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>HistoricalAggregateResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/HistoricalAggregateResponse} obj Optional instance to populate.
     * @return {module:model/HistoricalAggregateResponse} The populated <code>HistoricalAggregateResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new HistoricalAggregateResponse();
            Historical.constructFromObject(data, obj);
            HistoricalAggregateResponseAllOf.constructFromObject(data, obj);

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
                obj['data'] = ApiClient.convertToType(data['data'], [Results]);
            }
        }
        return obj;
    }


}

/**
 * Whether or not we were able to successfully execute the query.
 * @member {String} status
 */
HistoricalAggregateResponse.prototype['status'] = undefined;

/**
 * @member {module:model/HistoricalMeta} meta
 */
HistoricalAggregateResponse.prototype['meta'] = undefined;

/**
 * If the query was not successful, this will provide a string that explains why.
 * @member {String} msg
 */
HistoricalAggregateResponse.prototype['msg'] = undefined;

/**
 * @member {Array.<module:model/Results>} data
 */
HistoricalAggregateResponse.prototype['data'] = undefined;


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
// Implement HistoricalAggregateResponseAllOf interface:
/**
 * @member {Array.<module:model/Results>} data
 */
HistoricalAggregateResponseAllOf.prototype['data'] = undefined;




export default HistoricalAggregateResponse;

