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
import HistoricalDdos from './HistoricalDdos';
import HistoricalDdosMeta from './HistoricalDdosMeta';
import PlatformDdosEntry from './PlatformDdosEntry';
import PlatformDdosResponseAllOf from './PlatformDdosResponseAllOf';

/**
 * The PlatformDdosResponse model module.
 * @module model/PlatformDdosResponse
 * @version 9.0.0
 */
class PlatformDdosResponse {
    /**
     * Constructs a new <code>PlatformDdosResponse</code>.
     * @alias module:model/PlatformDdosResponse
     * @implements module:model/HistoricalDdos
     * @implements module:model/PlatformDdosResponseAllOf
     */
    constructor() { 
        HistoricalDdos.initialize(this);PlatformDdosResponseAllOf.initialize(this);
        PlatformDdosResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PlatformDdosResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PlatformDdosResponse} obj Optional instance to populate.
     * @return {module:model/PlatformDdosResponse} The populated <code>PlatformDdosResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PlatformDdosResponse();
            HistoricalDdos.constructFromObject(data, obj);
            PlatformDdosResponseAllOf.constructFromObject(data, obj);

            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'String');
            }
            if (data.hasOwnProperty('meta')) {
                obj['meta'] = HistoricalDdosMeta.constructFromObject(data['meta']);
            }
            if (data.hasOwnProperty('msg')) {
                obj['msg'] = ApiClient.convertToType(data['msg'], 'String');
            }
            if (data.hasOwnProperty('data')) {
                obj['data'] = ApiClient.convertToType(data['data'], [PlatformDdosEntry]);
            }
        }
        return obj;
    }


}

/**
 * Whether or not we were able to successfully execute the query.
 * @member {String} status
 */
PlatformDdosResponse.prototype['status'] = undefined;

/**
 * @member {module:model/HistoricalDdosMeta} meta
 */
PlatformDdosResponse.prototype['meta'] = undefined;

/**
 * If the query was not successful, this will provide a string that explains why.
 * @member {String} msg
 */
PlatformDdosResponse.prototype['msg'] = undefined;

/**
 * A list of timeseries.
 * @member {Array.<module:model/PlatformDdosEntry>} data
 */
PlatformDdosResponse.prototype['data'] = undefined;


// Implement HistoricalDdos interface:
/**
 * Whether or not we were able to successfully execute the query.
 * @member {String} status
 */
HistoricalDdos.prototype['status'] = undefined;
/**
 * @member {module:model/HistoricalDdosMeta} meta
 */
HistoricalDdos.prototype['meta'] = undefined;
/**
 * If the query was not successful, this will provide a string that explains why.
 * @member {String} msg
 */
HistoricalDdos.prototype['msg'] = undefined;
/**
 * A list of [entries](#entry-data-model).
 * @member {Array.<module:model/PlatformDdosDataItems>} data
 */
HistoricalDdos.prototype['data'] = undefined;
// Implement PlatformDdosResponseAllOf interface:
/**
 * A list of timeseries.
 * @member {Array.<module:model/PlatformDdosEntry>} data
 */
PlatformDdosResponseAllOf.prototype['data'] = undefined;




export default PlatformDdosResponse;

