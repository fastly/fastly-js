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
import HistoricalMeta from './HistoricalMeta';
import HistoricalResponseAllOf from './HistoricalResponseAllOf';
import Results from './Results';

/**
 * The HistoricalResponse model module.
 * @module model/HistoricalResponse
 * @version 3.0.1-alpha.1
 */
class HistoricalResponse {
    /**
     * Constructs a new <code>HistoricalResponse</code>.
     * @alias module:model/HistoricalResponse
     * @implements module:model/Historical
     * @implements module:model/HistoricalResponseAllOf
     */
    constructor() { 
        Historical.initialize(this);HistoricalResponseAllOf.initialize(this);
        HistoricalResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>HistoricalResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/HistoricalResponse} obj Optional instance to populate.
     * @return {module:model/HistoricalResponse} The populated <code>HistoricalResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new HistoricalResponse();
            Historical.constructFromObject(data, obj);
            HistoricalResponseAllOf.constructFromObject(data, obj);

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
                obj['data'] = ApiClient.convertToType(data['data'], {'String': Array});
            }
        }
        return obj;
    }


}

/**
 * Whether or not we were able to successfully execute the query.
 * @member {String} status
 */
HistoricalResponse.prototype['status'] = undefined;

/**
 * @member {module:model/HistoricalMeta} meta
 */
HistoricalResponse.prototype['meta'] = undefined;

/**
 * If the query was not successful, this will provide a string that explains why.
 * @member {String} msg
 */
HistoricalResponse.prototype['msg'] = undefined;

/**
 * Contains the results of the query, organized by *service ID*, into arrays where each element describes one service over a *time span*.
 * @member {Object.<String, Array.<module:model/Results>>} data
 */
HistoricalResponse.prototype['data'] = undefined;


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
// Implement HistoricalResponseAllOf interface:
/**
 * Contains the results of the query, organized by *service ID*, into arrays where each element describes one service over a *time span*.
 * @member {Object.<String, Array.<module:model/Results>>} data
 */
HistoricalResponseAllOf.prototype['data'] = undefined;




export default HistoricalResponse;

