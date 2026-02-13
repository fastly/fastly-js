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
 * The HistoricalMeta model module.
 * @module model/HistoricalMeta
 * @version 15.0.0-beta.4
 */
class HistoricalMeta {
    /**
     * Constructs a new <code>HistoricalMeta</code>.
     * Meta information about the scope of the query in a human readable format.
     * @alias module:model/HistoricalMeta
     */
    constructor() { 
        
        HistoricalMeta.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>HistoricalMeta</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/HistoricalMeta} obj Optional instance to populate.
     * @return {module:model/HistoricalMeta} The populated <code>HistoricalMeta</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new HistoricalMeta();

            if (data.hasOwnProperty('to')) {
                obj['to'] = ApiClient.convertToType(data['to'], 'String');
            }
            if (data.hasOwnProperty('from')) {
                obj['from'] = ApiClient.convertToType(data['from'], 'String');
            }
            if (data.hasOwnProperty('by')) {
                obj['by'] = ApiClient.convertToType(data['by'], 'String');
            }
            if (data.hasOwnProperty('region')) {
                obj['region'] = ApiClient.convertToType(data['region'], 'String');
            }
            if (data.hasOwnProperty('datacenter')) {
                obj['datacenter'] = ApiClient.convertToType(data['datacenter'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} to
 */
HistoricalMeta.prototype['to'] = undefined;

/**
 * @member {String} from
 */
HistoricalMeta.prototype['from'] = undefined;

/**
 * @member {String} by
 */
HistoricalMeta.prototype['by'] = undefined;

/**
 * @member {String} region
 */
HistoricalMeta.prototype['region'] = undefined;

/**
 * @member {String} datacenter
 */
HistoricalMeta.prototype['datacenter'] = undefined;






export default HistoricalMeta;

